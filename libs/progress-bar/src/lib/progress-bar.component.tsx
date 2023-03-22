import { Fragment, PropsWithChildren } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { Progress, ProgressContainer, ProgressIndicator, ProgressInfo, ProgressTooltip } from './progress-bar.styles';
import type { ProgressBarProps } from './progress-bar.types';

export const ProgressBarComponent = (props: PropsWithChildren<ProgressBarProps>) => {
	const { progress, side = 'top', showInfo = false, tooltip = false } = props;

	return (
		<Fragment>
			{tooltip && (
				<TooltipPrimitive.Provider delayDuration={0}>
					<TooltipPrimitive.Root>
						<TooltipPrimitive.Trigger asChild>
							<Progress value={progress}>
								<ProgressIndicator style={{ transform: `translateX(-${100 - progress}%)` }} />
							</Progress>
						</TooltipPrimitive.Trigger>

						<TooltipPrimitive.Portal>
							<ProgressTooltip align='end' avoidCollisions side={side} sideOffset={5}>
								{progress}%
							</ProgressTooltip>
						</TooltipPrimitive.Portal>
					</TooltipPrimitive.Root>
				</TooltipPrimitive.Provider>
			)}

			{!tooltip && (
				<ProgressContainer showInfo={showInfo} side={side}>
					{showInfo && side === 'left' && <ProgressInfo css={{ textAlign: 'start' }}>{progress}%</ProgressInfo>}

					<Progress value={progress}>
						<ProgressIndicator css={{ transform: `translateX(-${100 - progress}%)` }} />
					</Progress>

					{showInfo && side !== 'left' && <ProgressInfo>{progress}%</ProgressInfo>}
				</ProgressContainer>
			)}
		</Fragment>
	);
};

export default ProgressBarComponent;
