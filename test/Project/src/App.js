import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import GlobalNavigation from './routes/GlobalRouter';

const App = () => (
  <Provider store={Store}>
    <GlobalNavigation />
  </Provider>
);

export default App;