import { Fragment } from 'react';
import { AvatarComponent } from '@uptake-ui-avatar';

export default function AvatarPage() {
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
				<AvatarComponent
					src='https://images.unsplash.com/photo-1665238076980-47731fc833b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					href='https://google.com'
					size='xs'
				/>

				<AvatarComponent
					src='https://images.unsplash.com/photo-1665238076980-47731fc833b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					size='sm'
				/>

				<AvatarComponent
					src='https://images.unsplash.com/photo-1665238076980-47731fc833b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					size='md'
				/>

				<AvatarComponent
					src='https://images.unsplash.com/photo-1665238076980-47731fc833b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					size='lg'
				/>

				<AvatarComponent href='google.com' size='xl' online />

				<AvatarComponent
					src='https://images.unsplash.com/photo-1665238076980-47731fc833b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					size='xxl'
					online
				/>
			</div>
		</Fragment>
	);
}
