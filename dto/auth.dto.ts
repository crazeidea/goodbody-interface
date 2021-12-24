export interface CreateUserDTO {
    name: string;
    username: string;
    password: string;
    passwordConfirm: string;
}

export interface LoginDTO {
    username: string;
    password: string;
}

export interface TokenDTO {
    accessToken: string;
}