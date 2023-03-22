import { render } from '@testing-library/react';

import ProgressSteps from './progress-steps';

describe('ProgressSteps', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ProgressSteps />);
		expect(baseElement).toBeTruthy();
	});
});
