import { Fragment } from 'react';

import { RadioComponent } from '@uptake-ui-radio';

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
				<RadioComponent
					id='r1'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
					value='value'
				>
					Remember me
				</RadioComponent>

				<RadioComponent
					id='r2'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
					value='value'
				>
					Remember me
				</RadioComponent>

				<RadioComponent
					disabled
					id='r1'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
					value='value'
				>
					Remember me
				</RadioComponent>

				<RadioComponent disabled id='r1' onChange={(e) => console.log(e)} value='value'>
					Remember me
				</RadioComponent>
			</div>
		</Fragment>
	);
}
