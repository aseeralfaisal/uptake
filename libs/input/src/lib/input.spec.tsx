import { render } from '@testing-library/react';

import InputComponent from './input.component';

describe('Input', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<InputComponent color='primary' type='text' />);
		expect(baseElement).toBeTruthy();
	});
});
