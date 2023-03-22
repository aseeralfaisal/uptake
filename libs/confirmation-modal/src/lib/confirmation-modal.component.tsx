import React, { Fragment, useRef } from 'react';

import { Dialog } from '@headlessui/react';

import Icon from '@uptake-ui-icons';
import { ButtonComponent } from '@uptake-ui-button';
import { IconBubble } from '@uptake-ui-icon-bubble';

import type { ConfirmationModalProps } from './confirmation-modal.types';

import * as StyledComponents from './confirmation-modal.styles';

export const ConfirmationModalComponent: React.FC<ConfirmationModalProps> = (props: ConfirmationModalProps) => {
	const completeButtonRef = useRef(null);
	const { isOpen, message, onClose, onConfirm, title, confirmButtonLabel = 'Confirm', color = 'error' } = props;

	const prevent = () => {
		return;
	};

	return (
		<Dialog as={StyledComponents.ConfirmationModal} open={isOpen} onClose={prevent} initialFocus={completeButtonRef}>
			<StyledComponents.ConfirmationModalOverlay />

			<StyledComponents.ConfirmationModalPanel>
				<Dialog.Panel>
					<div ref={completeButtonRef}>
						<StyledComponents.ConfirmationModalHeader>
							<Fragment>
								<IconBubble color={color}>{props.headerIcon}</IconBubble>
								<StyledComponents.ConfirmationModalClose onClick={onClose}>
									<Icon.CloseLight />
								</StyledComponents.ConfirmationModalClose>
							</Fragment>
						</StyledComponents.ConfirmationModalHeader>

						<StyledComponents.ConfirmationModalDetails>
							<StyledComponents.ConfirmationModalTitle>{title}</StyledComponents.ConfirmationModalTitle>
							<StyledComponents.ConfirmationModalMessage>{message}</StyledComponents.ConfirmationModalMessage>
						</StyledComponents.ConfirmationModalDetails>

						<StyledComponents.ConformationModalFooter>
							<ButtonComponent color='gray' onClick={onClose} outlined size='lg'>
								Cancel
							</ButtonComponent>
							<ButtonComponent color={color} onClick={onConfirm} size='lg'>
								{confirmButtonLabel}
							</ButtonComponent>
						</StyledComponents.ConformationModalFooter>
					</div>
				</Dialog.Panel>
			</StyledComponents.ConfirmationModalPanel>
		</Dialog>
	);
};

export default ConfirmationModalComponent;
