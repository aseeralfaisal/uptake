import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ButtonComponent } from '@uptake-ui-button';
import { InputComponent } from '@uptake-ui-input';

import type { SignIn } from './types';
import { SignInSchema } from './schema';

import * as Styled from './styles';

export default function Component() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<SignIn>({ resolver: yupResolver(SignInSchema) });

	const onSubmit = (data) => console.log(data);

	return (
		<Styled.Container onSubmit={handleSubmit(onSubmit)}>
			<InputComponent
				error={!!errors?.email?.message}
				errorMessage={errors?.email?.message}
				id='email'
				label='Email'
				placeholder='Enter your email'
				type='email'
				{...register('email')}
			/>

            <InputComponent
                error={!!errors?.password?.message}
                errorMessage={errors?.password?.message}
                id='password'
                label='Password'
                placeholder='Min 8 characters'
                type='password'
                {...register('password')}
            />

			<Link href='forgot-password'>Forgot Password?</Link>

			<ButtonComponent color='primary' size='lg'>
				Sign in
			</ButtonComponent>
		</Styled.Container>
	);
}
