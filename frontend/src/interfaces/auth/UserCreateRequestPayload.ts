export interface UserCreateRequestPayload {
    email: string;
    password: string;
    password_confirmation: string;
    firstName: string;
    lastName: string;
    fullName: string;
    userType: number;
}