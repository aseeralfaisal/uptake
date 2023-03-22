import Link from 'next/link';
import React, { Fragment } from 'react';

import * as Popover from '@radix-ui/react-popover';

import { AvatarLabelComponent } from '@uptake-ui-avatar-label';

import {
    AccountSettingsIcon,
    BillingIcon,
    EditIcon,
    LogoutIcon,
    MoreVerticalIcon,
    ProfileIcon,
    SettingsIcon,
    UpgradeIcon,
} from '@uptake-ui-icons';

import * as Styled from './styles';

export default function NavbarFooterComponent() {
    return (
		<Fragment>
			<AvatarLabelComponent
				email='baten.mab@gmail.com'
				name='Abdul Baten'
				size='md'
				src='https://ui-avatars.com/api/?name=A+B&background=F9F9FB&color=805AD5'
			/>

			<Popover.Root>
				<Styled.PopoverTrigger>
					<MoreVerticalIcon />
				</Styled.PopoverTrigger>

				<Styled.PopoverContent align='end' avoidCollisions side='top' sideOffset={20}>
                    <Styled.Arrow />

					<Link href='https://google.com' passHref>
						<Styled.QuickAddItem>
							<ProfileIcon />
							<span>Profile</span>
						</Styled.QuickAddItem>
					</Link>

					<Link href='https://google.com' passHref>
						<Styled.QuickAddItem>
							<EditIcon />
							<span>Edit profile</span>
						</Styled.QuickAddItem>
					</Link>

					<hr />

					<Link href='https://google.com' passHref>
						<Styled.QuickAddItem>
							<UpgradeIcon />
							<span>Upgrade</span>
						</Styled.QuickAddItem>
					</Link>

					<Link href='https://google.com' passHref>
						<Styled.QuickAddItem>
							<BillingIcon />
							<span>Plan and billing</span>
						</Styled.QuickAddItem>
					</Link>

					<hr />

					<Link href='https://google.com' passHref>
						<Styled.QuickAddItem>
							<SettingsIcon />
							<span>Company settings</span>
						</Styled.QuickAddItem>
					</Link>

					<Link href='https://google.com' passHref>
						<Styled.QuickAddItem>
							<AccountSettingsIcon />
							<span>Account settings</span>
						</Styled.QuickAddItem>
					</Link>

					<hr />

					<Link href='https://google.com' passHref>
						<Styled.QuickAddItem>
							<LogoutIcon />
							<span>Sign out</span>
						</Styled.QuickAddItem>
					</Link>
				</Styled.PopoverContent>
			</Popover.Root>
		</Fragment>
	);
}
