import { object, ref, string } from 'yup';

export const ResetPasswordSchema = object({
	password: string()
		.required('Enter a password')
		.min(8, 'Use 8 characters or more for your password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
			excludeEmptyString: true,
            message: 'Must contain at least 1 uppercase character, 1 number, and 1 symbol'
		}),
	confirmPassword: string()
		.required('Enter a password')
		.min(8, 'Use 8 characters or more for your password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
			excludeEmptyString: true,
            message: 'Must contain at least 1 uppercase character, 1 number, and 1 symbol'
		})
		.oneOf([ref('password'), null], 'Confirm your password')
}).required();
