import {
	endOfMonth,
	endOfWeek,
	endOfYear,
	startOfMonth,
	startOfWeek,
	startOfYear,
	subDays,
	subMonths,
	subWeeks,
	subYears
} from 'date-fns';

export const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export class DateRangePickerUtils {
	private static instance: DateRangePickerUtils;

	private readonly date = new Date();

	public static getInstance(): DateRangePickerUtils {
		if (!this.instance) {
			this.instance = new DateRangePickerUtils();
		}

		return this.instance;
	}

	public yesterday(): Date[] {
		return [subDays(this.date, 1)];
	}

	public formatDate(date: Date): string {
		return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(date);
	}

	public thisWeek(): Date[] {
		return [startOfWeek(this.date), endOfWeek(this.date)];
	}

	public lastWeek(): Date[] {
		return [startOfWeek(subWeeks(this.date, 1)), endOfWeek(subWeeks(this.date, 1))];
	}

	public thisMonth(): Date[] {
		return [startOfMonth(this.date), endOfMonth(this.date)];
	}

	public lastMonth(): Date[] {
		return [startOfMonth(subMonths(this.date, 1)), endOfMonth(subMonths(this.date, 1))];
	}

	public thisYear(): Date[] {
		return [startOfYear(this.date), endOfYear(this.date)];
	}

	public lastYear(): Date[] {
		return [startOfYear(subYears(this.date, 1)), endOfYear(subYears(this.date, 1))];
	}
}
