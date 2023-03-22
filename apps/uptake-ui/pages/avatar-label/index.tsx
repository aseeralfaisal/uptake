import { Fragment } from 'react';
import { AvatarLabelComponent } from '@uptake-ui-avatar-label';

export default function AvatarLabelPage() {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(15, 1fr)',
					gap: '30px',
					placeContent: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<AvatarLabelComponent
					src='https://images.unsplash.com/photo-1665238076980-47731fc833b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					href='https://google.com'
					size='xl'
					name='Olivia Rhye'
					email='olivia@untitledui.com'
				/>
				<AvatarLabelComponent
					src='https://images.unsplash.com/photo-1665238076980-47731fc833b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					href='https://google.com'
					size='lg'
					online
					name='Olivia Rhye'
					email='olivia@untitledui.com'
				/>
				<AvatarLabelComponent
					href='https://google.com'
					size='sm'
					online
					name='Olivia Rhye'
					email='olivia@untitledui.com'
				/>
			</div>
		</Fragment>
	);
}
