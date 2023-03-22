import { useState } from 'react';

import * as ReactPopover from '@radix-ui/react-popover';
import Dayzed, { DateObj, RenderProps } from 'dayzed';

import DateRangePickerCalendarComponent from './date-range-picker-calendar.component';

import DateRangePickerCalendarIcon from './date-range-picker-calendar.icon';

import { DateRangePickerUtils } from './date-range-picker.utils';

import {
	DateRangePickerContent,
	DateRangePickerContentContainer,
	DateRangePickerFooter,
	DateRangePickerFooterContainer,
	DateRangePickerSidebarButton,
	DateRangePickerSidebarContainer,
	PopoverButton,
	PopoverCloseButton,
	PopoverContent
} from './date-range-picker.styles';
import type { DateRangePickerProps } from './date-range-picker.types';

const dateRangePickerUtils = DateRangePickerUtils.getInstance();

export const DateRangePickerComponent = (props: DateRangePickerProps) => {
	const { dates = [], disabled = false, onChange, placeholder = 'Select dates', size = 'lg', ...otherProps } = props;

	const [selectedDates, setSelectedDates] = useState(dates);

	const handleDateChange = ({ selectable, date }: DateObj) => {
		if (!selectable) {
			return;
		}
		const dateTime = date.getTime();
		const newDates = [...selectedDates];
		if (selectedDates.length) {
			if (selectedDates.length === 1) {
				const firstTime = selectedDates[0].getTime();
				if (firstTime < dateTime) {
					newDates.push(date);
				} else {
					newDates.unshift(date);
				}
				setSelectedDates(newDates);
			} else if (newDates.length === 2) {
				setSelectedDates([date]);
			}
		} else {
			newDates.push(date);
			setSelectedDates(newDates);
		}
	};

	const handleShortcutDates = (dates: Date[]) => {
		setSelectedDates(dates);
	};

	const handleApply = () => {
		if (selectedDates && selectedDates.length === 2) {
			onChange(selectedDates);
		}
	};

	return (
		<ReactPopover.Root>
			<ReactPopover.Trigger asChild>
				<PopoverButton disabled={disabled} size={size}>
					<DateRangePickerCalendarIcon />
					{selectedDates.length > 0
						? selectedDates.map((date: Date) => dateRangePickerUtils.formatDate(date)).join(' - ')
						: placeholder}
				</PopoverButton>
			</ReactPopover.Trigger>

			<PopoverContent
				align='end'
				avoidCollisions
				hideWhenDetached
				onOpenAutoFocus={(event) => event.preventDefault()}
				side='bottom'
				sideOffset={8}
			>
				<DateRangePickerContentContainer>
					<DateRangePickerSidebarContainer>
						<DateRangePickerSidebarButton onClick={() => handleShortcutDates([new Date()])}>
							Today
						</DateRangePickerSidebarButton>
						<DateRangePickerSidebarButton
							onClick={() => handleShortcutDates(dateRangePickerUtils.yesterday())}
						>
							Yesterday
						</DateRangePickerSidebarButton>
						<DateRangePickerSidebarButton
							onClick={() => handleShortcutDates(dateRangePickerUtils.thisWeek())}
						>
							This week
						</DateRangePickerSidebarButton>
						<DateRangePickerSidebarButton
							onClick={() => handleShortcutDates(dateRangePickerUtils.lastWeek())}
						>
							Last week
						</DateRangePickerSidebarButton>
						<DateRangePickerSidebarButton
							onClick={() => handleShortcutDates(dateRangePickerUtils.thisMonth())}
						>
							This month
						</DateRangePickerSidebarButton>
						<DateRangePickerSidebarButton
							onClick={() => handleShortcutDates(dateRangePickerUtils.lastMonth())}
						>
							Last month
						</DateRangePickerSidebarButton>
						<DateRangePickerSidebarButton
							onClick={() => handleShortcutDates(dateRangePickerUtils.thisYear())}
						>
							This year
						</DateRangePickerSidebarButton>
						<DateRangePickerSidebarButton
							onClick={() => handleShortcutDates(dateRangePickerUtils.lastYear())}
						>
							Last year
						</DateRangePickerSidebarButton>
					</DateRangePickerSidebarContainer>

					<DateRangePickerContent>
						<Dayzed
							monthsToDisplay={2}
							onDateSelected={handleDateChange}
							render={(daysProps: RenderProps) => <DateRangePickerCalendarComponent {...daysProps} />}
							selected={selectedDates}
							{...otherProps}
						/>

						<DateRangePickerFooterContainer>
							<span></span>
							<DateRangePickerFooter>
								<PopoverCloseButton color='gray' disabled={disabled}>
									Cancel
								</PopoverCloseButton>
								<PopoverCloseButton color='primary' disabled={disabled} onClick={handleApply}>
									Apply
								</PopoverCloseButton>
							</DateRangePickerFooter>
						</DateRangePickerFooterContainer>
					</DateRangePickerContent>
				</DateRangePickerContentContainer>
			</PopoverContent>
		</ReactPopover.Root>
	);
};

export default DateRangePickerComponent;
