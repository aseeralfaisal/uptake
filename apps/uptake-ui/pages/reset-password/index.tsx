import { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { ArrowLeftIcon } from '@uptake-ui-icons';
import { ResetPasswordFormComponent } from '@components/reset-password-form';
import { ResetPasswordSuccessComponent } from '@components/reset-password-success';

import * as Styled from './styles';

export default function ResetPasswordPage() {
	const [passwordReset, setPasswordReset] = useState(false);

	const handleOnSend = (password: string) => {
        setPasswordReset(true);
	};

	return (
		<Fragment>
			<Head>
				<title>Uptake - Reset Password</title>
			</Head>

			<Styled.Container>
				{passwordReset && <ResetPasswordSuccessComponent />}
				{!passwordReset && <ResetPasswordFormComponent onSubmit={handleOnSend} />}

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
