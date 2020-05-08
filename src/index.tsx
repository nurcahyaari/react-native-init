import React from 'react';

// import Redux
import { Provider } from 'react-redux';

// import redux store
import { PersistGate } from 'redux-persist/integration/react';
import { Store, PersistStore } from './utils/redux-store';


import App from './App';

const Bootstrapper = () => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={PersistStore}>
      <App />
    </PersistGate>
  </Provider>
);

export default Bootstrapper;
