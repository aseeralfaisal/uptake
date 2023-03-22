import { PropsWithChildren } from 'react';

import { EmptyActions, EmptyContainer, EmptyContent, EmptyIconSection, EmptyMessage, EmptyTitle } from './empty.styles';
import EmptySearchIcon from './empty-search.icon';

import type { EmptyProps } from './empty.types';

export function EmptyComponent(props: PropsWithChildren<EmptyProps>) {
	const { children, message, title } = props;

	return (
		<EmptyContainer>
			<EmptyIconSection>
				<EmptySearchIcon />
			</EmptyIconSection>

			<EmptyContent>
				<EmptyTitle>{title}</EmptyTitle>
				<EmptyMessage>{message}</EmptyMessage>
			</EmptyContent>

			<EmptyActions>{children && children}</EmptyActions>
		</EmptyContainer>
	);
}

export default EmptyComponent;
