import { render } from '@testing-library/react';

import MetricsComponent from './metrics.component';

describe('MetricsComponent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<MetricsComponent
				color='purple'
				counter={1234}
				icon={
					<svg width='24' height='24' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M22.667 11.9854V12.9054C22.6658 15.0618 21.9675 17.1601 20.6763 18.8872C19.3852 20.6144 17.5703 21.8779 15.5023 22.4893C13.4344 23.1007 11.2243 23.0273 9.20146 22.28C7.17867 21.5327 5.45165 20.1515 4.27795 18.3424C3.10426 16.5334 2.54678 14.3934 2.68867 12.2417C2.83055 10.0899 3.6642 8.04171 5.06527 6.40245C6.46635 4.7632 8.35978 3.62076 10.4632 3.14553C12.5666 2.67029 14.7673 2.88772 16.737 3.76538M22.667 4.90538L12.667 14.9154L9.667 11.9154'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				}
				title='Total exams'
			/>
		);
		expect(baseElement).toBeTruthy();
	});
});
