import { render } from '@testing-library/react';

import ModalComponent from './modal.component';

describe('ModalComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ModalComponent isOpen onClose={() => alert('clicked')} />);
		expect(baseElement).toBeTruthy();
	});
});
