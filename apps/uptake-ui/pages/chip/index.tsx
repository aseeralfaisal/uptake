import { Fragment } from 'react';

import { ChipComponent } from '@uptake-ui-chip';
import Icon from './icon';

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
				<ChipComponent closable color='primary' size='sm'>
					Label
				</ChipComponent>
				<ChipComponent dot color='primary' size='md'>
					Published
				</ChipComponent>
				<ChipComponent color='primary' size='lg'>
					Published
				</ChipComponent>
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
				<ChipComponent color='gray' size='sm' startIcon={<Icon />} dot>
					Label
				</ChipComponent>

				<ChipComponent dot color='gray' size='md'>
					Published
				</ChipComponent>

				<ChipComponent closable color='gray' startIcon={<Icon />} size='lg'>
					Published
				</ChipComponent>
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
				<ChipComponent color='error' size='sm'>
					Label
				</ChipComponent>
				<ChipComponent color='error' size='md'>
					Published
				</ChipComponent>
				<ChipComponent color='error' size='lg'>
					Published
				</ChipComponent>
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
				<ChipComponent color='success' size='sm'>
					Label
				</ChipComponent>
				<ChipComponent color='success' size='md'>
					Published
				</ChipComponent>
				<ChipComponent color='success' size='lg'>
					Published
				</ChipComponent>
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
				<ChipComponent color='warning' size='sm'>
					Label
				</ChipComponent>
				<ChipComponent color='warning' size='md'>
					Published
				</ChipComponent>
				<ChipComponent color='warning' size='lg'>
					Published
				</ChipComponent>
			</div>
		</Fragment>
	);
}
