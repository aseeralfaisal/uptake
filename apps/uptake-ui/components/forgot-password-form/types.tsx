export type ForgotPassword = {
    email: string;
}

export type ForgotPasswordProps = {
    onSubmit: (email: string) => void;
}
