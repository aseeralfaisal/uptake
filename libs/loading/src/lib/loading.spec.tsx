import { render } from '@testing-library/react';

import Loading from './loading.component';

describe('Loading', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Loading size='sm' />);
		expect(baseElement).toBeTruthy();
	});
});
