import { WAITING, DONE } from '../constant';

export const LoadingShow = () => ({
    type: WAITING,
});

export const LoadingHide = () => ({
    type: DONE,
});
