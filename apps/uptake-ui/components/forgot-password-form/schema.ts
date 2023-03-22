import { object, string } from 'yup';

export const ForgotPasswordSchema = object({
	email: string().required('Enter a valid email').email('Must be a valid email address')
}).required();
