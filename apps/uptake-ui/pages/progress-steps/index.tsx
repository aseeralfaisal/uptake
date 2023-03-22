import { Fragment } from 'react';
import { ProgressStepsComponent } from '@uptake-ui-progress-steps';

export default function ProgressStepsPage() {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',

					gridTemplateColumns: 'repeat(15, 1fr)',

					gap: '30px',
					placeContent: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<ProgressStepsComponent
					progress={0}
					color='primary'
					detailsText='Your details'
					descriptionText='Please provide your name and email'
				/>
				<ProgressStepsComponent
					progress={20}
					color='error'
					detailsText='Your details'
					descriptionText='Please provide your name and email'
				/>
			</div>
			<div
				style={{
					display: 'grid',

					gridTemplateColumns: 'repeat(15, 1fr)',

					gap: '30px',
					placeContent: 'center',
					margin: '50px auto',
					width: '1080px'
				}}
			>
				<ProgressStepsComponent
					progress={100}
					color='gray'
					detailsText='Your details'
					descriptionText='Please provide your name and email'
				/>
				<ProgressStepsComponent
					progress={50}
					color='success'
					detailsText='Your details'
					descriptionText='Please provide your name and email'
				/>
			</div>
		</Fragment>
	);
}
