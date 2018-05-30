import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Strings from '../utils/strings';
import Images from '../utils/images';
import { DetailScreen } from '../containers'
import MainRouter from './MainRouter'

const GlobalNavigation = createStackNavigator(
{
    MainScreen: {
        screen: MainRouter,
        navigationOptions: {
            title: Strings.home_title,
            headerStyle: {
                backgroundColor: '#000000',
            },
            headerTitleStyle: {
                fontWeight: 'normal',
                textAlign: 'center',
                alignSelf: "center",
                width: "90%",
                color: 'white'
            },
            headerLeft: (<View/>),
            headerRight: (<Image source={Images.settings_icon} style={{width: 20, resizeMode: 'contain', marginRight: 20}}/>),
        }
    },
    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: {
            title: "",
            headerStyle: {

                position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTintColor: 'white',
            // headerLeft: (<View/>),
            headerRight: (<Image source={Images.like_empty} style={{width: 30, resizeMode: 'contain', marginRight: 20}}/>),
        }
    },     initialRouteName: 'MainScreen',

});

export default GlobalNavigation;