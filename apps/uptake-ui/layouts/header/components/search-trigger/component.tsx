import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';

import Icon from '@uptake-ui-icons';

import { ChipComponent } from '@uptake-ui-chip';

import * as StyledComponents from './styles';

export default function HeaderSearchTriggerComponent() {
	return (
		<Tooltip.Provider>
			<Tooltip.Root delayDuration={0}>
				<Popover.Root>
					<Tooltip.Trigger asChild>
						<StyledComponents.PopoverTrigger>
							<Icon.Search />
						</StyledComponents.PopoverTrigger>
					</Tooltip.Trigger>

					<StyledComponents.TooltipContent side='bottom' sideOffset={10}>
						<span>Search</span>
					</StyledComponents.TooltipContent>

					<StyledComponents.PopoverContent align='end' avoidCollisions side='bottom' sideOffset={6}>
						<StyledComponents.Header>
							<StyledComponents.InputController>
								<StyledComponents.StartIcon>
									<Icon.Search />
								</StyledComponents.StartIcon>

								<StyledComponents.Input
									autoCapitalize='off'
									autoComplete='current-password'
									placeholder='Search'
									spellCheck={false}
								/>
							</StyledComponents.InputController>
						</StyledComponents.Header>

						<StyledComponents.RecentSearch>
							<StyledComponents.RecentSearchTop>
								<span>Recent searches</span>
							</StyledComponents.RecentSearchTop>

							<StyledComponents.RecentSearchBottom>
								<StyledComponents.RecentSearchKeywords>
									<ChipComponent closable color='gray' size='sm'>
										abdul baten
									</ChipComponent>
									<ChipComponent color='gray' size='sm'>
										Questions
									</ChipComponent>
									<ChipComponent color='gray' size='sm'>
										Sessions
									</ChipComponent>
									<ChipComponent color='gray' size='sm'>
										Surveys
									</ChipComponent>
									<ChipComponent color='gray' size='sm'>
										Meetings
									</ChipComponent>
								</StyledComponents.RecentSearchKeywords>
							</StyledComponents.RecentSearchBottom>
						</StyledComponents.RecentSearch>

						<StyledComponents.Content></StyledComponents.Content>
					</StyledComponents.PopoverContent>
				</Popover.Root>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
}
