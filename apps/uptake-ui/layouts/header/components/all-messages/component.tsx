import HeaderSingleMessageComponent from '@layouts/header/components/single-message/component';
import HeaderMessageSkeletonComponent from '@layouts/header/components/message-skeleton/component';

import * as StyledComponents from './styles';

export default function HeaderAllMessagesComponent() {

    return (
        <StyledComponents.Container>
            <HeaderMessageSkeletonComponent />
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
