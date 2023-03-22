import * as Popover from '@radix-ui/react-popover';

import HeaderAllNotificationsComponent from '@layouts/header/components/all-notifications/component';
import HeaderUnreadNotificationsComponent from '@layouts/header/components/unread-notifications/component';

import Icon from '@uptake-ui-icons';
import { ButtonComponent } from '@uptake-ui-button';
import { IconButtonComponent } from '@uptake-ui-icon-button';
import { TabComponent } from '@uptake-ui-tabs';

import * as StyledComponents from './styles';

const HeaderNotificationTriggerComponent = () => {
	const contents = [<HeaderAllNotificationsComponent />, <HeaderUnreadNotificationsComponent />];

	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<IconButtonComponent
					circle
					color='gray'
					icon={<Icon.Notification />}
					size='md'
					soft
					title='Notifications'
				></IconButtonComponent>
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
					<StyledComponents.Title>Notifications</StyledComponents.Title>

					<IconButtonComponent
                        color='gray'
                        icon={<Icon.NotificationSettings />}
                        plain
                        size='md'
                        title='Configure notifications'
                        titleSide='left'
                    ></IconButtonComponent>
				</StyledComponents.Header>

				<StyledComponents.Content>
					<TabComponent
						color='primary'
						size='sm'
						bordered
						titles={['All notifications', 'Unread']}
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
}

export default HeaderNotificationTriggerComponent;
