import { Fragment } from 'react';
import { ProgressBarComponent } from '@uptake-ui-progress-bar';

export default function AvatarPage() {
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
				<ProgressBarComponent progress={0} />
				<ProgressBarComponent progress={10} />
				<ProgressBarComponent progress={20} />
				<ProgressBarComponent progress={30} />

				<ProgressBarComponent progress={30} tooltip />
				<ProgressBarComponent progress={40} side='bottom' tooltip />
				<ProgressBarComponent progress={50} side='top' showInfo />
				<ProgressBarComponent progress={60} side='right' showInfo />
				<ProgressBarComponent progress={70} side='bottom' showInfo />
				<ProgressBarComponent progress={80} side='left' showInfo />
				<ProgressBarComponent progress={90} side='left' showInfo />
				<ProgressBarComponent progress={100} side='left' showInfo />
			</div>
		</Fragment>
	);
}
