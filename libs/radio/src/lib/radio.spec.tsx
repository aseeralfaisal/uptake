import { render } from '@testing-library/react';

import RadioComponent from './radio.component';

describe('RadioComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<RadioComponent
				id='r1'
				onChange={(e) => console.log(e)}
				support='Save my login details for next time.'
				value='value'
			>
				Remember me
			</RadioComponent>
		);
		expect(baseElement).toBeTruthy();
	});
});
