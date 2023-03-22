import { render } from '@testing-library/react';

import DropDownComponent from './drop-down.component';

describe('DropDownComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<DropDownComponent
			color='gray'
			options={[
				{ content: <span>Dropdown</span>, disabled: false, onSelect: () => console.log('clicked') },
				{ content: <span>Dropdown 1</span>, disabled: false, onSelect: () => console.log('clicked') }
			]}
			plain
			size='sm'
		>
			<p style={{ padding: '0 8px' }}>Go to file</p>
		</DropDownComponent>);
		expect(baseElement).toBeTruthy();
	});
});
