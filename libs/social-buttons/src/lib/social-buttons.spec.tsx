import { render } from '@testing-library/react';

import SocialButtons from './social-buttons.component';

describe('SocialButtons', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<SocialButtons />);
		expect(baseElement).toBeTruthy();
	});
});
