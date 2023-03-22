import { useMemo, useState } from 'react';
import { Listbox } from '@headlessui/react';

import TimePickerDownIcon from './time-picker-down.icon';
import TimePickerSelectedIcon from './time-picker-select.icon';
import TimePickerUpIcon from './time-picker-up.icon';
import {
	TimePickerContainer,
	TimePickerOption,
	TimePickerOptions,
	TimePickerPlaceholder,
	TimePickerTrigger
} from './time-picker.styles';
import type { TimePickerProps } from './time-picker.types';
import { TimePickerHelper } from './time-picker.utils';

export const TimePickerComponent = (props: TimePickerProps) => {
	const { end, start, step = 15, format, value, disabled = false } = props;

	const people: string[] = useMemo(() => {
		const timePickerHelper = new TimePickerHelper(end, start, step, format);
		let timeIntervals = timePickerHelper.intervalDates();
		if (!end) {
			timeIntervals.pop();
		}
		return timeIntervals;
	}, [end, start, step]);

	const [selected, setSelected] = useState(value);

	let element = <TimePickerPlaceholder>Select time</TimePickerPlaceholder>;
	if (selected) {
		element = <p>{selected.toString()}</p>;
	}

	return (
		<Listbox disabled={disabled} value={selected} onChange={setSelected}>
			{({ open }) => (
				<TimePickerContainer>
					<Listbox.Button as={TimePickerTrigger}>
						{element}
						{open ? <TimePickerUpIcon /> : <TimePickerDownIcon />}
					</Listbox.Button>

					{open && (
						<Listbox.Options as={TimePickerOptions} static>
							{people.map((person, personIdx) => (
								<Listbox.Option as='div' key={personIdx} value={person}>
									{({ selected }) => (
										<TimePickerOption selected={selected}>
											{person}
											{selected ? <TimePickerSelectedIcon /> : null}
										</TimePickerOption>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					)}
				</TimePickerContainer>
			)}
		</Listbox>
	);
};

export default TimePickerComponent;
