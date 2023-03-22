import Link from 'next/link';

import type { AvatarLabelProps } from './avatar-label.types';

import {
	AvatarContainer,
	AvatarContent,
	AvatarIcon,
	AvatarImage,
	AvatarLabelContainer,
	Email,
	Name,
} from './avatar-label.styles';
import AvatarDefaultIcon from './avatar-default.icon';
import AvatarOnlineIcon from './avatar-online.icon';

export const AvatarLabelComponent = (props: AvatarLabelProps) => {
	const { src, href, online = false, shallow = false, size, name, email } = props;

	const element = (as: 'a' | 'div' = 'div') => (
		<AvatarLabelContainer size={size}>
			<AvatarContainer as={as} css={{cursor: as === 'a' ? 'pointer' : 'default'}} size={size}>
				{src && <AvatarImage src={src} loading='lazy' />}
				{!src && <AvatarDefaultIcon />}

				{online && (
					<AvatarIcon>
						<AvatarOnlineIcon />
					</AvatarIcon>
				)}
			</AvatarContainer>

			<AvatarContent>
				{name && <Name size={size}>{name}</Name>}
				{email && <Email size={size}>{email}</Email>}
			</AvatarContent>
		</AvatarLabelContainer>
	);

	return href ? (
		<Link href={href} shallow={shallow} passHref>
			{element('a')}
		</Link>
	) : (
		element('div')
	);
};

export default AvatarLabelComponent;
