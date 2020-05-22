import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createFilter } from 'redux-persist-transform-filter';
// import reducer
import Reducers from '../../modules/redux';

// create filter
const AuthTransform = createFilter('auth', [
    'auth',
]);


// seting persist store
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transForm: AuthTransform,
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
