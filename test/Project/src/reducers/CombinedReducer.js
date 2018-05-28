import { combineReducers } from 'redux';
import GlobalNavigation from '../routes/GlobalRouter';
import BrowseReducer from '../reducers/BrowseReducer';

export default combineReducers({
  navigation: (state, action) => GlobalNavigation.router.getStateForAction(action, state),
  browseReducer: BrowseReducer,
});