import { PropsWithChildren } from 'react';

import ChipCloseIcon from './chip-close.icon';
import ChipDotIcon from './chip-dot.icon';

import type { ChipProps } from './chip.types';

import { Chip, Content } from './chip.styles';

export const ChipComponent = (props: PropsWithChildren<ChipProps>) => {
	const {
		children,
		closable = false,
		color = 'primary',
		dot = false,
		outlined = false,
		size = 'lg',
		startIcon,
        onClose,
	} = props;

	return (
		<Chip color={color} outlined={outlined} size={size}>
			{dot && !startIcon && <ChipDotIcon />}
			{startIcon && startIcon}
			<Content size={size}>{children}</Content>
			{closable && <ChipCloseIcon onClick={onClose} />}
		</Chip>
	);
};

export default ChipComponent;
