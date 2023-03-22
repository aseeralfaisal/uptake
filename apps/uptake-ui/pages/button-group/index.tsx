import { Fragment } from 'react';

import { ButtonGroupComponent } from '@uptake-ui-button-group';

export default function ButtonGroupPage() {
	const dummyArray = [
		{ message: 'Label 1', value: 'label1' },
		{ message: 'Label 2', value: 'label2' },
		{ message: <Fragment><span>a</span><span>b</span></Fragment>, value: 'label3' }
	];

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
				<ButtonGroupComponent buttons={dummyArray} disabled onChange={v => alert(v)} />
				<ButtonGroupComponent buttons={dummyArray} onChange={v => alert(v)} />
			</div>
		</Fragment>
	);
}
