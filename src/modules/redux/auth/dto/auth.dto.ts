export interface authDTO {
    user: {
        id: number | null;
        name: string;
        email: string;
    };
    key: {
        token: string;
        refreshToken: string;
    };
}
