import { Fragment } from 'react';

import { CheckboxComponent } from '@uptake-ui-checkbox';

export default function CheckboxPage() {
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
				<CheckboxComponent
					checked
					id='c1'
					onChange={(e) => console.log(e)}
					support='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
				>
					What is Lorem Ipsum? <a href='google.com'>google</a> huh
				</CheckboxComponent>

				<CheckboxComponent
					checked
					disabled
					id='c2'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
				/>

				<CheckboxComponent
					checked
					disabled
					id='c3'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
				/>

				<CheckboxComponent
					checked
					disabled
					id='c4'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
				/>

				<CheckboxComponent
					checked
					disabled
					id='c5'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
				/>

				<CheckboxComponent
					checked
					disabled
					id='c6'
					onChange={(e) => console.log(e)}
					support='Save my login details for next time.'
				/>
			</div>
		</Fragment>
	);
}
