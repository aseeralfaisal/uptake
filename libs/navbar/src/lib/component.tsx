import React from 'react';

import NavbarContainerComponent from './components/container/component';

import type { NavbarProps } from './types';

import * as Styled from './styles';

export const NavbarComponent: React.FC<NavbarProps> = (props: NavbarProps) => {
	const { hideMenu } = props;

	return (
		<Styled.NavContainer hideMenu={hideMenu}>
			<Styled.Container>
				<NavbarContainerComponent />
			</Styled.Container>
		</Styled.NavContainer>
	);
};

export default NavbarComponent;
