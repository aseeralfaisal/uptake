import { Fragment } from 'react';
import Link from 'next/link';

import { BadgeContainer, LeadingSection, Title } from './badge-group.styles';
import BadgeGroupArrowIcon from './badge-group-arrow.icon';
import type { BadgeGroupProps } from './badge-group.types';

export const BadgeGroupComponent = (props: BadgeGroupProps) => {
	const {
		color = 'primary',
		content,
		href,
		leading = false,
		outlined = false,
		plain = false,
		shallow = false,
		size = 'lg',
		soft = false,
		title,
		trailing = false
	} = props;

	const element = (as: 'a' | 'div' = 'div') => (
		<BadgeContainer color={color} leading={leading} outlined={outlined} size={size} trailing={trailing} as={as}>
			{leading && (
				<Fragment>
					<LeadingSection size={size}>
						<Title color={color} outlined={outlined} plain={plain} size={size} soft={soft}>
							{title}
						</Title>
						{content}
					</LeadingSection>
					{href && <BadgeGroupArrowIcon />}
				</Fragment>
			)}

			{trailing && (
				<Fragment>
					{content}
					<LeadingSection size={size}>
						<Title color={color} outlined={outlined} plain={plain} size={size} soft={soft}>
							{title}
							{href && <BadgeGroupArrowIcon />}
						</Title>
					</LeadingSection>
				</Fragment>
			)}
		</BadgeContainer>
	);

	return href ? (
		<Link href={href} shallow={shallow} passHref>
			{element('a')}
		</Link>
	) : (
		element('div')
	);
};

export default BadgeGroupComponent;
