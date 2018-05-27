import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Strings from '../constants/strings';
import Images from '../constants/images';

import TestScreen from '../containers/Test';

const MainNavigation = createBottomTabNavigator(
  {
    Browse: {
      screen: TestScreen,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_browse,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.browse_filled : Images.browse_empty;
            return <Image source={icon} style={{width: 20, flex: 1, resizeMode: 'contain', top: 2}}/>;
          },
      }),
    },
    Posts: {
      screen: TestScreen,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_posts,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.posts_filled : Images.posts_empty;
            return <Image source={icon} style={{width: 24, flex: 1, resizeMode: 'contain', top: 2}}/>;
          },
      }),
    },
    Favorites: {
      screen: TestScreen,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_favourites,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.favourites_filled : Images.favourites_empty;
            return <Image source={icon} style={{width: 22, flex: 1, resizeMode: 'contain', top: 2}}/>;
          },
      }),
    },
    Redeemed: {
      screen: TestScreen,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_redeemed,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.redeemed_filled : Images.redeemed_empty;
            return <Image source={icon} style={{width: 21, flex: 1, resizeMode: 'contain', top: 1}}/>;
          },
      }),
    },
    Profile: {
      screen: TestScreen,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_profile,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.profile_filled : Images.profile_empty;
            return <Image source={icon} style={{width: 24, flex: 1, resizeMode: 'contain', top: 2}}/>;
          },
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      showIcon: true,
      labelStyle: {
        fontSize: 9,
        fontWeight: 'bold',
        bottom: 10
      },
      style: {
        backgroundColor: 'black',
        height : 65
      },
    }
  }
);
export default MainNavigation;
