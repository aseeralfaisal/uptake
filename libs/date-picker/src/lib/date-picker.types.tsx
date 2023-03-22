export type DatePickerProps = {
	date?: Date;
	disabled?: boolean;
	firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	maxDate?: Date;
	minDate?: Date;
	onChange: (date: Date) => void;
	placeholder?: string;
};
