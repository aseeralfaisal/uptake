import React from 'react';

import LoadingIcon from './loading-Icon';

import type { LoadingProps } from './loading.types';

import Styled from './loading.styles';

export const LoadingComponent: React.FC<LoadingProps> = (props: LoadingProps) => {
	const { color, message, size } = props;

	return (
		<Styled.LoadingContainer>
			<Styled.LoadingIconDiv color={color} size={size}>
				<LoadingIcon />
			</Styled.LoadingIconDiv>

			{message && <Styled.LoadingText color={color}>{message}</Styled.LoadingText>}
		</Styled.LoadingContainer>
	);
};

export default LoadingComponent;
