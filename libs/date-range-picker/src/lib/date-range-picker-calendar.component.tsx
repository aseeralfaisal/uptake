import { Calendar, DateObj, RenderProps } from 'dayzed';

import {
	DateRangePickerCell,
	DateRangePickerCellsContainer,
	DateRangePickerContainer,
	DateRangePickerDatesContainer,
	DateRangePickerDaysContainer,
	DateRangePickerHeader,
	DateRangePickerNavigation,
	DateRangePickersContainer
} from './date-range-picker.styles';

import DateRangePickerNextIcon from './date-range-picker-next.icon';
import DateRangePickerPreviousIcon from './date-range-picker-previous.icon';

import { months, weekDays } from './date-range-picker.utils';

const DateRangePickerCalendarComponent = ({ calendars, getBackProps, getForwardProps, getDateProps }: RenderProps) => {
	if (calendars.length) {
		return (
			<DateRangePickersContainer>
				{calendars.map((calendar: Calendar, cIndex: number) => (
					<DateRangePickerContainer key={cIndex}>
						<DateRangePickerHeader>
							<DateRangePickerNavigation {...getBackProps({ calendars })}>
								<DateRangePickerPreviousIcon />
							</DateRangePickerNavigation>
							{months[calendar.month]} {calendar.year}
							<DateRangePickerNavigation {...getForwardProps({ calendars })}>
								<DateRangePickerNextIcon />
							</DateRangePickerNavigation>
						</DateRangePickerHeader>

						<DateRangePickerDaysContainer>
							{weekDays.map((weekday, index) => (
								<span key={`${calendar.month}${calendar.year}${weekday}${index}`}>{weekday}</span>
							))}
						</DateRangePickerDaysContainer>

						<DateRangePickerDatesContainer>
							{calendar.weeks.map((week: Array<DateObj | ''>, weekIndex: number) => (
								<DateRangePickerCellsContainer key={weekIndex}>
									{week.map((dateObj: DateObj | '', index: number) => {
										const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
										if (!dateObj) {
											return <span key={key}></span>;
										}
										const { date, selected, selectable } = dateObj;
										return (
											<DateRangePickerCell
												disabled={!selectable}
												key={key}
												selected={selected}
												{...getDateProps({ dateObj })}
											>
												{date.getDate()}
											</DateRangePickerCell>
										);
									})}
								</DateRangePickerCellsContainer>
							))}
						</DateRangePickerDatesContainer>
					</DateRangePickerContainer>
				))}
			</DateRangePickersContainer>
		);
	}
	return null;
};

export default DateRangePickerCalendarComponent;
