import { render } from '@testing-library/react';

import { AvatarComponent } from './avatar.component';

describe('Avatar', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<AvatarComponent size='lg' />);
		expect(baseElement).toBeTruthy();
	});
});
