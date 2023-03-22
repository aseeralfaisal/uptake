import { PropsWithChildren } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import type { DropDownProps } from './drop-down.types';
import { DropDownOption, DropDownTrigger, StyledContent } from './drop-down.styles';

export function DropDownComponent(props: PropsWithChildren<DropDownProps>) {
	const {
		align = 'end',
		children,
		color,
		disabled = false,
		options,
		outlined,
		plain,
		side = 'bottom',
		size = 'md',
		soft
	} = props;

	return (
		<DropdownMenuPrimitive.Root>
			<DropDownTrigger
				disabled={disabled}
				color={color}
				outlined={outlined}
				plain={plain}
				size={size}
				soft={soft}
			>
				{children}
			</DropDownTrigger>

			<DropdownMenuPrimitive.Portal>
				<StyledContent align={align} avoidCollisions hideWhenDetached side={side} sideOffset={8}>
					{options.map((option, index) => (
						<DropDownOption
							disabled={option.disabled}
							key={index}
							onSelect={option.onSelect}
						>
							{option.content}
						</DropDownOption>
					))}
				</StyledContent>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenuPrimitive.Root>
	);
}

export default DropDownComponent;
