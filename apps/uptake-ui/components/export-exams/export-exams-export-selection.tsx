import React, { Fragment, useState } from 'react';

import { RadioGroup } from '@headlessui/react';
import * as Dialog from '@radix-ui/react-dialog';

import { ButtonComponent } from '@uptake-ui-button';
import { ChipComponent } from '@uptake-ui-chip';
import { IconButtonComponent } from '@uptake-ui-icon-button';
import Icon from '@uptake-ui-icons';
import { InputComponent } from '@uptake-ui-input';

import * as StyledComponents from './styles';

const plans = [
    {
        icon: Icon.Email,
        name: 'Share via email'
    },
    {
        icon: Icon.Export,
        name: 'Download'
    }
];

export default function ExportExamsExportSelectionComponent(props) {
    const { changeStep } = props;
    const [selected, setSelected] = useState(null);
    return (
        <>
            <StyledComponents.Header>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <StyledComponents.Title>Export exams</StyledComponents.Title>
                    <ChipComponent color='gray' size='sm'>
                        Step 2 of 2
                    </ChipComponent>
                </div>

                <Dialog.Close asChild>
                    <IconButtonComponent
                        color='gray'
                        icon={<Icon.Close />}
                        onClick={() => changeStep(1)}
                        size='sm'
                        soft
                    />
                </Dialog.Close>
            </StyledComponents.Header>

            <StyledComponents.Container>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 30, width: '100%' }}>
                    <div
                        style={{
                            display: 'inline-block',
                            width: '100%'
                        }}
                    >
                        <RadioGroup value={selected} onChange={setSelected} style={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(1, 1fr)',
                            gap: 16
                        }}>
                            <RadioGroup.Label style={{
                                color: 'var(--color-gray-800)',
                                fontSize: 16,
                                fontWeight: 500,
                                lineHeight: '24px'
                            }}>How do you want to export?</RadioGroup.Label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                                {plans.map((plan) => (
                                    <RadioGroup.Option
                                        key={plan.name}
                                        value={plan}
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <div
                                                    style={{
                                                        border: '1px solid var(--color-gray-200)',
                                                        borderRadius: 8,
                                                        padding: '0 16px',
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(1, 1fr)',
                                                        position: 'relative',
                                                        height: 130,
                                                        cursor: 'pointer',
                                                        boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
                                                        borderColor: checked ? 'var(--color-primary-500)' : 'var(--color-gray-200)',
                                                        transition: 'all .2s ease-in-out'
                                                    }}>
                                                    {checked && (
                                                        <div style={{
                                                            backgroundColor: 'var(--color-primary-600)',
                                                            border: '1px solid var(--color-primary-700)',
                                                            color: 'var(--color-white)',
                                                            width: 20,
                                                            height: 20,
                                                            borderRadius: 10,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            padding: 2,
                                                            position: 'absolute',
                                                            right: 16,
                                                            top: 16
                                                        }}>
                                                            <Icon.Check />
                                                        </div>
                                                    )}
                                                    {!checked && (
                                                        <div style={{
                                                            backgroundColor: 'var(--color-white)',
                                                            border: '1px solid var(--color-gray-200)',
                                                            color: 'var(--color-gray-500)',
                                                            width: 20,
                                                            height: 20,
                                                            borderRadius: 10,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            padding: 2,
                                                            position: 'absolute',
                                                            right: 16,
                                                            top: 16
                                                        }}>
                                                        </div>
                                                    )}
                                                    <div style={{
                                                        width: '100%',
                                                        marginTop: 20,
                                                        textAlign: 'center',
                                                        alignItems: 'center',
                                                        display: 'flex',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: 12,
                                                            alignItems: 'center'
                                                        }}>
                                                            <div style={{
                                                                alignItems: 'center',
                                                                backgroundColor: 'var(--color-primary-100)',
                                                                borderRadius: '100%',
                                                                boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-primary-50)',
                                                                color: 'var(--color-primary-600)',
                                                                display: 'flex',
                                                                height: 48,
                                                                justifyContent: 'center',
                                                                width: 48
                                                            }}>
                                                                {React.createElement(plan.icon)}
                                                            </div>
                                                            <div>
                                                                <RadioGroup.Label as='p' style={{
                                                                    color: 'var(--color-gray-700)',
                                                                    fontSize: 14,
                                                                    fontWeight: 500,
                                                                    lineHeight: '20px'
                                                                }}>{plan.name}</RadioGroup.Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>

                    {selected && selected.name !== 'Download' && <Fragment>
                        <InputComponent hint='This is a hint text to help user.' id='emails'
                                        label='Share this file with one or multiple emails'
                                        placeholder='Enter, comma separated' type='email' />

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                            <ChipComponent closable color='gray' size='lg'>baten.mab@gmail.com</ChipComponent>
                            <ChipComponent closable color='gray' size='lg'>baten.mab@gmail.com</ChipComponent>
                            <ChipComponent closable color='gray' size='lg'>baten.mab@gmail.com</ChipComponent>
                            <ChipComponent closable color='gray' size='lg'>baten.mab@gmail.com</ChipComponent>
                            <ChipComponent closable color='gray' size='lg'>baten.mab@gmail.com</ChipComponent>
                        </div>
                    </Fragment>}
                </div>
            </StyledComponents.Container>

            <StyledComponents.Footer>
                <ButtonComponent color='gray' outlined size='md' onClick={() => changeStep(1)}>
                    Back
                </ButtonComponent>
                <ButtonComponent color='primary' disabled size='md'>
                    Export
                </ButtonComponent>
            </StyledComponents.Footer>
        </>
    );
}
