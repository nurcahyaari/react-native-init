/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';

// import all of reducers
import AuthReducer from './auth/auth.reducer';
import LoadingReducer from './loading/loading.reducer';

const CombineReducers = combineReducers({
    auth: AuthReducer,
    loading: LoadingReducer,
});

export default CombineReducers;
