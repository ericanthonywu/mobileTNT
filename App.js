import React from 'react';
import {View,Easing,Animated} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Login from './screen/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screen/Home';
import {createStackNavigator} from 'react-navigation-stack';
import Profile from './screen/Profile';
import Chat from './screen/Chat';
import Consult from './screen/Consult';
import Care from './screen/Care';
import EditProfile from './screen/EditProfile';
import ChatRoom from './screen/ChatRoom';
import AddPet from './screen/AddPet';

const HomeNavigator = createStackNavigator({
    Index: {screen: Home},
    Chat: {screen: Chat},
    Consult:{screen: Consult},
    ChatRoom: {screen: ChatRoom},
},{
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateX: translateX}]};
        },
    })
});

const CareNavigator = createStackNavigator({
    Index: {screen: Care},
    Chat: {screen: Chat},
    ChatRoom: {screen: ChatRoom}
},{
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateX: translateX}]};
        },
    })
});

const ProfileNavigator = createStackNavigator({
    Index: {screen: Profile},
    EditProfile: {screen: EditProfile},
    AddPet: {screen: AddPet}
},{
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateX: translateX}]};
        },
    })
});


const TabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            tabBarLabel: 'Main',
            tabBarIcon: ({tintColor}) => (
                <View>
                    <Icon style={[{color: tintColor}]} size={25} name={'columns'}/>
                </View>),
        },
    },

    Care: {
        screen: CareNavigator,
        navigationOptions: {
            tabBarLabel: 'Care',
            tabBarIcon: ({tintColor}) => (
                <View>
                    <Icon style={[{color: tintColor}]} size={25} name={'user-md'}/>
                </View>),
        },
    },

    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <View>
                    <Icon style={[{color: tintColor}]} size={25} name={'user'}/>
                </View>),
        },
    },
},{
    activeColor: '#000',
    inactiveColor: '#e1e1e1',
    barStyle: { backgroundColor: '#fff' },
});
// console.disableYellowBox = true TODO:Remove on Production
const IndexNavigator = createStackNavigator({
    //Login: {screen: Login},
    Index: {screen: TabNavigator},
}, {
    headerMode: 'none',
});

export default createAppContainer(IndexNavigator);
