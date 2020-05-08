/* eslint-disable no-unused-vars */
import { userDTO } from './user.dto';
import { authDTO } from './auth.dto';

export interface authActionDTO {
    type: string;
    data?: {
        auth?: authDTO,
        user?: userDTO
    };
}
