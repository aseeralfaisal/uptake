import * as Popover from '@radix-ui/react-popover';

import { keyframes, styled } from '@stitches/react';

export const Container = styled('div', {
	alignItems: 'center',
    backgroundImage: 'url(/images/trials-remaining-trigger-background.svg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: 24,
    cursor: 'pointer',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    padding: '0 16px',
    position: 'relative',
});

export const DaysTitle = styled('h2', {
	color: 'var(--color-white)',
	fontSize: 14,
    fontWeight: 500,
	lineHeight: '20px',
});

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(10px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-10px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-10px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(10px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

export const PopoverContent = styled(Popover.Content, {
	backgroundAttachment: 'fixed',
	backgroundColor: 'var(--color-white)',
	backgroundImage: 'url(/images/days-remaining-vector.svg)',
	backgroundPosition: 'bottom',
	backgroundRepeat: 'no-repeat',
	borderRadius: 8,
	boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
	gap: 12,
	height: 416,
	padding: '8px 16px',
	width: 400,
	zIndex: 12,

	'@media (prefers-reduced-motion: no-preference)': {
		animationDuration: '400ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
		willChange: 'transform, opacity',

		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade }
		}
	}
});

export const Footer = styled('div', {
	display: 'flex',
	justifyContent: 'flex-end',
	position: 'absolute',
	top: 364,
	left: 254
});

export const ContentTitle = styled('div', {
	fontWeight: 400,
	fontSize: 14,
	textAlign: 'center',
	width: 344,
	height: 40,
	color: 'var(--color-gray-700)',
});

export const Header = styled('div', {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	position: 'absolute',
	width: 344,
	height: 112,
	left: 28,
	top: 56.44
});

export const TitleContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 16
});

export const SuccessTitle = styled('label', {
	color: 'var(--color-success-500)',
	fontSize: 14,
	fontWeight: 600,
	lineHeight: '20px'
});
export const Title = styled('label', {
	color: 'var(--color-gray-700)',
	fontSize: 24,
	fontWeight: 600,
	lineHeight: '32px'
});
