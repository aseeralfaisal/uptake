import { render } from '@testing-library/react';

import { ButtonComponent } from '@uptake-ui-button';

import EmptyComponent from './empty.component';

describe('Empty', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<EmptyComponent message='Please try again or create a new exam' title='No exams found'>
				<ButtonComponent color='gray' size='md' outlined>
					Clear search
				</ButtonComponent>
			</EmptyComponent>
		);
		expect(baseElement).toBeTruthy();
	});
});
