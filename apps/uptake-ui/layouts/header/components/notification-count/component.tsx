import React from 'react';

import type { NotificationCountProps } from './types';

import * as Styled from './styles';

const NotificationCountComponent: React.FC<NotificationCountProps> = (props: NotificationCountProps) => {
    const { notificationCount } = props;

    if (notificationCount === 0) {
        return null;
    }

    const count = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(notificationCount);

    return <Styled.NotificationCount>{count}</Styled.NotificationCount>;
};

export default NotificationCountComponent;
