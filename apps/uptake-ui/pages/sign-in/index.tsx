import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

import { LogoComponent } from '@components/logo';
import { SignInFormComponent } from '@components/sign-in-form';

import * as Styled from './styles';

export default function SignInPage() {
	return (
		<Fragment>
			<Head>
				<title>Uptake - Sign In</title>
			</Head>

			<Styled.Container>
				<Styled.LeftContainer>
					<LogoComponent />

					<Styled.FormContainer>
						<Styled.Header>
							<Styled.Title>Sign in</Styled.Title>
							<Styled.Info>Welcome back! Please enter your details.</Styled.Info>
						</Styled.Header>

						<SignInFormComponent />

						<Styled.SignUpLink>
							Don&apos;t have any account? <Link href='sign-up'>Sign Up</Link>
						</Styled.SignUpLink>
					</Styled.FormContainer>

					<Styled.Footer>
						<Styled.HelpContainer>
							<Link href='privacy-policy'>Privacy Policy</Link>
							<span>.</span>
							<Link href='terms-of-conditions'>Terms of Conditions</Link>
							<span>.</span>
							<Link href='cookie-policy'>Cookie policy</Link>
						</Styled.HelpContainer>
					</Styled.Footer>
				</Styled.LeftContainer>

				<Styled.RightContainer />
			</Styled.Container>
		</Fragment>
	);
}
