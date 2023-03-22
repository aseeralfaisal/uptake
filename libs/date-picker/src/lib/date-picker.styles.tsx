import { keyframes, styled } from '@stitches/react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export const PopoverButton = styled('button', {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-300)',
	borderRadius: 'var(--border-radius)',
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	display: 'flex',
	fontFamily: 'var(--font-family)',
	fontSize: 14,
	fontWeight: 500,
	gap: 8,
	height: 40,
	justifyContent: 'stretch',
	lineHeight: '20px',
	outline: 'none',
	padding: '10px 16px',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: '100%',

	'&:disabled': {
		backgroundColor: 'var(--color-white)',
		borderColor: 'var(--color-gray-200)',
		color: 'var(--color-gray-300)',
		cursor: 'not-allowed',

		'&:hover': {
			backgroundColor: 'var(--color-white)',
			borderColor: 'var(--color-gray-200)'
		}
	},

	'&:hover': {
		backgroundColor: 'var(--color-gray-50)',
		borderColor: 'var(--color-gray-300)'
	},

	'@media (prefers-reduced-motion: no-preference)': {
		'&[data-state="open"]': {
			backgroundColor: 'var(--color-white)',
			borderColor: 'var(--color-gray-300)',
			boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
		}
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

export const PopoverContent = styled(PopoverPrimitive.Content, {
	backgroundColor: 'var(--color-white)',
	border: '1px solid var(--color-gray-100)',
	borderRadius: 8,
	boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
	width: 340,

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

export const DatePickerContainer = styled('div', {
	alignItems: 'flex-start',
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	padding: '20px 24px',
	width: '100%',
    height: 410,
});

export const DatePickerHeader = styled('div', {
	alignItems: 'center',
	color: 'var(--color-gray-700)',
	display: 'flex',
	fontSize: 16,
	fontWeight: 500,
	justifyContent: 'space-between',
	lineHeight: '24px',
	width: '100%'
});

export const DatePickerNavigation = styled('button', {
	all: 'unset',
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-300)',
	borderRadius: 'var(--border-radius)',
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	display: 'flex',
	height: 40,
	justifyContent: 'center',
	transition: 'all .2s ease-in-out',
	width: 40,

	'&:focus': {
		backgroundColor: 'var(--color-white)',
		borderColor: 'var(--color-gray-300)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
	},

	'&:hover': {
		backgroundColor: 'var(--color-gray-50)',
		borderColor: 'var(--color-gray-300)'
	}
});

export const DatePickerDaysContainer = styled('div', {
	alignItems: 'center',
	display: 'grid',
	gap: 2,
	gridTemplateColumns: 'repeat(7, 1fr)',
	height: 40,
	justifyItems: 'center',

	span: {
		alignItems: 'center',
		display: 'flex',
		fontSize: 14,
		fontWeight: 500,
		height: '100%',
		justifyContent: 'center',
		lineHeight: '20px',
		width: 40
	}
});

export const DatePickerDatesContainer = styled('div', {
	display: 'grid',
	gap: 4,
	gridTemplateColumns: 'repeat(1, 1fr)'
});

export const DatePickerCellsContainer = styled('div', {
	alignItems: 'center',
	display: 'grid',
	gap: 2,
	gridTemplateColumns: 'repeat(7, 1fr)',
	height: 40,
	justifyItems: 'center'
});

export const DatePickerCell = styled('button', {
	all: 'unset',
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderRadius: 20,
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	display: 'flex',
	fontSize: 14,
	fontWeight: 400,
	height: 40,
	justifyContent: 'center',
	lineHeight: '20px',
	transition: 'all .2s ease-in-out',
    width: 40,

	'&:hover': {
		backgroundColor: 'var(--color-gray-100)'
	},

	variants: {
		selected: {
			true: {
				backgroundColor: 'var(--color-primary-600)',
				color: 'var(--color-white)',

				'&:hover': {
					backgroundColor: 'var(--color-primary-600)'
				}
			}
		}
	},

	'&:disabled': {
		backgroundColor: 'var(--color-white)',
		color: 'var(--color-gray-500)',
		cursor: 'not-allowed',

		'&:hover': {
			backgroundColor: 'var(--color-white)',
			color: 'var(--color-gray-500)'
		}
	}
});

export const DatePickerFooter = styled('div', {
	alignItems: 'flex-start',
	borderTop: '1px solid var(--color-gray-200)',
	display: 'grid',
	gap: 12,
	gridTemplateColumns: 'repeat(2, 1fr)',
	justifyContent: 'flex-end',
	padding: '16px 24px',
	width: '100%'
});

export const PopoverCloseButton = styled(PopoverPrimitive.Close, {
	alignItems: 'center',
	borderColor: 'none',
	borderWidth: 1,
	borderStyle: 'solid',
	borderRadius: 'var(--border-radius)',
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	cursor: 'pointer',
	display: 'flex',
	fontFamily: 'var(--font-family)',
	fontWeight: 400,
	gap: '8px',
	justifyContent: 'center',
	outline: 'none',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: '100%',
	fontSize: 14,
	height: 40,
	lineHeight: '20px',
	padding: '0 16px',

	'&:disabled': {
		cursor: 'not-allowed'
	},

	variants: {
		color: {
			gray: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',
				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-200)',
					color: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-gray-50)',
					borderColor: 'var(--color-gray-300)'
				}
			},
			primary: {
				backgroundColor: 'var(--color-primary-600)',
				borderColor: 'var(--color-primary-600)',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-primary-200)',
					borderColor: 'var(--color-primary-200)',

					'&:hover': {
						backgroundColor: 'var(--color-primary-200)',
						borderColor: 'var(--color-primary-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-primary-600)',
					borderColor: 'var(--color-primary-600)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-primary-700)',
					borderColor: 'var(--color-primary-700)'
				}
			}
		}
	}
});
