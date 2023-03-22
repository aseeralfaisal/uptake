import React, { PropsWithChildren, forwardRef } from 'react';

import { Flex, Grid, Label, Radio, RadioContainer, RadioIndicator, Support } from './radio.styles';
import { RadioProps } from './radio.types';

export const RadioComponent = React.memo(
	forwardRef<HTMLDivElement, PropsWithChildren<RadioProps>>((props: PropsWithChildren<RadioProps>, forwardedRef) => {
		const { children, disabled = false, id, onChange, required = false, support, value } = props;

		return (
			<RadioContainer aria-label='View density' required={required} onValueChange={onChange}>
				<Grid ref={forwardedRef} css={{ display: !children ? 'inline-block' : 'grid' }}>
					<Radio css={{ marginTop: children ? 3 : 0 }} disabled={disabled} id={id} value={value}>
						<RadioIndicator />
					</Radio>

					{children && (
						<Flex>
							<Label htmlFor={id}>{children}</Label>
							{support && <Support htmlFor={id}>{support}</Support>}
						</Flex>
					)}
				</Grid>
			</RadioContainer>
		);
	})
);

export default RadioComponent;
