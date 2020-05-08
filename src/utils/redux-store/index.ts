import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';


// import reducer
import Reducers from '../../modules/redux';

// seting persist store
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'auth',
    ],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export const Store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
    ),
);

export const PersistStore = persistStore(Store);

// export default Store;
