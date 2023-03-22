import { render } from '@testing-library/react';

import AvatarLabel from './avatar-label.component';

describe('AvatarLabel', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<AvatarLabel size='lg' />);
		expect(baseElement).toBeTruthy();
	});
});
