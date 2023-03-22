import React from 'react';
import Link from 'next/link';

import * as Tooltip from '@radix-ui/react-tooltip';

import AvatarOnlineIcon from './avatar-online.icon';

import type { AvatarProps } from './avatar.types';

import * as StyledComponents from './avatar.styles';

export const AvatarComponent: React.FC<AvatarProps> = (props: AvatarProps) => {
    const { href, online = false, shallow = false, size, src, title = '', titleSide = 'top' } = props;

    const element = (as: 'a' | 'div' = 'div') => (
        <StyledComponents.AvatarContainer as={as} size={size}>
            <StyledComponents.Avatar size={size}>
                <StyledComponents.AvatarImage size={size} src={src} loading='lazy' />
                <StyledComponents.AvatarFallback delayMs={1000}>CT</StyledComponents.AvatarFallback>

                {online && (
                    <StyledComponents.AvatarIcon>
                        <AvatarOnlineIcon />
                    </StyledComponents.AvatarIcon>
                )}
            </StyledComponents.Avatar>
        </StyledComponents.AvatarContainer>
    );

    const avatarElement = href ? (
        <Link href={href} shallow={shallow} passHref>
            {element('a')}
        </Link>
    ) : (
        element('div')
    );

    if (title) {
        return (
            <Tooltip.Provider delayDuration={0}>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>{avatarElement}</Tooltip.Trigger>
                    <StyledComponents.TooltipContent side={titleSide} sideOffset={5}>
                        {title}
                    </StyledComponents.TooltipContent>
                </Tooltip.Root>
            </Tooltip.Provider>
        );
    } else {
        return avatarElement;
    }
};

export default AvatarComponent;
