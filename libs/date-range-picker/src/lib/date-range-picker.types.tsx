export type DateRangePickerProps = {
	dates?: Date[];
	disabled?: boolean;
	firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	maxDate?: Date;
	minDate?: Date;
	onChange: (dates: Date[]) => void;
	placeholder?: string;
    size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};
