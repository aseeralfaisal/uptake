import { Fragment } from 'react';

import Icon from '@uptake-ui-icons';

import type { BreadcrumbProps } from './breadcrumb.types';

import * as Styled from './breadcrumb.styles';

export function BreadcrumbComponent(props: BreadcrumbProps) {
	const { paths } = props;

	return (
		<Styled.Container>
			<Icon.HomeOutlined />
			{paths.map((path, index) => {
				return (
					<Fragment key={index}>
						<Styled.Separator>/</Styled.Separator>
						<Styled.PathLabel>{path.label}</Styled.PathLabel>
					</Fragment>
				);
			})}
		</Styled.Container>
	);
}

export default BreadcrumbComponent;
