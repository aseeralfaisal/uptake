import * as Popover from '@radix-ui/react-popover';

import Icon from '@uptake-ui-icons';
import { ButtonComponent } from '@uptake-ui-button';
import { IconButtonComponent } from '@uptake-ui-icon-button';
import { TabComponent } from '@uptake-ui-tabs';

import HeaderAllMessagesComponent from '@layouts/header/components/all-messages/component';
import HeaderUnreadMessagesComponent from '@layouts/header/components/unread-messages/component';
import NotificationCountComponent from '../notification-count/component';

import { notificationCountState } from '@modules/exams/stores/export-notification-count.store';

import * as StyledComponents from './styles';

const HeaderMessageTriggerComponent = () => {
	const contents = [<HeaderAllMessagesComponent key={1} />, <HeaderUnreadMessagesComponent key={2} />];
	const notificationCount = notificationCountState(({ count }) => count);

	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<StyledComponents.ButtonContainer>
					<NotificationCountComponent notificationCount={notificationCount} />
					<IconButtonComponent
						circle
						color='gray'
						icon={<Icon.Message />}
						size='md'
						soft
						title='Messages'
					/>
				</StyledComponents.ButtonContainer>
			</Popover.Trigger>

			<StyledComponents.PopoverContent
				align='end'
				avoidCollisions
				hideWhenDetached
				onOpenAutoFocus={(event) => event.preventDefault()}
				side='bottom'
				sideOffset={8}
			>
				<StyledComponents.Header>
					<StyledComponents.Title>Messages</StyledComponents.Title>

					<IconButtonComponent
						color='gray'
						icon={<Icon.Plus />}
						plain
						size='md'
						title='New message'
						titleSide='left'
					></IconButtonComponent>
				</StyledComponents.Header>

				<StyledComponents.Content>
					<TabComponent
						color='primary'
						size='sm'
						bordered
						titles={['All messages', 'Unread']}
						contents={contents}
					/>
				</StyledComponents.Content>

				<StyledComponents.Footer>
					<StyledComponents.FooterLeft>
						<StyledComponents.MarkReadLink>
							<Icon.Checkmarks />
							Mark all as read
						</StyledComponents.MarkReadLink>
					</StyledComponents.FooterLeft>

					<StyledComponents.FooterRight>
						<ButtonComponent color='primary' size='sm'>
							View all
						</ButtonComponent>
					</StyledComponents.FooterRight>
				</StyledComponents.Footer>
			</StyledComponents.PopoverContent>
		</Popover.Root>
	);
};

export default HeaderMessageTriggerComponent;
