import { CheckIcon } from '@uptake-ui-icons';

import * as Styled from './styles';

export default function Component() {
	return (
		<Styled.Container>
			<Styled.Icon>
				<CheckIcon />
			</Styled.Icon>

			<Styled.Header>
				<Styled.Title>Password reset</Styled.Title>
				<Styled.Subtitle>
					Your password has been reset successfully. You can now sign in with your new password.
				</Styled.Subtitle>
			</Styled.Header>
		</Styled.Container>
	);
}
