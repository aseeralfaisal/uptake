import React from 'react';
import { LinkProps } from 'next/link';

export type IconBaseProps = {
    circle?: boolean;
    color?: 'error' | 'gray' | 'primary' | 'success';
    disabled?: boolean;
    icon: JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    outlined?: boolean;
    plain?: boolean;
    shallow?: boolean;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    soft?: boolean;
    titleSide?: 'top' | 'right' | 'bottom' | 'left',
};
export type IconButtonProps = IconBaseProps &
    (
        | (Omit<JSX.IntrinsicElements['a'], 'href' | 'onClick'> & LinkProps)
        | (Omit<JSX.IntrinsicElements['button'], 'onClick'> & { href?: never })
        );
