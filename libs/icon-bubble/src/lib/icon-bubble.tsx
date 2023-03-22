import React from 'react';

import type { IconBubbleProps } from './icon-bubble.types';

import * as StyledComponents from './icon-bubble.styles';

export function IconBubble({ color, children }: React.PropsWithChildren<IconBubbleProps>) {
	return (
		<StyledComponents.Bubble color={color}>{children}</StyledComponents.Bubble>
	);
}

export default IconBubble;
