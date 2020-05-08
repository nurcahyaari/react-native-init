// eslint-disable-next-line no-unused-vars
import Axios, { AxiosRequestConfig } from 'axios';
import Storage from '../storage/index';
import GenerateRefreshToken from './refreshtoken';

export interface InterceptorDTO {
    Handler:any;
    ErrorHandler:any;
}

export const RequestInterceptor:InterceptorDTO = {
    Handler: (config:AxiosRequestConfig) => config,
    ErrorHandler: (error:any) => Promise.reject(error),
};

export const ResponseInterceptor:InterceptorDTO = {
    Handler: (response:any) => response,
    ErrorHandler: async (error:any):Promise<any> => {
        const { response: errorResponse } = error;
        const refreshToken = await Storage.GetItems('refresh_token');

        // check if error response code is 401 <Unautorization> it will refreshing the token
        if (errorResponse.status === 401) {
            if (refreshToken !== null) {
                const newToken = await GenerateRefreshToken(refreshToken);
                await Storage.SetItems('token', newToken.data.token);
                await Storage.SetItems('refresh_token', newToken.data.refresh_token);
                const response = await Axios(errorResponse.config);
                return response;
            }
        }
        throw error;
    },
};
