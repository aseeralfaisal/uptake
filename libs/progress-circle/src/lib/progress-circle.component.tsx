import { Fragment, PropsWithChildren } from 'react';

import {
	ProgressValue,
	ProgressCircle,
	ProgressBarHalf,
	ProgressOverflowHalf,
	ProgressCircleHalf,
	UserText,
	UserTextContainer
} from './progress-circle.styles';
import type { ProgressCircleProps } from './progress-circle.types';

export const ProgressCircleComponent = (props: PropsWithChildren<ProgressCircleProps>) => {
	const { progress, size, half, userText } = props;

	function percentageToDegrees(percentage: number) {
		return (percentage / 100) * 360;
	}

	function percentageToHalfDegrees(percentage: number) {
		return (percentage / 100) * 180;
	}

	return (
		<Fragment>
			{!half && (
				<Fragment>
					<ProgressCircle
						size={size}
						style={{
							background: `conic-gradient(var(--color-primary-700) ${percentageToDegrees(
								progress
							)}deg,#ededed 0deg )`
						}}
					>
						<UserTextContainer>
							<UserText size={size}>{userText}</UserText>
							<ProgressValue size={size}> {progress}% </ProgressValue>
						</UserTextContainer>
					</ProgressCircle>
				</Fragment>
			)}

			{half && (
				<ProgressOverflowHalf>
					<ProgressCircle
						half={true}
						size={size}
						style={{
							background: `conic-gradient(var(--color-primary-700) ${percentageToHalfDegrees(
								progress
							)}deg,#ededed 0deg )`
						}}
					>
						<UserTextContainer>
							<UserText size={size} half={true}>
								{userText}
							</UserText>
							<ProgressValue half={true} size={size}>
								{' '}
								{progress}%{' '}
							</ProgressValue>
						</UserTextContainer>
					</ProgressCircle>
				</ProgressOverflowHalf>
			)}
		</Fragment>
	);
};

export default ProgressCircleComponent;
