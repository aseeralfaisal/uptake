import { useState } from 'react';

import { ButtonComponent } from '@uptake-ui-button';
import { ConfirmationModalComponent } from '@uptake-ui-confirmation-modal';

export default function ModalPage() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const deleteExam = () => {
		alert('deleted');
		setIsOpen(false);
	};

	return (
		<div
			style={{
				width: '1080px',
				margin: '50px auto'
			}}
		>
			<ButtonComponent color='primary' size='sm' soft onClick={openModal}>
				Open modal
			</ButtonComponent>
			<ConfirmationModalComponent
				isOpen={isOpen}
				message='Are you sure you want to delete this exam? This action cannot be undone.'
				onClose={closeModal}
				onConfirm={deleteExam}
				title='Delete exam'
				confirmButtonLabel='Delete'
			/>
		</div>
	);
}
