import { IconBubble } from '@uptake-ui-icon-bubble';

import type { MetricsProps } from './metrics.types';

import StyledComponents from './metrics.styles';

export function MetricsComponent(props: MetricsProps) {
	const { color = 'primary', counter, icon, title } = props;

	return (
		<StyledComponents.MetricsContainer>
			<StyledComponents.MetricsContent>
				<StyledComponents.MetricsTitle>{title}</StyledComponents.MetricsTitle>
				<StyledComponents.MetricsCounter>
					{new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 3 }).format(counter)}
				</StyledComponents.MetricsCounter>
			</StyledComponents.MetricsContent>

			{icon && <IconBubble color={color}>{icon}</IconBubble>}
		</StyledComponents.MetricsContainer>
	);
}

export default MetricsComponent;
