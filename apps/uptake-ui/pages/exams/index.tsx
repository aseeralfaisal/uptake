import ShortLogo from '@components/logo/short-logo.component';
import { HeaderComponent } from '@layouts/header';
import ExamsHeaderContainer from '@modules/exams/application/exams-header/container';
import ExamsStatsContainer from '@modules/exams/application/exams-stats/container';
import Icon from '@uptake-ui-icons';
import { NavbarComponent } from '@uptake-ui-navbar';
import { TableComponent } from '@uptake-ui-table';

import { hideMenuState } from '@modules/exams/stores/export-hidemenu.store';
import { ConfirmationModalComponent } from '@uptake-ui-confirmation-modal';
import { useState } from 'react';
import { generateColums } from './exams.helper';
const screen = require('native-screen-js');

export const getServerSideProps = async () => {
	const { displayCount } = screen.getDisplayInfo();

	return {
		props: {
			displayCount
		}
	};
};

const ExamsPage = (props) => {
	const hideMenu = hideMenuState(({ hideMenu }: { hideMenu: boolean }) => hideMenu);
	const [allChecked, setAllChecked] = useState(false);
	const [modalState, setModalState] = useState({ isOpen: false, isDelete: false });
	const buttonGroupEvent = (v: string) => console.log(v);
	const datePickerEvent = () => alert('date picker');
	const searchEvent = ({ target }) => console.log(target.value);
	const filterEvent = () => console.log('Chip component on close');
	const filters = [{ title: 'filtered text1' }, { title: 'filtered text2' }, { title: 'filtered text3' }];

	const pageInfo = {
		currentPageIndex: 2,
		itemsPerPage: 10,
		totalItems: 1000,
		isDisabled: false
	};

	const headerButtons = [
		{ message: 'Fields', value: 'Fields', visible: false },
		{ message: 'Filter', value: 'Filter', visible: false }
	];
	const [fields, setFields] = useState([
		{ id: 'Privacy', icon: <Icon.Privacy />, visibility: true },
		{ id: 'Last Modified', icon: <Icon.ClockOutlined />, visibility: true },
		{ id: 'Questions', icon: <Icon.Questions />, visibility: true },
		{ id: 'Points', icon: <Icon.Points />, visibility: true },
		{ id: 'Duration', icon: <Icon.Duration />, visibility: true },
		{ id: 'Editors', icon: <Icon.Editors />, visibility: true },
		{ id: 'Created', icon: <Icon.CalendarOutlined />, visibility: false },
		{ id: 'Actions', icon: <Icon.Copy />, visibility: true },
		{ id: 'Status', icon: <Icon.Status />, visibility: false },
		{ id: 'Questions Fetched', icon: <Icon.Questions />, visibility: false },
		{ id: 'Users', icon: <Icon.Users />, visibility: false },
		{ id: 'Payment Status', icon: <Icon.PaymentStatus />, visibility: false }
	]);

	const openModal = (isDelete) => {
		setModalState({ isOpen: true, isDelete });
	};

	const closeModal = () => {
		setModalState({ ...modalState, isOpen: false });
	};

	const onConfirm = () => {
		alert('deleted');
		closeModal();
	};

	const onAllChecked = (value: boolean) => {
		setAllChecked(!allChecked);
	};

	const columns = generateColums(allChecked, onAllChecked, openModal, openModal);

	const dummyArray = [
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240',
		'https://loremflickr.com/320/240'
	];
	const defaultData: OverviewTableData[] = [
		{
			check: true,
			name: {
				title: 'Progoti mock test - 1',
				subtitle: 'yoyo'
			},
			status: '1',
			questions: 15,
			points: 100,
			duration: '1hr 10min',
			privacy: 'public',
			questionsFetched: 15,
			paymentStatus: 'Paid',
			editors: dummyArray,
			created: new Date(),
			lastModified: new Date(),
			actions: { enabled: true, link: 'www.google.com', id: '1' }
		},
		{
			check: true,
			name: {
				title: 'Progoti mock test - 1',
				subtitle: 'yoyo'
			},
			status: '1',
			questions: 15,
			points: 100,
			duration: '1hr 10min',
			privacy: 'public',
			questionsFetched: 15,
			paymentStatus: 'Paid',
			editors: dummyArray,
			created: new Date(),
			lastModified: new Date(),
			actions: { enabled: true, link: 'www.google.com', id: '1' }
		}
	];

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				overflow: 'hidden'
			}}
		>
			<HeaderComponent />
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: hideMenu ? 'auto' : '280px auto',
					overflow: 'hidden',
					transition: 'ease-in 0.2s all'
				}}
			>
				<NavbarComponent logo={<ShortLogo />} hideMenu={hideMenu} />

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 0,
						padding: 0,
						width: '100%',
						overflow: 'auto',
						height: 'calc(100vh - 60px)'
					}}
				>
					<ExamsHeaderContainer />

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(1, 1fr)',
							gap: 16,
							padding: 16
						}}
					>
						<ExamsStatsContainer />
						<TableComponent
							headerButtons={headerButtons}
							columns={columns}
							fields={fields}
							setFields={setFields}
							data={defaultData}
							isLoading={false}
							pageInfo={{
								onChange: (page: number) => console.log(page),
								...pageInfo
							}}
							filters={filters}
							filterEvent={filterEvent}
							buttonGroupEvent={buttonGroupEvent}
							datePickerEvent={datePickerEvent}
							searchEvent={searchEvent}
							buttons={[
								{ message: 'All exams', value: 'label1' },
								{ message: 'Published', value: 'label2' },
								{ message: 'Draft', value: 'label3' }
							]}
						/>
					</div>
				</div>
			</div>
			<ConfirmationModalComponent
				color={modalState.isDelete ? 'error' : 'primary'}
				confirmButtonLabel={modalState.isDelete ? 'Delete' : 'Clone'}
				isOpen={modalState.isOpen}
				message={
					modalState.isDelete
						? 'Are you sure you want to delete this? This action cannot be undone.'
						: 'Are you sure you want to clone this exam? Student enrolments and unpublished changes to your exam will not be cloned.'
				}
				onClose={closeModal}
				onConfirm={onConfirm}
				headerIcon={<Icon.DeleteRed />}
				title={modalState.isDelete ? 'Delete this item' : 'Clone exam'}
			/>
		</div>
	);
};

export default ExamsPage;
