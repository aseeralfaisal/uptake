import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';

import Icon from '@uptake-ui-icons';
import { IconButtonComponent } from '@uptake-ui-icon-button';

import * as StyledComponents from '@layouts/header/styles';

const HeaderSupportComponent = () => {
	return (
		<Popover.Root>
			<Tooltip.Root>
				<Popover.Trigger asChild>
					<IconButtonComponent
						circle
						color='gray'
						icon={<Icon.Support />}
						size='md'
						soft
						title='Support'
					></IconButtonComponent>
				</Popover.Trigger>

				<StyledComponents.TooltipContent side='bottom' sideOffset={10}>
					<span>Help & supports</span>
				</StyledComponents.TooltipContent>

				<StyledComponents.PopoverContent
					align='end'
					avoidCollisions
					hideWhenDetached
					onOpenAutoFocus={(event) => event.preventDefault()}
					side='bottom'
					sideOffset={8}
				>
					<StyledComponents.Title>Help & supports</StyledComponents.Title>
				</StyledComponents.PopoverContent>
			</Tooltip.Root>
		</Popover.Root>
	);
}

export default HeaderSupportComponent;
