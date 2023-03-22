import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { ButtonComponent } from '@uptake-ui-button';
import Icon from '@uptake-ui-icons';

import ExportExamsExtensionFormContainer from '@modules/exams/application/export-exams-extension-form/container';
import ExportExamsMethodFormContainer from '@modules/exams/application/export-exams-method-form/container';

import * as StyledComponents from './styles';

const ExportExamsContainer = () => {
	const [step, setStep] = useState<number>(1);

	const updateStep = (step: number) => {
		setStep(step);
	};

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<ButtonComponent color='gray' outlined size='md' startIcon={<Icon.Export />}>
					Export
				</ButtonComponent>
			</Dialog.Trigger>

			<Dialog.Portal>
				<StyledComponents.Overlay />
				<StyledComponents.Content onOpenAutoFocus={(event) => event.preventDefault()}>
					{step === 1 && <ExportExamsExtensionFormContainer updateStep={(step: number) => updateStep(step)} />}
					{step === 2 && <ExportExamsMethodFormContainer updateStep={(step: number) => updateStep(step)} />}
				</StyledComponents.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default ExportExamsContainer;
