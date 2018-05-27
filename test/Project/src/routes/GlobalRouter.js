import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Strings from '../constants/strings';
import Images from '../constants/images';
import Main from '../containers/MainScreen'

const GlobalNavigation = createStackNavigator(
{
    MainScreen: {
        screen: Main,
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
    }
});

export default GlobalNavigation;