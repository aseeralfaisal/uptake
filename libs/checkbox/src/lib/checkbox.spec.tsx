import { render } from '@testing-library/react';

import CheckboxComponent from './checkbox.component';

describe('CheckboxComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<CheckboxComponent
				checked
				id='c1'
				onChange={(e) => console.log(e)}
				support='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			>
				What is Lorem Ipsum?
			</CheckboxComponent>
		);
		expect(baseElement).toBeTruthy();
	});
});
