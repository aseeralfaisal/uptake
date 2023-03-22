import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { ButtonComponent } from '@uptake-ui-button';
import Icon from '@uptake-ui-icons';

import ExportExamsExportSelectionComponent from '@components/export-exams/export-exams-export-selection';
import ExportExamsFileSelectionComponent from '@components/export-exams/export-exams-file-selection';

import * as StyledComponents from './styles';

export default function ExportExams() {
    const [step, setStep] = useState(1);

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
                    {step === 1 && <ExportExamsFileSelectionComponent changeStep={(step: number) => setStep(step)} />}
                    {step === 2 && <ExportExamsExportSelectionComponent changeStep={(step: number) => setStep(step)} />}
                </StyledComponents.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
