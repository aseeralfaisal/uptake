import { Fragment } from 'react';

import { IconButtonComponent } from '@uptake-ui-icon-btn';

export default function ChipPage() {
	return (
		<Fragment>
			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<IconButtonComponent color='primary' soft icon size='sm'>
					Label
				</IconButtonComponent>
			</div>

			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<IconButtonComponent color='gray' icon size='sm'>
					Label
				</IconButtonComponent>

				<IconButtonComponent color='gray' outlined icon size='md'>
					Published
				</IconButtonComponent>

				<IconButtonComponent color='gray' soft icon size='lg'>
					Published
				</IconButtonComponent>
			</div>

			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<IconButtonComponent color='error' soft icon size='sm'>
					Label
				</IconButtonComponent>
				<IconButtonComponent color='error' outlined icon size='md'>
					Published
				</IconButtonComponent>
				<IconButtonComponent color='error' icon size='lg'>
					Published
				</IconButtonComponent>
			</div>

			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<IconButtonComponent color='gray' outlined icon size='sm'>
					Label
				</IconButtonComponent>
				<IconButtonComponent color='success' icon size='md'>
					Published
				</IconButtonComponent>
				<IconButtonComponent color='success' outlined icon size='lg'>
					Published
				</IconButtonComponent>
			</div>

			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<IconButtonComponent color='success' soft icon size='sm'>
					Label
				</IconButtonComponent>
				<IconButtonComponent color='primary' soft outlined icon size='md'>
					Published
				</IconButtonComponent>
				<IconButtonComponent color='primary' outlined icon size='xxl'>
					Published
				</IconButtonComponent>
			</div>
		</Fragment>
	);
}
