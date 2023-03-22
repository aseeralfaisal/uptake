import React, { PropsWithChildren, forwardRef } from 'react';

import { Flex, Grid, Label, Support, Switch, SwitchThumb } from './switch.styles';
import { SwitchProps } from './switch.types';

export const SwitchComponent = React.memo(
	forwardRef<HTMLDivElement, PropsWithChildren<SwitchProps>>(
		(props: PropsWithChildren<SwitchProps>, forwardedRef) => {
			const {
				checked = false,
				children,
				disabled = false,
				id,
				onChange,
				required = false,
				size = 'sm',
				support
			} = props;

			return (
				<Grid ref={forwardedRef} size={size}>
					<Switch
						defaultChecked={checked}
						disabled={disabled}
						id={id}
						onCheckedChange={onChange}
						required={required}
						size={size}
					>
						<SwitchThumb size={size} />
					</Switch>

					<Flex>
						<Label htmlFor={id} size={size}>
							{children}
						</Label>
						{support && <Support size={size}>{support}</Support>}
					</Flex>
				</Grid>
			);
		}
	)
);

export default SwitchComponent;
