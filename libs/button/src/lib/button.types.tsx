import { LinkProps } from 'next/link';
import React from 'react';

export type ButtonBaseProps = {
	color?: 'error' | 'gray' | 'primary' | 'success';
	disabled?: boolean;
  endIcon?: React.ReactNode;
	endIconClassName?: string;
	loading?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	outlined?: boolean;
	plain?: boolean;
	shallow?: boolean;
	size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	soft?: boolean;
	startIcon?: React.ReactNode;
	startIconClassName?: string;
};

export type ButtonProps = ButtonBaseProps &
	(
		| (Omit<JSX.IntrinsicElements['a'], 'href' | 'onClick'> & LinkProps)
		| (Omit<JSX.IntrinsicElements['button'], 'onClick'> & { href?: never })
	);
