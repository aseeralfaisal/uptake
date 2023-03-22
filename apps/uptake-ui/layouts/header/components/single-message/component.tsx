import * as Popover from '@radix-ui/react-popover';

import Icon from '@uptake-ui-icons';

import * as StyledComponents from './styles';

export default function HeaderSingleMessage() {
	return (
		<StyledComponents.Item>
			<StyledComponents.Profile>
				<StyledComponents.Image src='https://ui-avatars.com/api/?name=A+B&background=eff1ff&color=805AD5' />
			</StyledComponents.Profile>

			<StyledComponents.Content>
				<StyledComponents.Title>Sakib khan</StyledComponents.Title>

				<StyledComponents.Message>
					I don’t know what is this actually. Can you please explain that to me?
				</StyledComponents.Message>

				<StyledComponents.Time>5 minutes ago</StyledComponents.Time>
			</StyledComponents.Content>

			<StyledComponents.Action>
				<Popover.Root>
					<StyledComponents.PopoverTrigger>
						<Icon.MoreVertical />
					</StyledComponents.PopoverTrigger>

					<StyledComponents.PopoverContent align='end' avoidCollisions side='bottom'>
						<StyledComponents.Arrow />

						<StyledComponents.ActionItem>
							<Icon.Check />
							<span>Mark as unread</span>
						</StyledComponents.ActionItem>

						<StyledComponents.ActionItem>
							<Icon.Remove />
							<span>Remove this message</span>
						</StyledComponents.ActionItem>

						<hr />

						<StyledComponents.ActionItem>
							<Icon.Delete />
							<span>Delete chat</span>
						</StyledComponents.ActionItem>
					</StyledComponents.PopoverContent>
				</Popover.Root>
			</StyledComponents.Action>
		</StyledComponents.Item>
	);
}
