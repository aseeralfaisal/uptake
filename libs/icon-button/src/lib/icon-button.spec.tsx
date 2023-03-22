import { render } from '@testing-library/react';

import { IconButtonComponent } from './icon-button.component';

describe('IconBtn', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<IconButtonComponent size='md' color='primary' />);
		expect(baseElement).toBeTruthy();
	});
});
