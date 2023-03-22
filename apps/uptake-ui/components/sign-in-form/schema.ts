import { object, string } from 'yup';

export const SignInSchema = object({
	email: string().required('Enter a valid email').email('Must be a valid email address'),
	password: string()
		.required('Enter a password')
		.min(8, 'Use 8 characters or more for your password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
			excludeEmptyString: true,
            message: 'Must contain at least 1 uppercase character, 1 number, and 1 symbol'
		})
}).required();
