import { styled } from '@stitches/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export const Grid = styled('div', {
	display: 'grid',
	gap: 12,
	gridTemplateColumns: '20px auto'
});

export const Checkbox = styled(CheckboxPrimitive.Root, {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-300)',
	borderRadius: 6,
	borderStyle: 'solid',
	borderWidth: 1,
	display: 'flex',
	height: 20,
	justifyContent: 'center',
	transition: 'all .2s ease-in-out',
	width: 20,

	'&:disabled': {
		backgroundColor: 'var(--color-gray-100)',
		borderColor: 'var(--color-gray-300)',
		color: 'var(--color-gray-300)',

		'&:hover': {
			backgroundColor: 'var(--color-gray-100)',
			borderColor: 'var(--color-gray-300)'
		}
	},

	'&:focus': {
		borderColor: 'var(--color-primary-300)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
	},

	'&:hover': {
		backgroundColor: 'var(--color-primary-50)',
		borderColor: 'var(--color-primary-600)'
	},

	'&[data-state="checked"]': {
		backgroundColor: 'var(--color-primary-50)',
		borderColor: 'var(--color-primary-600)',

		'&:disabled': {
			backgroundColor: 'var(--color-gray-100)',
			borderColor: 'var(--color-gray-300)',
			color: 'var(--color-gray-300)',

			'&:hover': {
				backgroundColor: 'var(--color-gray-100)',
				borderColor: 'var(--color-gray-300)'
			}
		}
	}
});

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
	color: 'var(--color-primary-700)',

	'&[data-disabled]': {
		color: 'var(--color-gray-300)'
	}
});

export const Flex = styled('div', {
	alignItems: 'flex-start',
	display: 'flex',
	flexDirection: 'column',
	variants: {
		rowFlex: {
			true: {
				flexDirection: 'row',
				alignItems: 'center',
				gap: 16
			}
		}
	}
});

export const Label = styled('label', {
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	fontSize: 14,
	fontWeight: 400,
	lineHeight: '24px',

	a: {
		color: 'var(--color-primary-700)',
		textDecoration: 'underline'
	}
});

export const Support = styled('label', {
	color: 'var(--color-gray-500)',
	fontSize: '14px',
	fontWeight: '400',
	lineHeight: '20px',
	variants: {
		soft: {
			true: {
				color: 'var(--color-gray-800)',
				fontSize: '16px',
				lineHeight: '24px'
			}
		}
	}
});
