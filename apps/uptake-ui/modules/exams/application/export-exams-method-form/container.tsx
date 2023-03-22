import React, { Fragment } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import Icon from '@uptake-ui-icons';
import { ButtonComponent } from '@uptake-ui-button';
import { ChipComponent } from '@uptake-ui-chip';
import { IconButtonComponent } from '@uptake-ui-icon-button';

import ExportExamsEmailsContainer from '@modules/exams/application/export-exams-emails/container';
import ExportExamsMethodContainer from '@modules/exams/application/export-exams-method/container';

import * as StyledComponents from './styles';
import { useExportExamsStore } from '@modules/exams/stores/export-exams.store';

const ExportExamsMethodFormContainer: React.FC<{ updateStep: (step) => void }> = (props) => {
    const { updateStep } = props;
    const { method } = useExportExamsStore(state => state);

    return (
        <Fragment>
            <StyledComponents.Header>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <StyledComponents.Title>Export exams</StyledComponents.Title>
                    <ChipComponent color='gray' size='sm'>
                        Step 2 of 2
                    </ChipComponent>
                </div>

                <Dialog.Close asChild>
                    <IconButtonComponent color='gray' icon={<Icon.Close />} soft size='sm' />
                </Dialog.Close>
            </StyledComponents.Header>

            <StyledComponents.Container>
                <ExportExamsMethodContainer />
                <ExportExamsEmailsContainer />
            </StyledComponents.Container>

            <StyledComponents.Footer>
                <ButtonComponent color='gray' outlined size='md' onClick={() => updateStep(1)}>
                    Back
                </ButtonComponent>
                <ButtonComponent color='primary' size='md' disabled={!method}>
                    Export
                </ButtonComponent>
            </StyledComponents.Footer>
        </Fragment>
    );
};

export default ExportExamsMethodFormContainer;
