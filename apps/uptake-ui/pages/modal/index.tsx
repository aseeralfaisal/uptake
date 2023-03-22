import { ButtonComponent } from '@uptake-ui-button';
import { ModalComponent } from '@uptake-ui-modal';
import { useState } from 'react';

export default function ModalPage() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const header = (
		<div>
			<h6
				style={{
					fontSize: '18px',
					lineHeight: '28px',
					fontWeight: 600,
					color: 'var(--color-gray-800)'
				}}
			>
				Import exams
			</h6>
			<p
				style={{
					fontSize: '14px',
					lineHeight: '20px',
					fontWeight: 400,
					color: 'var(--color-gray-600)'
				}}
			>
				Upload and import files to create exams
			</p>
		</div>
	);
	const content = <p>content</p>;
	const footer = (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: 12
			}}
		>
			<ButtonComponent color='gray' outlined size='md' onClick={closeModal}>
				Cancel
			</ButtonComponent>
			<ButtonComponent color='primary' size='md'>
				Save
			</ButtonComponent>
		</div>
	);

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
			<ModalComponent content={content} footer={footer} header={header} isOpen={isOpen} onClose={closeModal} />
		</div>
	);
}
