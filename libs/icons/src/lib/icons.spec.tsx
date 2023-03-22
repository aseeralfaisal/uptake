import { render } from '@testing-library/react';

import KeyIcon from './key.icon';

describe('Icons', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<KeyIcon />);
		expect(baseElement).toBeTruthy();
	});
});
