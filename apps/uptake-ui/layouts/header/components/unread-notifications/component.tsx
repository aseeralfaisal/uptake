import HeaderSingleNotificationComponent from '@layouts/header/components/single-notification/component';

import * as StyledComponents from './styles';

export default function HeaderUnreadNotificationsComponent() {

    return (
        <StyledComponents.Container>
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
