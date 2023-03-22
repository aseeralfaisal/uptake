import { ColumnResizeMode, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ButtonGroupComponent } from '@uptake-ui-button-group';
import { ChipComponent } from '@uptake-ui-chip';
import { DateRangePickerComponent } from '@uptake-ui-date-range-picker';
import { IconButtonComponent } from '@uptake-ui-icon-button';
import Icon from '@uptake-ui-icons';
import { InputComponent } from '@uptake-ui-input';
import { PaginationComponent } from '@uptake-ui-pagination';
import { Fragment, useState } from 'react';
import CustomizeTrigger from './customize-trigger/component';
import * as Styled from './table.styles';
import { TableProps } from './table.types';
import FilterMenuItems from './filter.list';

export const TableComponent = (props: TableProps) => {
	const {
		columns,
		data,
		buttons,
		buttonGroupEvent,
		datePickerEvent,
		searchEvent,
		filterEvent,
		filters,
		headerButtons,
		isLoading,
		fields,
		setFields,
		pageInfo
	} = props;
	const [columnResizeMode] = useState<ColumnResizeMode>('onChange');
	const pageSize = 10;
	const table = useReactTable({ columns, columnResizeMode, data, getCoreRowModel: getCoreRowModel() });

	const feildsArr = fields.map(({ id }) => id.toLowerCase());
	const sortableListItems = Array.from(feildsArr);

	return (
		<Fragment>
			<Styled.TableHeaderContainer>
				<ButtonGroupComponent buttons={buttons} onChange={buttonGroupEvent} />
				<Styled.RightSideComponents>
					<InputComponent
						onChange={searchEvent}
						placeholder='Search'
						startIcon={<Icon.Search />}
						type='search'
					/>
					<DateRangePickerComponent onChange={datePickerEvent} size='lg' />
					<CustomizeTrigger
						headerButtons={headerButtons}
						fields={fields}
						setFields={setFields}
						FilterMenuItems={FilterMenuItems}
					/>
				</Styled.RightSideComponents>
			</Styled.TableHeaderContainer>
			<Styled.TableFilters>
				<Styled.TableFiltersWrapper>
					<Styled.TableTitle>All exams</Styled.TableTitle>

					{filters.map(({ title }: { title: string }, idx: number) => {
						return (
							<Fragment key={idx}>
								<ChipComponent onClose={filterEvent} closable color='gray' size='sm'>
									{title}
								</ChipComponent>
							</Fragment>
						);
					})}
				</Styled.TableFiltersWrapper>

				<Styled.TableActions>
					<IconButtonComponent icon={<Icon.Delete />} color='error' size='md' title='Delete' soft />
					<IconButtonComponent icon={<Icon.Refresh />} color='primary' size='md' title='Refresh' soft />
				</Styled.TableActions>
			</Styled.TableFilters>
			<Styled.TableContainer>
				<Styled.Table>
					<Styled.TableHead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers
									.filter((item) => {
										const disabledItems = fields.map(
											({ visibility, id }) =>
												!visibility && !id.includes('Actions') && id.toLowerCase()
										);
										return !disabledItems.includes(item.column.id.toLowerCase()) && item;
									})
									.sort((a, b) => sortableListItems.indexOf(a.id) - sortableListItems.indexOf(b.id))
									.map((header) => (
										<th key={header.id} style={{ width: header.getSize() }}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
											<div
												{...{
													onMouseDown: header.getResizeHandler(),
													onTouchStart: header.getResizeHandler(),
													className: `resizer ${
														header.column.getIsResizing() ? 'isResizing' : ''
													}`
												}}
											/>
										</th>
									))}
							</tr>
						))}
					</Styled.TableHead>

					<Styled.TableBody>
						{table.getRowModel().rows.map((row) => {
							return (
								<tr key={row.id}>
									{row
										.getVisibleCells()
										.filter((item) => {
											const disabledItems = fields.map(
												({ visibility, id }) =>
													!visibility && !id.includes('Actions') && id.toLowerCase()
											);
											return !disabledItems.includes(item.column.id.toLowerCase()) && item;
										})
										.sort(
											(a, b) =>
												sortableListItems.indexOf(a.column.id) -
												sortableListItems.indexOf(b.column.id)
										)
										.map((cell) => {
											return (
												<td key={cell.id} style={{ width: cell.column.getSize() }}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</td>
											);
										})}
								</tr>
							);
						})}
					</Styled.TableBody>
				</Styled.Table>
				<PaginationComponent {...pageInfo} />
			</Styled.TableContainer>
		</Fragment>
	);
};
