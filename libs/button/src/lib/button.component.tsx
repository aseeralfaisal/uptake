import Link from 'next/link';
import React, { Fragment, Ref, forwardRef } from 'react';

import type { ButtonProps } from './button.types';
import { LoadingIcon, StyledButton } from './button.styles';

export const ButtonComponent = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
    (props: ButtonProps, forwardedRef: Ref<HTMLAnchorElement | HTMLButtonElement>) => {
        const {
            color = 'primary',
            endIcon,
            loading = false,
            outlined = false,
            plain = false,
            shallow,
            size = 'md',
            soft = false,
            startIcon,
        } = props;

        const disabled = props.disabled || loading;

        const element = (
            <Fragment>
                {loading && (
                    <LoadingIcon xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle style={{ opacity: 0.3 }} cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='3' />
                        <path
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        />
                    </LoadingIcon>
                )}

                {startIcon && !loading && startIcon}

                {props.children}

                {endIcon && endIcon}
            </Fragment>
        );

        return props.href ? (
            <Link passHref href={props.href} shallow={shallow}>
                <StyledButton
                    as='a'
                    color={color}
                    css={{ pointerEvents: disabled ? 'none' : 'all' }}
                    outlined={outlined}
                    plain={plain}
                    ref={forwardedRef as Ref<HTMLAnchorElement>}
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
                    {element}
                </StyledButton>
            </Link>
        ) : (
            <StyledButton
                as='button'
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
                {element}
            </StyledButton>
        );
    }
);

export default ButtonComponent;
