export class SignupRequest implements SignupRequest{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignupRequest {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}