import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ButtonComponent } from '@uptake-ui-button';
import { InputComponent } from '@uptake-ui-input';
import { KeyIcon } from '@uptake-ui-icons';

import type { ForgotPassword, ForgotPasswordProps } from './types';
import { ForgotPasswordSchema } from './schema';

import * as Styled from './styles';

export default function Component(props: ForgotPasswordProps) {
	const {
		formState: { errors },
		handleSubmit,
		register
	} = useForm<ForgotPassword>({ resolver: yupResolver(ForgotPasswordSchema) });

	const onSubmit = (data: ForgotPassword) => props.onSubmit(data.email);

	return (
		<Styled.Container>
			<Styled.Icon>
				<KeyIcon />
			</Styled.Icon>

			<Styled.Header>
				<Styled.Title>Forgot password?</Styled.Title>
				<Styled.Subtitle>No worries, we{"'"}ll send you reset instructions.</Styled.Subtitle>
			</Styled.Header>

			<Styled.FormContainer onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					error={!!errors?.email?.message}
					errorMessage={errors?.email?.message}
					id='email'
					label='Email'
					placeholder='Enter your email'
					type='email'
					{...register('email')}
				/>

				<ButtonComponent color='primary' size='lg'>
					Send instructions
				</ButtonComponent>
			</Styled.FormContainer>
		</Styled.Container>
	);
}
