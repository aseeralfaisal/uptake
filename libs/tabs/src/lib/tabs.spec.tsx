import { render } from '@testing-library/react';

import Component from './tabs.component';

describe('TabsComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Component plain size='md'/>);
		expect(baseElement).toBeTruthy();
	});
});
