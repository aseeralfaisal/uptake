import { keyframes, styled } from '@stitches/react';

import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';

export const Container = styled('header', {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderBottom: '1px solid var(--color-gray-200)',
	display: 'grid',
	gridTemplateColumns: 'auto 450px auto',
	height: 60,
	justifyContent: 'space-between',
	padding: '0 16px',
	width: '100%'
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

export const TooltipContent = styled(Tooltip.Content, {
	backgroundColor: 'var(--color-gray-900)',
	borderRadius: 8,
	boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
	color: 'var(--color-white)',
	fontSize: 12,
	padding: '8px 12px',
	zIndex: 9,

	'@media (prefers-reduced-motion: no-preference)': {
		animationDuration: '400ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
		willChange: 'transform, opacity',

		'&[data-state="delayed-open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade }
		}
	}
});

export const PopoverTrigger = styled(Popover.Trigger, {
	all: 'unset',
	alignItems: 'center',
	backgroundColor: 'var(--color-gray-100)',
	borderColor: 'var(--color-gray-100)',
	borderRadius: '100%',
	borderStyle: 'solid',
	borderWidth: 1,
	boxSizing: 'border-box',
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	display: 'flex',
	gap: 8,
	height: 40,
	justifyContent: 'center',
	outline: 'none',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: 40,

	'&:disabled': {
		backgroundColor: 'var(--color-gray-25)',
		borderColor: 'var(--color-gray-25)',
		color: 'var(--color-gray-300)',
		cursor: 'not-allowed',

		'&:hover': {
			backgroundColor: 'var(--color-gray-25)',
			borderColor: 'var(--color-gray-25)'
		}
	},

	'&:hover': {
		backgroundColor: 'var(--color-gray-300)',
		borderColor: 'var(--color-gray-300)'
	},

	'&[aria-expanded="true"]': {
		backgroundColor: 'var(--color-primary-100)',
		color: 'var(--color-primary-600)',
		borderColor: 'var(--color-primary-100)'
	}
});

export const PopoverContent = styled(Popover.Content, {
	backgroundColor: 'var(--color-white)',
	border: '1px solid var(--color-gray-50)',
	borderRadius: 8,
	boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
	gap: 12,
	padding: '8px 16px',
	zIndex: 12,
	width: 400,
	height: 416,
	backgroundImage: 'url(/images/days-remaining-vector.svg)',
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'bottom',

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
	fontWeight: 600
});
export const Title = styled('label', {
	color: 'var(--color-gray-700)',
	fontSize: 24,
	fontWeight: 600,
});

export const LeftPanel = styled('div', {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'row',
	gap: 24,
	justifyContent: 'stretch'
});

export const MiddlePanel = styled('div', {
	display: 'block'
});

export const RightPanel = styled('div', {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'row',
	gap: 12,
	justifyContent: 'stretch'
});
