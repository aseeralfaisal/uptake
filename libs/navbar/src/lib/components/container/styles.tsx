import { keyframes, styled } from '@stitches/react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';

export const LeftContainer = styled('div', {
	alignItems: 'center',
	backgroundColor: 'var(--color-primary)',
	borderRight: '1px solid var(--color-gray-200)',
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
	height: '100%',
	justifyContent: 'stretch',
	overflowX: 'hidden',
	padding: 12,
	scrollbarWidth: 'none',
	width: '100%',

	'&::-webkit-scrollbar': {
		display: 'none'
	}
});

export const RightContainer = styled('div', {
	alignItems: 'flex-start',
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
	height: '100%',
	justifyContent: 'stretch',
	overflowX: 'hidden',
	padding: 12,
	scrollbarWidth: 'none',
	width: '100%',

	'&::-webkit-scrollbar': {
		display: 'none'
	}
});

export const MenuContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	width: '100%'
});

export const NavItem = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '4px'
});

export const NavItemTitle = styled('h5', {
	color: 'var(--color-gray-400)',
	fontSize: '12px',
	fontWeight: 400,
	lineHeight: '18px'
});
export const MenuTitle = styled('h5', {
	color: 'var(--color-gray-800)',
	fontSize: 16,
	fontWeight: 500,
	lineHeight: '30px',
	margin: '5px 0 0 12px'
});

export const ChildMenu = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	width: '100%'
});

export const ChildMenuItem = styled('span', {
	alignItems: 'center',
	borderRadius: 8,
	color: 'var(--color-gray-700)',
	display: 'grid',
	fontSize: 14,
	fontWeight: 400,
	gridTemplateColumns: '20px auto',
	gap: 12,
	height: 40,
	lineHeight: '20px',
	padding: '0 12px',
	transition: 'all .2s ease-in-out',

	'&:hover': {
		backgroundColor: 'var(--color-gray-100)'
	},

	variants: {
		active: {
			true: {
				backgroundColor: 'var(--color-gray-100)',
				color: 'var(--color-gray-800)'
			}
		}
	}
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
	zIndex: 99,

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

export const CreateBtnContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '4px'
});

export const PopoverTrigger = styled(Popover.Trigger, {
	all: 'unset',
	alignItems: 'center',
	backgroundColor: 'var(--color-transparent)',
	borderColor: 'var(--color-transparent)',
	borderRadius: 'var(--border-radius)',
	borderStyle: 'solid',
	borderWidth: 1,
	boxSizing: 'border-box',
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	display: 'flex',
	padding: '6px 0',
	height: 70,
	justifyContent: 'center',
	outline: 'none',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: 70,

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
		backgroundColor: 'var(--color-gray-100)',
		borderColor: 'var(--color-gray-100)'
	},

	'&[aria-expanded="true"]': {
		backgroundColor: 'var(--color-gray-50)',
		borderColor: 'var(--color-gray-300)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
	},
	variants: {
		plus: {
			true: {
				backgroundColor: 'var(--color-primary-50)',
				height: 48,
				width: 48,
				padding: '12px 0',
				color: 'var(--color-primary-500)'
			}
		}
	}
});

export const PopoverContent = styled(Popover.Content, {
	backgroundColor: 'var(--color-white)',
	border: '1px solid var(--color-gray-50)',
	borderRadius: 8,
	boxShadow: '0 0 64px 12px rgba(16, 24, 40, 0.14)',
	color: 'var(--color-gray-600)',
	display: 'flex',
	flexDirection: 'column',
	fontSize: 14,
	fontWeight: 400,
	gap: 4,
	minWidth: 200,
	padding: 8,
	zIndex: 8,

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

export const QuickAddItem = styled('div', {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderRadius: 8,
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	fontSize: 14,
	gap: 12,
	height: 40,
	lineHeight: '20px',
	padding: '0 12px',

	'&:hover': {
		backgroundColor: 'var(--color-gray-50)'
	}
});

export const Arrow = styled(Popover.Arrow, {
	fill: 'var(--color-white)',
	height: 8,
	width: 16
});
