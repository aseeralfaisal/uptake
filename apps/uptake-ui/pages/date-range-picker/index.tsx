import { DateRangePickerComponent } from '@uptake-ui-date-range-picker';

export default function DateRangePickerPage() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				margin: '50px auto',
				width: '900px'
			}}
		>
			<DateRangePickerComponent onChange={(dates) => alert(dates)} />
		</div>
	);
}
