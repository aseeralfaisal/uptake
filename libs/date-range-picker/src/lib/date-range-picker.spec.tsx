import { render } from '@testing-library/react';

import DatePickerComponent from './date-range-picker.component';

describe('DatePickerComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DatePickerComponent onChange={() => alert('a')} />);
		expect(baseElement).toBeTruthy();
	});
});
