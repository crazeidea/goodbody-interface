export interface IRegisterDTO {
    name: string;
    username: string;
    password: string;
    passwordConfirm: string;
}

export interface ILoginDTO {
    username: string;
    password: string;
}

export interface IAccessTokenDTO {
    accessToken: string;
}
