import HeaderNotificationSkeletonComponent from '@layouts/header/components/notification-skeleton/component';
import HeaderSingleNotificationComponent from '@layouts/header/components/single-notification/component';

import * as StyledComponents from './styles';

export default function HeaderAllNotificationsComponent() {

    return (
        <StyledComponents.Container>
            <HeaderNotificationSkeletonComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
            <HeaderSingleNotificationComponent />
        </StyledComponents.Container>
    );
}
