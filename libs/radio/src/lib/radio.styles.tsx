import { styled } from '@stitches/react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export const Grid = styled('div', {
	display: 'grid',
	gap: 12,
	gridTemplateColumns: '20px auto'
});

export const RadioContainer = styled(RadioGroupPrimitive.Root, {});

export const Radio = styled(RadioGroupPrimitive.Item, {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-300)',
	borderRadius: '100%',
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
		},
	}
});

export const RadioIndicator = styled(RadioGroupPrimitive.Indicator, {
	alignItems: 'center',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	position: 'relative',
	width: '100%',

	'&::after': {
		backgroundColor: 'var(--color-primary-600)',
		borderRadius: '50%',
		content: '""',
		display: 'block',
		height: 11,
		width: 11,
	}
});

export const Flex = styled('div', {
	alignItems: 'flex-start',
	display: 'flex',
	flexDirection: 'column'
});

export const Label = styled('label', {
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	fontSize: '16px',
	fontWeight: '500',
	lineHeight: '24px',

	a: {
		textDecoration: 'underline'
	}
});

export const Support = styled('label', {
	color: 'var(--color-gray-500)',
	fontSize: '14px',
	fontWeight: '400',
	lineHeight: '20px'
});
