import { render } from '@testing-library/react';

import SwitchComponent from './switch.component';

describe('SwitchComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<SwitchComponent id='s1' size='sm' onChange={(e) => console.log(e)}>
				Whats new in version 3.1
			</SwitchComponent>
		);
		expect(baseElement).toBeTruthy();
	});
});
