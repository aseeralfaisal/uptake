import { render } from '@testing-library/react';

import Component from './component';

describe('Navbar', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Component />);
		expect(baseElement).toBeTruthy();
	});
});
