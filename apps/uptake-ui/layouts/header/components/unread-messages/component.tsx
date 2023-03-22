import HeaderSingleMessageComponent from '@layouts/header/components/single-message/component';

import * as StyledComponents from './styles';

export default function HeaderUnreadMessagesComponent() {

    return (
        <StyledComponents.Container>
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
            <HeaderSingleMessageComponent />
        </StyledComponents.Container>
    );
}
