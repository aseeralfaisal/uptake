import { render } from '@testing-library/react';

import ProgressBar from './progress-bar.component';

describe('ProgressBar', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ProgressBar progress={70} />);
		expect(baseElement).toBeTruthy();
	});
});
