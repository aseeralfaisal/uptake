import { Fragment } from 'react';
import { AvatarGroupComponent } from '@uptake-ui-avatar-group';

export default function AvatarGroupPage() {
	const dummyArray = [
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240'
	];

	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gap: '30px',
					placeContent: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<AvatarGroupComponent avatars={dummyArray} color='gray' limit={5} size='xs' />
				<AvatarGroupComponent avatars={dummyArray} color='primary' limit={5} size='sm' add />
				<AvatarGroupComponent avatars={dummyArray} color='primary' limit={5} size='md' add onClick={() => alert('clicked')} />
			</div>
		</Fragment>
	);
}
