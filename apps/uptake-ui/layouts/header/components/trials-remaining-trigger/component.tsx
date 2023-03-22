import React from 'react';

import * as Popover from '@radix-ui/react-popover';

import { ButtonComponent } from '@uptake-ui-button';

import type { TrialsTriggerProps } from './types';

import * as Styled from './styles';

const TrialsRemainingTrigger: React.FC<TrialsTriggerProps> = (props: TrialsTriggerProps) => {
    const { day } = props;

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Styled.Container>
                    <Styled.DaysTitle>Trials: {day} days left</Styled.DaysTitle>
                </Styled.Container>
            </Popover.Trigger>

            <Styled.PopoverContent
                align='end'
                avoidCollisions
                hideWhenDetached
                onOpenAutoFocus={(event) => event.preventDefault()}
                side='bottom'
                sideOffset={8}
            >
                <Styled.Header>
                    <Styled.TitleContainer>
                        <Styled.SuccessTitle>Your are enjoying Free plan.</Styled.SuccessTitle>
                        <Styled.Title>05 Days Remaining</Styled.Title>
                        <Styled.ContentTitle>
                            Gastropub chillwave lumbersexual umami lyft. Poke austin direct trade, marfa raclette.
                        </Styled.ContentTitle>
                    </Styled.TitleContainer>
                </Styled.Header>

                <Styled.Footer>
                    <ButtonComponent color='primary' size='sm'>
                        Upgrade to pro
                    </ButtonComponent>
                </Styled.Footer>
            </Styled.PopoverContent>
        </Popover.Root>
    );
};

export default TrialsRemainingTrigger;
