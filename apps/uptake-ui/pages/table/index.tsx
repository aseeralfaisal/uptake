import { Fragment } from 'react';

import { createColumnHelper } from '@tanstack/react-table';

import { AvatarGroupComponent } from '@uptake-ui-avatar-group';
import { CheckboxComponent } from '@uptake-ui-checkbox';
import { ChipComponent } from '@uptake-ui-chip';
import { TableComponent } from '@uptake-ui-table';

type TableData = {
	check: boolean;
	name: string;
	status: string;
	questions: number;
	points: number;
	duration: string;
	users: string;
	created: Date;
	actions: boolean;
};

const formatDate = (date: Date) => {
	return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
};

export default function TablePage() {
	const columnHelper = createColumnHelper<TableData>();

	const dummyData: TableData[] = [
		{
			check: true,
			name: 'Progoti mock test - 1',
			status: 'published',
			questions: 15,
			points: 100,
			duration: '1hr 10min',
			users: '',
			created: new Date(),
			actions: true
		},
		{
			check: true,
			name: 'Progoti mock test - 1',
			status: 'published',
			questions: 15,
			points: 100,
			duration: '1hr 10min',
			users: '',
			created: new Date(),
			actions: true
		},
		{
			check: true,
			name: 'Progoti mock test - 1',
			status: 'published',
			questions: 15,
			points: 100,
			duration: '1hr 10min',
			users: '',
			created: new Date(),
			actions: true
		}
	];

	const dummyArray = [
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240'
	];

	const columns = [
		columnHelper.accessor('check', {
			id: 'check',
			size: 20,
			cell: () => <CheckboxComponent id='c2' onChange={(e) => console.log(e)} />,
			header: () => <CheckboxComponent id='c2' onChange={(e) => console.log(e)} />
		}),
		columnHelper.accessor('name', {
			id: 'name',
			size: 200,
			cell: (info) => (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<span>{info.getValue()}</span>
					<span>Catalogapp.io</span>
				</div>
			),
			header: () => <span>Name</span>
		}),
		columnHelper.accessor('status', {
			id: 'status',
			size: 80,
			header: () => <span>Status</span>,
			cell: (info) =>
				info.getValue() === 'published' ? (
					<ChipComponent color='success' size='sm'>
						Published
					</ChipComponent>
				) : (
					<ChipComponent color='gray' size='sm'>
						Draft
					</ChipComponent>
				)
		}),
		columnHelper.accessor('questions', {
			id: 'questions',
			size: 80,
			header: () => <span>Questions</span>,
			cell: (info) => info.getValue()
		}),
		columnHelper.accessor('points', {
			id: 'points',
			size: 80,
			header: () => <span>Points</span>,
			cell: (info) => <div>{info.getValue()}</div>
		}),
		columnHelper.accessor('duration', {
			id: 'duration',
			size: 100,
			header: () => <span>Duration</span>,
			cell: (info) => <div>{info.getValue()}</div>
		}),
		columnHelper.accessor('users', {
			id: 'users',
			size: 120,
			header: () => <span>Users</span>,
			cell: (info) => <AvatarGroupComponent add avatars={dummyArray} color='gray' limit={3} size='sm' />
		}),
		columnHelper.accessor('created', {
			id: 'created',
			size: 100,
			header: () => <span>Date created</span>,
			cell: (info) => <div>{formatDate(info.getValue())}</div>
		}),
		columnHelper.accessor('actions', {
			id: 'actions',
			size: 80,
			cell: (info) => (
				<div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
					{/*<IconButtonComponent color='gray' plain icon={<Icon} size='sm'></IconButtonComponent>*/}
					{/*<IconButtonComponent color='gray' plain icon size='sm'></IconButtonComponent>*/}
				</div>
			),
			header: () => <span></span>
		})
	];

	return (
		<Fragment>
			<div
				style={{
					display: 'flex',
					gap: '30px',
					flexWrap: 'wrap',
					alignItems: 'center',
					margin: '50px auto',
					width: 'calc(100% - 300px)'
				}}
			>
				<TableComponent columns={columns} data={dummyData}></TableComponent>
			</div>
		</Fragment>
	);
}
