import { render } from '@testing-library/react';

import MultipleCheckerList from './multiple-checker-list';

describe('MultipleCheckerList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<MultipleCheckerList />);
		expect(baseElement).toBeTruthy();
	});
});
