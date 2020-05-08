import Api from './index';
import config from '../../config/api/apiKeuangan';

async function GenerateRefreshToken(refreshToken:string):Promise<any> {
    const api = new Api(config);
    return api.Post('auth/refresh', {
        refreshToken,
    });
}

export default GenerateRefreshToken;
