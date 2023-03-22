import { eachMinuteOfInterval, endOfDay, format, roundToNearestMinutes, startOfDay } from 'date-fns';

export class TimePickerHelper {
	private readonly end: Date;
	private readonly format: string = 'p';
	private readonly start: Date;
	private readonly step: number;

	constructor(end: Date | undefined, start: Date, step: number, format?: 12 | 24) {
		this.end = this.nearestTime(end || endOfDay(start));

		this.step = step;
		this.start = this.nearestTime(start || startOfDay(start));
		if (format && format === 24) {
			this.format = 'kk:mm';
		}
	}

	public intervalDates() {
		const intervals = this.prepareIntervals();
		return intervals.map((date) => format(date, this.format));
	}

	private prepareIntervals(): Date[] {
		return eachMinuteOfInterval(
			{
				start: this.start,
				end: this.end
			},
			{ step: this.step }
		);
	}

	private nearestTime(date: Date) {
		return roundToNearestMinutes(date, { nearestTo: this.step, roundingMethod: 'round' });
	}
}
