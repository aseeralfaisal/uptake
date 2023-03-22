import { render } from '@testing-library/react';

import BadgeGroupComponent from './badge-group.component';

describe('BadgeGroup', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BadgeGroupComponent
				color='error'
				content='We have just released a new feature!'
				leading
				outlined
				title='New feature'
				size='md'
			/>
		);
		expect(baseElement).toBeTruthy();
	});
});
