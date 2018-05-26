import { createStackNavigator } from 'react-navigation';

import Main from './containers/Main';

const BaseNavigation = createStackNavigator({
  Main: { screen: Main },
});

export default BaseNavigation;