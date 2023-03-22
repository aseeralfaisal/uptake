import { keyframes, styled } from '@stitches/react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const UploaderContainer = styled('div', {
	display: 'grid',
	gap: 16,
	gridTemplateColumns: 'repeat(1, 1fr)'
});

export const UploaderSection = styled('div', {
	alignItems: 'center',
	borderColor: 'var(--color-gray-200)',
	borderRadius: 12,
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	outline: 'none',
	padding: '16px 24px',
	textAlign: 'center',
	transition: 'all .2s ease-in-out',

	'&:focus': {
		borderColor: 'var(--color-primary-600)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
	},

	'&:hover': {
		borderColor: 'var(--color-primary-700)'
	},

	variants: {
		disabled: {
			true: {
				backgroundColor: 'var(--color-gray-50)',
				cursor: 'no-drop',

				'&:hover': {
					borderColor: 'var(--color-gray-200)'
				}
			}
		}
	}
});

export const UploaderContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 4
});

export const UploaderTitle = styled('h6', {
	fontSize: 14,
	fontWeight: 400,
	lineHeight: '20px',
	color: 'var(--color-gray-600)',

	span: {
		color: 'var(--color-primary-700)',
		fontWeight: 600
	},

	variants: {
		disabled: {
			true: {
				span: {
					color: 'var(--color-gray-300)',
					fontWeight: 600
				}
			}
		}
	}
});

export const UploaderHint = styled('p', {
	fontSize: 12,
	fontWeight: 400,
	lineHeight: '18px',
	color: 'var(--color-gray-600)'
});

export const UploaderFiles = styled('div', {
	display: 'grid',
	gap: 12,
	gridTemplateColumns: 'repeat(1, 1fr)'
});

export const UploaderFile = styled('div', {
	borderColor: 'var(--color-gray-200)',
	borderRadius: 12,
	borderStyle: 'solid',
	borderWidth: 1,
	display: 'grid',
	gap: 14,
	gridTemplateColumns: '40px auto',
	padding: 16,

	variants: {
		error: {
			true: {
				borderColor: 'var(--color-error-200)',
				backgroundColor: 'var(--color-error-25)',
			}
		}
	}
});

export const UploaderFileDetails = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	padding: 0
});

export const UploaderFileContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	padding: 0,
	width: '100%'
});

export const UploaderFileDescription = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	gap: 16,
	padding: 0
});

export const UploaderFileTitle = styled('h6', {
	color: 'var(--color-gray-700)',
	fontSize: 14,
	fontWeight: 500,
	lineHeight: '20px',
	wordBreak: 'break-word',
});

export const UploaderFileSize = styled('p', {
	color: 'var(--color-gray-600)',
	fontSize: 14,
	fontWeight: 400,
	lineHeight: '20px'
});

export const UploaderTooltipTrigger = styled(TooltipPrimitive.Trigger, {
	all: 'unset',
	alignItems: 'center',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
	borderRadius: 8,
	boxShadow: 'none',
	color: 'var(--color-gray-500)',
	cursor: 'pointer',
	display: 'flex',
	height: 30,
	justifyContent: 'center',
	transition: 'all .2s ease-in-out',
	width: 30,

	'&:focus': {
		backgroundColor: 'var(--color-white)',
		borderColor: 'var(--color-white)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
	},

	'&:hover': {
		borderColor: 'var(--color-white)',
		backgroundColor: 'var(--color-gray-50)'
	}
});

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

export const UploaderTooltip = styled(TooltipPrimitive.Content, {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderRadius: 8,
	boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
	color: 'var(--color-gray-700)',
	display: 'flex',
	fontSize: 12,
	fontWeight: 500,
	height: 34,
	lineHeight: '18px',
	padding: '0 12px',
	userSelect: 'none',

	'@media (prefers-reduced-motion: no-preference)': {
		animationDuration: '150ms',
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

export const UploaderTooltipArrow = styled(TooltipPrimitive.Arrow, {
	fill: 'var(--color-white)'
});
