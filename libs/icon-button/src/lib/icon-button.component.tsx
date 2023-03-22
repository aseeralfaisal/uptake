import Link from 'next/link';
import React, { Ref, forwardRef } from 'react';

import * as Tooltip from '@radix-ui/react-tooltip';

import type { IconButtonProps } from './icon-button.types';

import * as StyledComponents from './icon-button.styles';

export const IconButtonComponent = forwardRef<HTMLAnchorElement | HTMLButtonElement, IconButtonProps>(
    (props: IconButtonProps, forwardedRef: Ref<HTMLAnchorElement | HTMLButtonElement>) => {
        const {
            circle = false,
            color = 'primary',
            href,
            icon,
            outlined = false,
            plain = false,
            shallow,
            titleSide = 'top',
            size = 'lg',
            soft = false,
            title
        } = props;

        const disabled = props.disabled;

        let element = (
            <StyledComponents.Button
                as='button'
                circle={circle}
                color={color}
                disabled={disabled}
                outlined={outlined}
                plain={plain}
                ref={forwardedRef as Ref<HTMLButtonElement>}
                soft={soft}
                onClick={
                    disabled
                        ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                            e.preventDefault();
                        }
                        : props.onClick
                }
                size={size}
            >
                {icon}
            </StyledComponents.Button>
        );

        if (href) {
            element = (
                <Link passHref href={href} shallow={shallow}>
                    <StyledComponents.Button
                        as='a'
                        circle={circle}
                        color={color}
                        css={{ pointerEvents: disabled ? 'none' : 'all' }}
                        outlined={outlined}
                        plain={plain}
                        size={size}
                        soft={soft}
                        onClick={
                            disabled
                                ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                                    e.preventDefault();
                                }
                                : props.onClick
                        }
                    >
                        {icon}
                    </StyledComponents.Button>
                </Link>
            );
        }

        if (title) {
            return (
                <Tooltip.Provider delayDuration={0}>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>{element}</Tooltip.Trigger>
                        <StyledComponents.TooltipContent side={titleSide} sideOffset={5}>
                            {title}
                        </StyledComponents.TooltipContent>
                    </Tooltip.Root>
                </Tooltip.Provider>
            );
        } else {
            return element;
        }
    }
);

export default IconButtonComponent;
