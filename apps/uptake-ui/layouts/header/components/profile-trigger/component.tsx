import Link from 'next/link';
import React from 'react';

import * as Popover from '@radix-ui/react-popover';

import Icon from '@uptake-ui-icons';
import { AvatarComponent } from '@uptake-ui-avatar';

import * as Styled from './styles';

const HeaderProfileTrigger = () => {
    return (
        <Popover.Root>
            <Styled.PopoverTrigger>
                <AvatarComponent
                    size='md'
                    src='https://ui-avatars.com/api/?name=H+B&background=EFF1FF&color=1C3CEF'
                    title='Profile'
                />
            </Styled.PopoverTrigger>

            <Styled.PopoverContent
                align='end'
                avoidCollisions
                hideWhenDetached
                onOpenAutoFocus={(event) => event.preventDefault()}
                side='bottom'
                sideOffset={8}
            >
                <Link href='https://google.com' passHref>
                    <Styled.QuickAddItem>
                        <Icon.Profile />
                        <span>Profile</span>
                    </Styled.QuickAddItem>
                </Link>

                <Link href='https://google.com' passHref>
                    <Styled.QuickAddItem>
                        <Icon.Edit />
                        <span>Edit profile</span>
                    </Styled.QuickAddItem>
                </Link>

                <hr />

                <Link href='https://google.com' passHref>
                    <Styled.QuickAddItem>
                        <Icon.Upgrade />
                        <span>Upgrade</span>
                    </Styled.QuickAddItem>
                </Link>

                <Link href='https://google.com' passHref>
                    <Styled.QuickAddItem>
                        <Icon.Bill />
                        <span>Plan and billing</span>
                    </Styled.QuickAddItem>
                </Link>

                <hr />

                <Link href='https://google.com' passHref>
                    <Styled.QuickAddItem>
                        <Icon.Settings />
                        <span>Company settings</span>
                    </Styled.QuickAddItem>
                </Link>

                <Link href='https://google.com' passHref>
                    <Styled.QuickAddItem>
                        <Icon.AccountSettings />
                        <span>Account settings</span>
                    </Styled.QuickAddItem>
                </Link>

                <hr />

                <Link href='https://google.com' passHref>
                    <Styled.QuickAddItem>
                        <Icon.Logout />
                        <span>Sign out</span>
                    </Styled.QuickAddItem>
                </Link>
            </Styled.PopoverContent>
        </Popover.Root>
    );
}

export default HeaderProfileTrigger;
