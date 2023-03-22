import { render } from '@testing-library/react';

import Component from './chip.component';

describe('ChipComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Component color='primary' size='lg' />);
		expect(baseElement).toBeTruthy();
	});
});
