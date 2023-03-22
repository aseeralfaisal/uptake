import { Fragment } from 'react';

import { ChipComponent } from '@uptake-ui-chip';
import { InputComponent } from '@uptake-ui-input';

const ExportExamsEmailsContainer = () => {
    return (
        <Fragment>
            <InputComponent
                hint='This is a hint text to help user.'
                id='emails'
                label='Share this file with one or multiple emails'
                placeholder='Enter, comma separated'
                type='email'
            />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <ChipComponent closable color='gray' size='lg'>
                    baten.mab@gmail.com
                </ChipComponent>
                <ChipComponent closable color='gray' size='lg'>
                    baten.mab@gmail.com
                </ChipComponent>
                <ChipComponent closable color='gray' size='lg'>
                    baten.mab@gmail.com
                </ChipComponent>
                <ChipComponent closable color='gray' size='lg'>
                    baten.mab@gmail.com
                </ChipComponent>
                <ChipComponent closable color='gray' size='lg'>
                    baten.mab@gmail.com
                </ChipComponent>
            </div>
        </Fragment>
    );
};

export default ExportExamsEmailsContainer;
