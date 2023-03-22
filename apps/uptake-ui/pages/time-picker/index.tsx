import { Fragment } from 'react';

import { TimePickerComponent } from '@uptake-ui-time-picker';

export default function TimePickerPage() {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					rowGap: 30,
					columnGap: 30,
					gridTemplateColumns: 'repeat(3, 1fr)',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<TimePickerComponent
					start={new Date(new Date().setHours(1))}
					// end={new Date(new Date().setHours(5))}
					format={24}
				></TimePickerComponent>
				<TimePickerComponent
					start={new Date(new Date().setHours(1))}
					step={10}
					format={12}
				></TimePickerComponent>
				<TimePickerComponent start={new Date(new Date().setHours(1))} step={10}></TimePickerComponent>
				<TimePickerComponent
					start={new Date()}
					end={new Date(new Date().setHours(18))}
					step={30}
					format={24}
				></TimePickerComponent>
				<TimePickerComponent
					start={new Date()}
					end={new Date(new Date().setHours(18))}
					step={30}
					format={12}
				></TimePickerComponent>
			</div>
		</Fragment>
	);
}
