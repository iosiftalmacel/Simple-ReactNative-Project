import React from 'react';
import { Image } from 'react-native';
import { createTabNavigator  } from 'react-navigation';
import Strings from '../utils/strings';
import Images from '../utils/images';

import { BrowsePanel, PlaceholderPanel } from '../containers'


const MainNavigation = createTabNavigator (
  {
    Browse: {
      screen: BrowsePanel,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_browse,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.browse_filled : Images.browse_empty;
            return <Image source={icon} style={{width: 20, flex: 1, resizeMode: 'contain'}}/>;
          },
      }),
    },
    Posts: {
      screen: PlaceholderPanel,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_posts,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.posts_filled : Images.posts_empty;
            return <Image source={icon} style={{width: 24, flex: 1, resizeMode: 'contain', bottom: 1}}/>;
          },
      }),
    },
    Favorites: {
      screen: PlaceholderPanel,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_favourites,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.favourites_filled : Images.favourites_empty;
            return <Image source={icon} style={{width: 22, flex: 1, resizeMode: 'contain', bottom: 1}}/>;
          },
      }),
    },
    Redeemed: {
      screen: PlaceholderPanel,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_redeemed,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.redeemed_filled : Images.redeemed_empty;
            return <Image source={icon} style={{width: 21, flex: 1, resizeMode: 'contain', bottom: 2}}/>;
          },
      }),
    },
    Profile: {
      screen: PlaceholderPanel,
      navigationOptions: ({navigation}) => ({
          title: Strings.bottom_nav_profile,
          tabBarIcon: ({ focused, tintColor }) => {
            var icon = focused ? Images.profile_filled : Images.profile_empty;
            return <Image source={icon} style={{width: 23, flex: 1, resizeMode: 'contain'}}/>;
          },
      }),
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      renderIndicator: () => null,
      activeTintColor: 'white',
      showIcon: true,
      iconStyle :{
        top: 4
      },
      labelStyle: {
        fontSize: 9,
        fontWeight: 'bold',
        top: 4,
        width: 60,
      },
      style: {
        backgroundColor: 'black',
        height : 65
      },
    }
  }
);
export default MainNavigation;
