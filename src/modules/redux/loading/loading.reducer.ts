/* eslint-disable no-unused-vars */
import { LoadingDTO } from './dto/loading.dto';
import { LoadingActionDTO } from './dto/loadingReducer.dto';

// import all constant
import { WAITING, DONE } from '../constant';

const initState:LoadingDTO = {
    isLoading: false,
};

const Reducers = (state:LoadingDTO = initState, action:LoadingActionDTO):LoadingDTO => {
    switch (action.type) {
        case WAITING: {
            return {
                isLoading: true,
            };
        }
        case DONE: {
            return {
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
};


export default Reducers;
