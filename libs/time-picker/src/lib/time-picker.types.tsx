export type TimePickerProps<T = Date> = {
	disabled?: boolean;
	end?: T;
	error?: boolean;
	format?: 12 | 24;
	onChange?: (a: T | null) => unknown;
	placeholder?: string;
	positive?: boolean;
	size?: 'sm' | 'md' | 'lg';
	start: T;
	step?: number;
	value?: T | null;
};

// export type TimePickerDefaultProps = {
// 	format: 12;
// 	step: 900;
// 	creatable: false;
// 	ignoreMinMaxDateComponent: false;
// };
