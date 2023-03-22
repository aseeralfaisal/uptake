import { render } from '@testing-library/react';

import ProgressCircle from './progress-circle.component';

describe('ProgressCircle', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ProgressCircle size='sm' progress={30} />);
		expect(baseElement).toBeTruthy();
	});
});
