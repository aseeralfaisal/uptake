import { Fragment } from 'react';
import { LoadingComponent } from '@uptake-ui-loading';

export default function LoadingPage() {
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
				<LoadingComponent color='error' message='Please wait. Loading...' size='sm' />
				<LoadingComponent color='error' message='Loading' size='md' />
				<LoadingComponent color='error' message='Loading' size='lg' />
				<LoadingComponent color='error' message='Loading' size='xl' />
			</div>

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
				<LoadingComponent color='gray' message='Loading' size='sm' />
				<LoadingComponent color='gray' message='Loading' size='md' />
				<LoadingComponent color='gray' message='Loading' size='lg' />
				<LoadingComponent color='gray' message='Loading' size='xl' />
			</div>

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
				<LoadingComponent color='primary' message='Loading' size='sm' />
				<LoadingComponent color='primary' message='Loading' size='md' />
				<LoadingComponent color='primary' message='Loading' size='lg' />
				<LoadingComponent color='primary' message='Loading' size='xl' />
			</div>

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
				<LoadingComponent color='success' message='Loading' size='sm' />
				<LoadingComponent color='success' message='Loading' size='md' />
				<LoadingComponent color='success' message='Loading' size='lg' />
				<LoadingComponent color='success' message='Loading' size='xl' />
			</div>

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
				<LoadingComponent color='warning' message='Loading' size='sm' />
				<LoadingComponent color='warning' message='Loading' size='md' />
				<LoadingComponent color='warning' message='Loading' size='lg' />
				<LoadingComponent color='warning' message='Loading' size='xl' />
			</div>
		</Fragment>
	);
}
