import { EmailIcon } from '@uptake-ui-icons';

import type { ResetPasswordProps } from './types';

import * as Styled from './styles';

export default function Component(props: ResetPasswordProps) {
	const { email } = props;

	return (
		<Styled.Container>
			<Styled.Icon>
				<EmailIcon />
			</Styled.Icon>

			<Styled.Header>
				<Styled.Title>Check your email</Styled.Title>
				<Styled.Subtitle>
					We have sent a password reset link to <br />
					<span>{email}</span>
				</Styled.Subtitle>
			</Styled.Header>

			<Styled.ResendLink>
				Didn{"'"}t receive the email? <span>Click to resend</span>
			</Styled.ResendLink>
		</Styled.Container>
	);
}
