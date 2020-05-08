// eslint-disable-next-line no-unused-vars
import axios, { AxiosResponse } from 'axios';
import Api from '../../../utils/axios';
import ApiConfig from '../../../config/api/apiKeuangan';
import { RequestInterceptor } from '../../../utils/axios/interceptor';

class AuthService extends Api {
    constructor() {
        super(ApiConfig);
        this.SetInterceptorRequest(RequestInterceptor);
        this.Login = this.Login.bind(this);
    }

    async Login(data:{email: string, password: string}):Promise<AxiosResponse> {
        try {
            const res = await this.Post('auth/login', data);
            console.log(res);
            return res;
        } catch (e) {
            // console.log(e);
            throw new Error('An error occurred when fetching data');
        }
    }
}

export default AuthService;
