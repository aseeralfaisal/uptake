import type { AvatarGroupProps } from './avatar-group.types';

import {
	AvatarContainer,
	AvatarGroupContainer,
	AvatarImage,
	RemainingAvatar,
	AddIcon,
	Avatar,
	AvatarFallback
} from './avatar-group.styles';
import AvatarPlusIcon from './avatar-plus.icon';
import { Fragment } from 'react';

export const AvatarGroupComponent = (props: AvatarGroupProps) => {
	const { avatars = [], color, limit, add, size = 'md' } = props;

	const slicedAvatars: string[] = avatars.slice(0, limit);
	const remainingAvatars = Math.max(0, avatars.length - slicedAvatars.length);

	const disabled = props.disabled;

	return (
		<AvatarGroupContainer>
			<AvatarContainer size={size}>
				{slicedAvatars.map((avatar, index) => (
					<Fragment key={index}>
						<Avatar size={size}>
							<AvatarImage size={size} src={avatar} loading='lazy' />
							<AvatarFallback color={color} delayMs={1000}>CT</AvatarFallback>
						</Avatar>
					</Fragment>
				))}

				{remainingAvatars > 0 && (
					<RemainingAvatar size={size} color={color}>
						+{remainingAvatars}
					</RemainingAvatar>
				)}
			</AvatarContainer>

			{add && (
				<AddIcon
					size={size}
					onClick={
						disabled
							? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
									e.preventDefault();
							  }
							: props.onClick
					}
				>
					<AvatarPlusIcon />
				</AddIcon>
			)}
		</AvatarGroupContainer>
	);
};

export default AvatarGroupComponent;
