import { Fragment } from 'react';
import { ProgressCircleComponent } from '@uptake-ui-progress-circle';

export default function ProgreeCirclePage() {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '100%',
					gap: '30px',
					placeContent: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<ProgressCircleComponent progress={30} size='lg' half={true} userText='Active Users' />
				<ProgressCircleComponent progress={20} size='sm' />
				<ProgressCircleComponent progress={20} size='lg' userText='Users' />
			</div>
		</Fragment>
	);
}
