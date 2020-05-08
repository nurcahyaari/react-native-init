// eslint-disable-next-line no-unused-vars
import { authDTO, authActionDTO, userDTO } from './dto';

import {
 AUTH_SET_EMAIL, AUTH_SET_PASSWORD, AUTH_LOGIN, AUTH_RESET, AUTH_LOGOUT,
} from '../constant';

interface Reducer {
    auth: authDTO;
    user: userDTO;
}

const initState:Reducer = {
    auth: {
        user: {
            id: null,
            name: '',
            email: '',
        },
        key: {
            token: '',
            refreshToken: '',
        },
    },
    user: {
        email: '',
        password: '',
    },
};

const AuthReducer = (state: Reducer = initState, action: authActionDTO) => {
    console.log(action);
    switch (action.type) {
        case AUTH_SET_EMAIL: {
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.data?.user?.email,
                },
            };
        }
        case AUTH_SET_PASSWORD: {
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.data?.user?.password,
                },
            };
        }
        case AUTH_RESET: {
            return {
                ...state,
                user: {
                    email: '',
                    password: '',
                },
            };
        }
        case AUTH_LOGIN: {
            return {
                ...state,
                auth: {
                    user: {
                        id: action.data?.auth?.user.id,
                        name: action.data?.auth?.user.name,
                        email: action.data?.auth?.user.email,
                    },
                    key: {
                        token: action.data?.auth?.key.token,
                        refreshToken: action.data?.auth?.key.refreshToken,
                    },
                },
            };
        }
        case AUTH_LOGOUT: {
            return initState;
        }
        default: {
            return state;
        }
    }
};

export default AuthReducer;
