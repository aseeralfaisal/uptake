import { render } from '@testing-library/react';

import AvatarGroupComponent from './avatar-group.component';

describe('AvatarGroup', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<AvatarGroupComponent size='sm' />);
		expect(baseElement).toBeTruthy();
	});
});
