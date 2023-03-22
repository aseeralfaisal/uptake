import React, { Fragment } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { ButtonComponent } from '@uptake-ui-button';
import { ChipComponent } from '@uptake-ui-chip';
import { IconButtonComponent } from '@uptake-ui-icon-button';
import Icon from '@uptake-ui-icons';

import ExportExamsExtensionContainer from '@modules/exams/application/export-exams-extension/container';
import ExportExamsFieldsContainer from '@modules/exams/application/export-exams-fields/container';

import { useExportExamsStore } from '@modules/exams/stores/export-exams.store';

import * as StyledComponents from './styles';

const ExportExamsExtensionFormContainer: React.FC<{ updateStep: (step) => void }> = (props) => {
    const { updateStep } = props;

    const { extension } = useExportExamsStore(state => state);

    return (
        <Fragment>
            <StyledComponents.Header>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <StyledComponents.Title>Export exams</StyledComponents.Title>
                    <ChipComponent color='gray' size='sm'>
                        Step 1 of 2
                    </ChipComponent>
                </div>

                <Dialog.Close asChild>
                    <IconButtonComponent color='gray' icon={<Icon.Close />} soft size='sm' />
                </Dialog.Close>
            </StyledComponents.Header>

            <StyledComponents.Container>
                <ExportExamsExtensionContainer />
                <ExportExamsFieldsContainer />
            </StyledComponents.Container>

            <StyledComponents.Footer>
                <Dialog.Close asChild>
                    <ButtonComponent color='gray' outlined size='md'>
                        Cancel
                    </ButtonComponent>
                </Dialog.Close>
                <ButtonComponent color='primary' disabled={!extension} size='md' onClick={() => updateStep(2)}>
                    Continue
                </ButtonComponent>
            </StyledComponents.Footer>
        </Fragment>
    );
};

export default ExportExamsExtensionFormContainer;
