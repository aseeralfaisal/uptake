import { DateObj, RenderProps } from 'dayzed';

import {
	DatePickerCell,
	DatePickerCellsContainer,
	DatePickerContainer,
	DatePickerDatesContainer,
	DatePickerDaysContainer,
	DatePickerHeader,
	DatePickerNavigation,
} from './date-picker.styles';

import DatePickerNextIcon from './date-picker-next.icon';
import DatePickerPreviousIcon from './date-picker-previous.icon';

import { months, weekDays } from './date-picker.utils';

const DatePickerCalendarComponent = ({ calendars, getBackProps, getForwardProps, getDateProps }: RenderProps) => {
	const [calendar] = calendars;

	if (calendar) {
		return (
			<DatePickerContainer>
				<DatePickerHeader>
					<DatePickerNavigation {...getBackProps({ calendars })}>
						<DatePickerPreviousIcon />
					</DatePickerNavigation>
					<span>
						{months[calendar.month]} {calendar.year}
					</span>
					<DatePickerNavigation {...getForwardProps({ calendars })}>
						<DatePickerNextIcon />
					</DatePickerNavigation>
				</DatePickerHeader>

				<DatePickerDaysContainer>
					{weekDays.map((weekday, index) => (
						<span key={`${calendar.month}${calendar.year}${weekday}${index}`}>{weekday}</span>
					))}
				</DatePickerDaysContainer>

				<DatePickerDatesContainer>
					{calendar.weeks.map((week: Array<DateObj | ''>, weekIndex: number) => (
						<DatePickerCellsContainer key={weekIndex}>
							{week.map((dateObj: DateObj | '', index: number) => {
								const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
								if (!dateObj) {
									return <span key={key}></span>;
								}
								const { date, selected, selectable } = dateObj;
								return (
									<DatePickerCell
										disabled={!selectable}
										key={key}
										selected={selected}
										{...getDateProps({ dateObj })}
									>
										{date.getDate()}
									</DatePickerCell>
								);
							})}
						</DatePickerCellsContainer>
					))}
				</DatePickerDatesContainer>
			</DatePickerContainer>
		);
	}
	return null;
}

export default DatePickerCalendarComponent;