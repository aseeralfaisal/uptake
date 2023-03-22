import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';

import { ExamIcon, MeetingIcon, PlusIcon, SessionIcon, SurveyIcon, TeamIcon } from '@uptake-ui-icons';

import type { NavbarHeaderProps } from './types';

import * as Styled from './styles';

export default function NavbarHeaderComponent(props: NavbarHeaderProps) {
    const { logo } = props;

	return (
		<Tooltip.Provider>
			<Tooltip.Root delayDuration={0}>
                {logo}
				<Popover.Root>
					<Tooltip.Trigger asChild>
						<Styled.PopoverTrigger>
							<PlusIcon />
						</Styled.PopoverTrigger>
					</Tooltip.Trigger>

					<Styled.TooltipContent side='right' sideOffset={24}>
						<span>Quick add</span>
					</Styled.TooltipContent>

					<Styled.PopoverContent align='start' avoidCollisions side='right' sideOffset={24}>
						<Styled.QuickAddItem>
							<ExamIcon />
							<span>Exam</span>
						</Styled.QuickAddItem>

                        <Styled.QuickAddItem>
                            <SessionIcon />
                            <span>Session</span>
                        </Styled.QuickAddItem>

                        <Styled.QuickAddItem>
                            <SurveyIcon />
                            <span>Survey</span>
                        </Styled.QuickAddItem>

                        <Styled.QuickAddItem>
                            <MeetingIcon />
                            <span>Meeting</span>
                        </Styled.QuickAddItem>

                        <Styled.QuickAddItem>
                            <TeamIcon />
                            <span>Team</span>
                        </Styled.QuickAddItem>

                        <Styled.Arrow />
					</Styled.PopoverContent>
				</Popover.Root>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
}
