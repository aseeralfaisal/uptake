import { useState } from 'react';

import * as ReactPopover from '@radix-ui/react-popover';
import Dayzed, { DateObj, RenderProps } from 'dayzed';

import DatePickerCalendarComponent from './date-picker-calendar.component';

import DatePickerCalendarIcon from './date-picker-calendar.icon';

import { formatDate } from './date-picker.utils';

import { DatePickerFooter, PopoverCloseButton, PopoverButton, PopoverContent } from './date-picker.styles';
import type { DatePickerProps } from './date-picker.types';

export const DatePickerComponent = (props: DatePickerProps) => {
	const { date, disabled = false, onChange, placeholder = 'Select date', ...otherProps } = props;

	const [selected, setSelected] = useState(date);

	const handleDateChange = (dateObj: DateObj) => {
		setSelected(dateObj.date);
	};

	const handleApply = () => {
		if (selected) {
			onChange(selected);
		}
	};

	return (
		<ReactPopover.Root>
			<ReactPopover.Trigger asChild>
				<PopoverButton disabled={disabled}>
					<DatePickerCalendarIcon />
					{selected ? formatDate(selected) : placeholder}
				</PopoverButton>
			</ReactPopover.Trigger>

			<ReactPopover.Portal>
				<PopoverContent align='end' avoidCollisions hideWhenDetached side='bottom' sideOffset={8}>
					<Dayzed
						monthsToDisplay={1}
						onDateSelected={handleDateChange}
						render={(daysProps: RenderProps) => <DatePickerCalendarComponent {...daysProps} />}
						selected={selected}
						{...otherProps}
					/>

					<DatePickerFooter>
						<PopoverCloseButton color='gray' disabled={disabled}>
							Cancel
						</PopoverCloseButton>
						<PopoverCloseButton color='primary' disabled={disabled} onClick={handleApply}>
							Apply
						</PopoverCloseButton>
					</DatePickerFooter>
				</PopoverContent>
			</ReactPopover.Portal>
		</ReactPopover.Root>
	);
};

export default DatePickerComponent;
