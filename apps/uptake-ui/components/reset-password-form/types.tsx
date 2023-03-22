export type ResetPassword = {
    password: string;
    confirmPassword: string;
}

export type ForgotPasswordProps = {
    onSubmit: (password: string) => void;
}
