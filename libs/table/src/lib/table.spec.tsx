import { render } from '@testing-library/react';

import { TableComponent } from './table.component';

describe('Table', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<TableComponent />);
		expect(baseElement).toBeTruthy();
	});
});
