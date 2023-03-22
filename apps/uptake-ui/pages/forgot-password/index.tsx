import { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { ArrowLeftIcon } from '@uptake-ui-icons';
import { ForgotPasswordFormComponent } from '@components/forgot-password-form';
import { PasswordResetInstructionComponent } from '@components/password-reset-instruction';

import * as Styled from './styles';

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState(null);
	const [emailSent, setEmailSent] = useState(false);

	const handleOnSend = (email: string) => {
		setEmail(email);
		setEmailSent(true);
	};

	return (
		<Fragment>
			<Head>
				<title>Uptake - Forgot Password</title>
			</Head>

			<Styled.Container>
				{emailSent && <PasswordResetInstructionComponent email={email} />}
				{!emailSent && <ForgotPasswordFormComponent onSubmit={handleOnSend} />}

				<Link href='sign-in' passHref>
					<Styled.BackLink>
						<ArrowLeftIcon />
						Back to sign in
					</Styled.BackLink>
				</Link>
			</Styled.Container>
		</Fragment>
	);
}
