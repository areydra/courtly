export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface RegisterUser {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
}

export interface RegisterResponse {
    accessToken: string;
    user: RegisterUser;
}
