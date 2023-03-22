import { Fragment } from 'react';

import { ButtonGroup, ButtonGroupIndicatorText } from './button-group.styles';
import { ButtonGroupProps } from './button-group.types';

export const ButtonGroupComponent = (props: ButtonGroupProps) => {
	const { buttons = [], disabled = false, id, onChange } = props;
	const [button] = buttons;

	return (
		<ButtonGroup
			defaultChecked
			defaultValue={button ? button.value : undefined}
			disabled={disabled}
			id={id}
			onValueChange={onChange}
			type='single'
		>
			{buttons.map((button, index) => {
				return (
					<Fragment key={index}>
						<ButtonGroupIndicatorText disabled={button.disabled || false} value={button.value}>
							{button.message}
						</ButtonGroupIndicatorText>
					</Fragment>
				);
			})}
		</ButtonGroup>
	);
};

export default ButtonGroupComponent;
