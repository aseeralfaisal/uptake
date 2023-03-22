import React, { useRef } from 'react';

import { Dialog } from '@headlessui/react';

import { Modal, ModalContent, ModalOverlay, ModalPanel } from './modal.styles';
import type { ModalProps } from './modal.types';

export const ModalComponent: React.FC<ModalProps> = (props: ModalProps) => {
	const completeButtonRef = useRef(null)
	const { content, footer, header, isOpen } = props;

	const prevent = () => {
		return;
	};

	return (
		<Dialog as={Modal} open={isOpen} onClose={prevent} initialFocus={completeButtonRef}>
			<ModalOverlay />

			<ModalPanel>
				<Dialog.Panel>
					<ModalContent ref={completeButtonRef}>
						{header && header}
						{content && content}
						{footer && footer}
					</ModalContent>
				</Dialog.Panel>
			</ModalPanel>
		</Dialog>
	);
};

export default ModalComponent;
