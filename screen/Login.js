import React from 'react';
import {Text, Button, AsyncStorage} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import SplashScreen from './component/splashscreen';
import {AccessToken, GraphRequest, GraphRequestManager, LoginButton} from 'react-native-fbsdk';

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
    state = {userInfo: '', isSignInProgress: false, loggedIn: true, loading: true};

    async componentDidMount() {
        // if (await AsyncStorage.getItem('name') && await AsyncStorage.getItem('photo')) {
        //     this.props.navigation.replace('Index');
        // } else {
        this.setState({
            loggedIn: false,
            loading: false,
        });
        // }
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
                    let req = new GraphRequest( '/me', {
                        httpMethod: 'GET',
                        version: 'v2.5',
                        parameters: {
                            fields: {
                                string: 'id, name, email, picture.type(large)'
                            }
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
                        readPermissions={['public_profile', 'email','user_friends']}
                        onLoginFinished={this.loginWithFacebook}
                        onLogoutFinished={() => console.log('logout.')}/>
                </>
            );
        }
    }

}


export default Login;
