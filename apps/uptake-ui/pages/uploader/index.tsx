import { UploaderComponent } from '@uptake-ui-uploader';
import { Fragment } from 'react';

export default function UploaderPage() {
	return (
		<Fragment>
			<div
				style={{
					margin: '50px auto',
					width: '1080px',
					display: 'grid',
					gap: '30px',
					gridColumn: 'initial',
					alignItems: 'flex-start',
					gridTemplateColumns: 'repeat(2, 1fr)'
				}}
			>
				<UploaderComponent maxFiles={1} maxSize={1048576} />
				<UploaderComponent />
			</div>
		</Fragment>
	);
}
