/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { authActionDTO } from './dto/authReducer.dto';
// eslint-disable-next-line no-unused-vars
import {
 AUTH_SET_EMAIL, AUTH_SET_PASSWORD, AUTH_RESET, AUTH_LOGIN, AUTH_LOGOUT,
} from '../constant';
import AuthService from './auth.service';

// import other action
import { LoadingShow, LoadingHide } from '../loading/loading.action';

// import store
import Storage from '../../../utils/storage';
import { userDTO, authDTO } from './dto';

const authService = new AuthService();

export const SetEmail = (email: string):authActionDTO => ({
    type: AUTH_SET_EMAIL,
    data: {
        user: {
            email,
        },
    },
});

export const SetPassword = (password: string):authActionDTO => ({
    type: AUTH_SET_PASSWORD,
    data: {
        user: {
            password,
        },
    },
});

const SetUsers = (users:authDTO):authActionDTO => ({
    type: AUTH_LOGIN,
    data: {
        auth: {
            user: {
                id: users.user.id,
                name: users.user.name,
                email: users.user.email,
            },
            key: {
                token: users.key.token,
                refreshToken: users.key.refreshToken,
            },
        },
    },
});

const ResetEmailAndPassword = () => ({
    type: AUTH_RESET,
});

export const Logout = ():authActionDTO => ({
    type: AUTH_LOGOUT,
});

export const LoginAsync = (email: string, password: string) => async (dispatch:any) => {
    dispatch(LoadingShow());
    const res = await authService.Login({ email, password });
    const { data } = res;
    dispatch(ResetEmailAndPassword());
    dispatch(SetUsers(data));
    dispatch(LoadingHide());
};
