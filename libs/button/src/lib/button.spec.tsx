import { fireEvent, render } from '@testing-library/react';

import ButtonComponent from './button.component';

describe('ButtonComponent', () => {
	it('should render successfully as button', () => {
		const { baseElement } = render(<ButtonComponent color='primary' size='sm' />);
		expect(baseElement).toBeTruthy();
	});

  it('should render successfully as link', () => {
		const { baseElement } = render(<ButtonComponent color='primary' href="google.com" size='sm' />);
		expect(baseElement).toBeTruthy();
	});

  it('should click button', () => {
		const { baseElement } = render(<ButtonComponent color='primary' href="google.com" size='sm' />);
		expect(baseElement).toBeTruthy();
    fireEvent.click(baseElement);
	});
});
