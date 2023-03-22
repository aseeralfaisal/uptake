import { Fragment, PropsWithChildren, useState } from 'react';

import {
	ProgressBarContainer,
	ProgressMeter,
	ProgressDetailsText,
	ProgressDescriptionText,
	ProgressIndicator,
	Progress,
	Container
} from './progress-steps.styles';
import { ProgressStepsProps } from './progress-steps.types';
export const ProgressStepsComponent = (props: PropsWithChildren<ProgressStepsProps>) => {
	let { color, progress, detailsText, descriptionText } = props;
	// let finalProgressPercentage = 0;
	// if (progressPercentage === 0) {
	// 	finalProgressPercentage = 3;
	// } else {
	// 	finalProgressPercentage = progressPercentage;
	// }

	return (
		<Fragment>
			<Container>
				<ProgressBarContainer>
					<Progress value={progress}>
						<ProgressIndicator color={color} css={{ transform: `translateX(-${100 - progress}%)` }} />
					</Progress>
				</ProgressBarContainer>
				<ProgressDetailsText color={color}>{detailsText}</ProgressDetailsText>
				<ProgressDescriptionText color={color}>{descriptionText}</ProgressDescriptionText>
			</Container>
		</Fragment>
	);
};

export default ProgressStepsComponent;
