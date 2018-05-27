import { combineReducers } from 'redux';
import MainNavigation from '../routes/MainRouter';

export default combineReducers({
  navigation: (state, action) => MainNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
});