import { Fragment } from 'react';

import { SwitchComponent } from '@uptake-ui-switch';

export default function RadioPage() {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					gap: '30px',
					gridTemplateColumns: 'repeat(3, 1fr)',
					flexWrap: 'wrap',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<SwitchComponent
					id='s1'
					size='sm'
					support='Save my login details for next time.'
					onChange={(e) => console.log(e)}
				>
					Whats new in version 3.1
				</SwitchComponent>

				<SwitchComponent
					id='s2'
					size='md'
					support='Save my login details for next time.'
					onChange={(e) => console.log(e)}
				>
					Whats new in version 3.1
				</SwitchComponent>

				<SwitchComponent
					id='s1'
					size='sm'
					support='Save my login details for next time.'
					onChange={(e) => console.log(e)}
				></SwitchComponent>

				<SwitchComponent id='s1' size='sm' onChange={(e) => console.log(e)}>
					Whats new in version 3.1
				</SwitchComponent>
			</div>
		</Fragment>
	);
}
