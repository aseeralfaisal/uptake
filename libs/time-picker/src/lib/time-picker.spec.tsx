import { render } from '@testing-library/react';

import TimePickerComponent from './time-picker.component';

describe('TimePickerComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<TimePickerComponent />);
		expect(baseElement).toBeTruthy();
	});
});
