import React, { useState } from 'react';

import * as Popover from '@radix-ui/react-popover';

import { ButtonComponent } from '@uptake-ui-button';
import Icon from '@uptake-ui-icons';

import type { CustomizeTriggerProps } from './types';

import * as Styled from './styles';
import { ButtonGroupComponent } from '@uptake-ui-button-group';
import { editorsVisibilityState } from '../../stores/export-editors-visibilty';
import { editorsListState } from '../../stores/export-editors-list';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MultipleCheckerList } from '@uptake-ui-multiple-checker-list';
import FilterMenuItems from '../filter.list';

import {
	DndContext,
	closestCenter,
	useSensor,
	PointerSensor,
	KeyboardSensor,
	useSensors,
	MouseSensor
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import { SwitchComponent } from '@uptake-ui-switch';

export default function CustomizeTrigger(props: CustomizeTriggerProps) {
	const { fields, setFields, headerButtons } = props;
	const [headerName, setHeaderName] = useState('Fields');
	const [open, setIsOpen] = useState(false);
	const visibility = editorsVisibilityState(({ editorsVisibility }) => editorsVisibility);
	const list = editorsListState((state) => state.editorsList);
	const setList = editorsListState(({ setEditorsList }) => setEditorsList);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				delay: 200,
				tolerance: 5
			}
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		}),
		useSensor(MouseSensor, {
			activationConstraint: {
				delay: 200,
				tolerance: 5
			}
		})
	);

	const onChangeSwitch = (checked: boolean, id: string) => {
		const newState = fields.map((obj) => {
			if (obj.id === id) {
				return { ...obj, visibility: checked };
			}
			return obj;
		});
		setFields(newState);
	};

	const onChangeCustomizeHeader = (label: string) => setHeaderName(label);

	function handleDragEnd(event) {
		const { active, over } = event;

		if (active?.id !== over?.id) {
			setFields((items) => {
				const activeIndex = items.findIndex((item) => item.id === active.id);
				const overIndex = items.findIndex((item) => item.id === over.id);
				console.log(arrayMove(items, activeIndex, overIndex));
				return arrayMove(items, activeIndex, overIndex);
			});
		}
	}

	const ContentView = () => {
		if (headerName !== 'Filter') {
			return (
				<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
					<Styled.FieldsParent>
						<SortableContext items={fields} strategy={verticalListSortingStrategy}>
							{fields
								?.filter(({ id }) => id !== 'Actions')
								.map((field, index) => {
									const { id, icon, visibility } = field;
									return (
										<SortableItem
											key={index}
											id={id}
											icon={icon}
											index={index}
											visibility={visibility}
											switchComponent={
												<SwitchComponent
													id={id}
													checked={visibility}
													onChange={(checked: boolean) => onChangeSwitch(checked, id)}
													size='sm'
												/>
											}
										/>
									);
								})}
						</SortableContext>
					</Styled.FieldsParent>
				</DndContext>
			);
		} else {
			return (
				<Styled.FilterParent>
					<FilterMenuItems />
				</Styled.FilterParent>
			);
		}
	};

	return (
		<Popover.Root open={open} onOpenChange={() => setIsOpen(!open)}>
			<Popover.Trigger asChild>
				<ButtonComponent size='lg' color='gray' outlined startIcon={<Icon.Customize />}>
					Customize
				</ButtonComponent>
			</Popover.Trigger>
			<Styled.PopoverContent
				align='end'
				avoidCollisions
				hideWhenDetached
				onOpenAutoFocus={(event) => event.preventDefault()}
				side='right'
				sideOffset={-180}
				open={open}
			>
				<Styled.Header>
					<Styled.TitleContainer>
						<Styled.Title>Customize</Styled.Title>
						<Styled.PopoverClose onClick={() => setHeaderName(false)}>
							<Icon.Close />
						</Styled.PopoverClose>
					</Styled.TitleContainer>
					<Styled.ContentTitle>
						Use Custom Fields to track fetched questions, or whatever brings clarity to your exams.
					</Styled.ContentTitle>
					<Styled.HeaderParent>
						<ButtonGroupComponent
							buttons={headerButtons}
							onChange={(label) => onChangeCustomizeHeader(label)}
						/>
					</Styled.HeaderParent>
				</Styled.Header>
				<ContentView />
				{visibility && <MultipleCheckerList list={list} setList={setList} />}
			</Styled.PopoverContent>
		</Popover.Root>
	);
}
