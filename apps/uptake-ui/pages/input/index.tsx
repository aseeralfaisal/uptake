import { ChangeEvent, Fragment } from 'react';

import { InputComponent } from '@uptake-ui-input';

export default function InputPage() {
	return (
		<Fragment>
			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					alignItems: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<InputComponent color='primary' placeholder='Place holder' type='text' />
				<InputComponent color='primary' placeholder='Place holder' type='text' />
				<InputComponent color='primary' placeholder='Place holder' type='text' />
				<InputComponent color='primary' placeholder='Place holder' type='text' />
				<InputComponent color='primary' placeholder='Place holder' type='text' />
				<InputComponent color='primary' placeholder='Place holder' type='text' disabled />
			</div>

			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					alignItems: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<InputComponent
					color='primary'
					hint='This is a hint text to help user.'
					id='email'
					label='Email'
					onChange={(event: ChangeEvent<HTMLInputElement>) => console.warn(event.target.value)}
					placeholder='Place holder'
					type='text'
				/>
				<InputComponent color='primary' label='Email' placeholder='Place holder' type='text' />
				<InputComponent color='primary' label='Email' placeholder='Place holder' type='text' />
				<InputComponent color='primary' label='Email' placeholder='Place holder' type='text' />
				<InputComponent color='primary' label='Email' placeholder='Place holder' type='text' />
				<InputComponent color='primary' label='Email' placeholder='Place holder' type='text' disabled />
			</div>

			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					alignItems: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<InputComponent color='primary' error placeholder='Place holder' type='text' />
				<InputComponent color='primary' error placeholder='Place holder' type='text' />
				<InputComponent color='primary' error placeholder='Place holder' type='text' />
				<InputComponent color='primary' error placeholder='Place holder' type='text' />
				<InputComponent color='primary' error placeholder='Place holder' type='text' />
				<InputComponent color='primary' error placeholder='Place holder' type='text' disabled />
			</div>

			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					alignItems: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<InputComponent color='primary' success placeholder='Place holder' type='text' />
				<InputComponent color='primary' success placeholder='Place holder' type='text' />
				<InputComponent color='primary' success placeholder='Place holder' type='text' />
				<InputComponent color='primary' success placeholder='Place holder' type='text' />
				<InputComponent color='primary' success placeholder='Place holder' type='text' />
				<InputComponent color='primary' success placeholder='Place holder' type='text' disabled />
			</div>
		</Fragment>
	);
}
