import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './Store';
import GlobalNavigation from './routes/GlobalRouter';

const App = () => (
  <Provider store={configureStore()}>
    <GlobalNavigation />
  </Provider>
);

export default App;