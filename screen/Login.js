import React from 'react';
import {Alert, AsyncStorage} from 'react-native';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import SplashScreen from './component/splashscreen';
import {AccessToken, GraphRequest, GraphRequestManager, LoginButton} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '11309916800-7quu4djmaeglbjjm9h343hqisqa2f8bq.apps.googleusercontent.com',
    offlineAccess: true,
    hostedDomain: '',
    loginHint: '',
    forceConsentPrompt: true,
    accountName: '',
});

/*
    generate key
    cmd => cd android/app && keytool -exportcert -keystore debug.keystore -list -v

    Xo8WBi6jzSxKDVR4drqm84yr9iU= -> facebook hash key
 */
class Login extends React.Component {
    state = {userInfo: '', isSignInProgress: false, loggedIn: true, loading: false};

    async componentDidMount() {
        const enabled = await firebase.messaging().hasPermission();

        if (enabled) {
            await this.getToken();
        } else {
            await this.requestPermission();
        }

        await this.createNotificationListeners();

        if (await AsyncStorage.getItem('name') && await AsyncStorage.getItem('photo')) {
            this.props.navigation.replace('Index');
        } else {
            this.setState({
                loggedIn: false,
                loading: false,
            });
        }
    }

    componentWillUnmount() {
        this.notificationListener();
        this.notificationOpenedListener();
    }

    showAlert = (title, body) => {
        Alert.alert(
            title, body,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    };

    async createNotificationListeners() {
        const channel = new firebase.notifications.Android.Channel('test-channel', 'test-channel', firebase.notifications.Android.Importance.Max)
            // .setDescription('channel_name')
            .setSound('default');
        await firebase.notifications().android.createChannel(channel);
        /*
        * Triggered when a particular notification has been received in foreground
        * */
        this.notificationListener = firebase.notifications().onNotification(async notification => {
            const {title, body} = notification;
            const localNotification = new firebase.notifications.Notification({
                sound: 'default',
                show_in_foreground: true,
            })
                .setNotificationId(new Date().valueOf().toString())
                .setTitle('a')
                .setSound('default')
                .setBody('a')
                .setData({
                    now: new Date().toISOString(),
                    payload: data,
                })
                .android.setAutoCancel(true)
                .android.setBigText(body)
                // .android.setLargeIcon('ic_launchers')
                .android.setVibrate(1000)
                .android.setColor('#74c900')
                .android.setColorized(true)
                .android.setChannelId('test-channel') // e.g. the id you chose above
                // .android.setSmallIcon('ic_launchers') // create this icon in Android Studio
                .android.setPriority(firebase.notifications.Android.Priority.High);

            firebase
                .notifications()
                .displayNotification(localNotification);
            this.showAlert(title, body);
        });


        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened(notificationOpen => {
            const {title, body} = notificationOpen.notification;
            this.showAlert(title, body);
        });

        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const {title, body} = notificationOpen.notification;
            this.showAlert(title, body);
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
            //process data message
            alert(JSON.stringify(message));
            console.log(JSON.stringify(message));
        });
    }

    async getToken() {
        const fcmToken = await firebase.messaging().getToken();
        await AsyncStorage.setItem('fcmToken', fcmToken);
        console.log(fcmToken);
    }

    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
            this.getToken();
        } catch (error) {
            // User has rejected permissions
            console.log('permission rejected');
        }
    }

    loginWithGoogle = async () => {
        this.setState({
            isSignInProgress: true,
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // alert(JSON.stringify(userInfo.user.email));
            await AsyncStorage.setItem('name', userInfo.user.name);
            await AsyncStorage.setItem('photo', userInfo.user.photo);
            // alert(JSON.stringify(userInfo.user));
            this.setState({userInfo: userInfo.user.photo, isSigninInProgress: false}, () => {
                this.props.navigation.navigate('Index');
            });
        } catch (e) {
            switch (e.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    alert('sign in canceled');
                    break;
                case statusCodes.IN_PROGRESS:
                    alert('in progress');
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    alert('play services not available');
                    break;
                case statusCodes.SIGN_IN_REQUIRED:
                    alert('sign in req');
                    break;
                default:
                    break;
            }
            this.setState({userInfo: e.code, isSigninInProgress: false});
        }
    };
    loginWithFacebook = (error, result) => {
        if (error) {
            console.log('login has error: ', result, error);
        } else if (result.isCancelled) {
            console.log('login is cancelled.');
        } else {
            AccessToken.getCurrentAccessToken().then(
                data => {
                    let req = new GraphRequest('/me', {
                        httpMethod: 'GET',
                        version: 'v2.5',
                        parameters: {
                            fields: {
                                string: 'id, name, email, picture.type(large)',
                            },
                        },
                    }, async (err, res) => {
                        alert(JSON.stringify(res));
                        await AsyncStorage.setItem('name', res.name);
                        await AsyncStorage.setItem('photo', res.picture.data.url);
                        // his.props.navigation.navigate('Index');
                    });
                    new GraphRequestManager().addRequest(req).start();
                },
            );
        }
    };

    render() {
        if (this.state.loading) {
            return <SplashScreen/>;
        } else {
            return (
                <>
                    <GoogleSigninButton onPress={this.loginWithGoogle} size={GoogleSigninButton.Size.Wide}
                                        color={GoogleSigninButton.Color.Dark} disabled={this.state.isSigninInProgress}/>
                    <LoginButton
                        readPermissions={['public_profile', 'email', 'user_friends']}
                        onLoginFinished={this.loginWithFacebook}
                        onLogoutFinished={() => console.log('logout.')}/>
                </>
            );
        }
    }

}


export default Login;
