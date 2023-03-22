import { LinkProps } from 'next/link';
import React from 'react';

export type ButtonIconBaseProps = {
	color?: 'apple' | 'facebook' | 'dribble' | 'twitter' | 'google' | 'figma';
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	outlined?: boolean;
	plain?: boolean;
	shallow?: boolean;
	buttonText?: string;
	soft?: boolean;
	StartIcon?: JSX.Element | undefined;
	startIconClass?: boolean;
	socialIcon?: 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribble' | 'google';
};

export type SocialButtonProps = ButtonIconBaseProps &
	(
		| (Omit<JSX.IntrinsicElements['a'], 'href' | 'onClick'> & LinkProps)
		| (Omit<JSX.IntrinsicElements['button'], 'onClick'> & { href?: never })
	);
