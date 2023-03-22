import { Fragment } from 'react';

import { DropDownComponent } from '@uptake-ui-drop-down';

export default function DropDownPage() {
	const icon = (
		<svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.0003 11.2646C10.4606 11.2646 10.8337 10.8916 10.8337 10.4313C10.8337 9.97108 10.4606 9.59798 10.0003 9.59798C9.54009 9.59798 9.16699 9.97108 9.16699 10.4313C9.16699 10.8916 9.54009 11.2646 10.0003 11.2646Z'
				stroke='#98A2B3'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10.0003 5.43132C10.4606 5.43132 10.8337 5.05822 10.8337 4.59798C10.8337 4.13774 10.4606 3.76465 10.0003 3.76465C9.54009 3.76465 9.16699 4.13774 9.16699 4.59798C9.16699 5.05822 9.54009 5.43132 10.0003 5.43132Z'
				stroke='#98A2B3'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10.0003 17.098C10.4606 17.098 10.8337 16.7249 10.8337 16.2646C10.8337 15.8044 10.4606 15.4313 10.0003 15.4313C9.54009 15.4313 9.16699 15.8044 9.16699 16.2646C9.16699 16.7249 9.54009 17.098 10.0003 17.098Z'
				stroke='#98A2B3'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	return (
		<Fragment>
			<div
				style={{
					display: 'flex',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<DropDownComponent
					color='gray'
					options={[
						{ content: <Fragment>{icon} <span>Dropdown</span></Fragment>, disabled: false, onSelect: () => console.log('clicked') },
						{ content: <Fragment>{icon} <span>Dropdown 1</span></Fragment>, disabled: false, onSelect: () => console.log('clicked') }
					]}
					plain
					size='sm'
				>
					<p style={{ padding: '0 8px' }}>Go to file</p>
				</DropDownComponent>
			</div>
		</Fragment>
	);
}
