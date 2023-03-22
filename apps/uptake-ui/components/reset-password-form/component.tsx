import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ButtonComponent } from '@uptake-ui-button';
import { InputComponent } from '@uptake-ui-input';
import { KeyIcon } from '@uptake-ui-icons';

import type { ResetPassword, ForgotPasswordProps } from './types';
import { ResetPasswordSchema } from './schema';

import * as Styled from './styles';

export default function Component(props: ForgotPasswordProps) {
	const {
		formState: { errors },
		handleSubmit,
		register
	} = useForm<ResetPassword>({ resolver: yupResolver(ResetPasswordSchema) });

	const onSubmit = (data: ResetPassword) => props.onSubmit(data.password);

	return (
		<Styled.Container>
			<Styled.Icon>
				<KeyIcon />
			</Styled.Icon>

			<Styled.Header>
				<Styled.Title>Set new password</Styled.Title>
				<Styled.Subtitle>Your new password must be different to previously used password.</Styled.Subtitle>
			</Styled.Header>

			<Styled.FormContainer onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					error={!!errors?.password?.message}
					errorMessage={errors?.password?.message}
					id='password'
					label='New password'
					placeholder='Min 8 characters'
					type='password'
					{...register('password')}
				/>

				<InputComponent
					error={!!errors?.confirmPassword?.message}
					errorMessage={errors?.confirmPassword?.message}
					id='confirmPassword'
					label='Re-enter new password'
					placeholder='Min 8 characters'
					type='password'
					{...register('confirmPassword')}
				/>

				<ButtonComponent color='primary' size='lg'>
					Reset password
				</ButtonComponent>
			</Styled.FormContainer>
		</Styled.Container>
	);
}
