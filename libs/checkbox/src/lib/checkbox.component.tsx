import React, { PropsWithChildren, forwardRef } from 'react';

import { Checkbox, CheckboxIndicator, Flex, Grid, Label, Support } from './checkbox.styles';
import { CheckboxIcon } from './checkbox.icon';
import { CheckboxProps } from './checkbox.types';

export const CheckboxComponent = React.memo(
	forwardRef<HTMLDivElement, PropsWithChildren<CheckboxProps>>(
		(props: PropsWithChildren<CheckboxProps>, forwardedRef) => {
			const { checked = false, children, disabled = false, id, support, soft } = props;

			return (
				<Grid ref={forwardedRef}>
					<Checkbox
						css={{ marginTop: children ? 6 : 0 }}
						defaultChecked={checked}
						disabled={disabled}
						id={id}
						checked={checked}
						onCheckedChange={props.onChange}
					>
						<CheckboxIndicator>
							<CheckboxIcon />
						</CheckboxIndicator>
					</Checkbox>

					<Flex rowFlex={soft}>
						<Label htmlFor={id}>{children}</Label>
						{support && <Support htmlFor={id} soft>{support}</Support>}
					</Flex>
				</Grid>
			);
		}
	)
);

export default CheckboxComponent;
