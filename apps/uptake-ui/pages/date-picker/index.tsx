import { DatePickerComponent } from '@uptake-ui-date-picker';

export default function DatePickerPage() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(6, 1fr)',
				margin: '50px auto',
				width: '900px',
			}}
		>
			<DatePickerComponent onChange={(date) => alert(date)} />
		</div>
	);
}
