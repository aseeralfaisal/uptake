import { styled } from '@stitches/react';
import * as ButtonGroupPrimitive from '@radix-ui/react-toggle-group';

export const ButtonGroup = styled(ButtonGroupPrimitive.Root, {
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-300)',
	borderRadius: 8,
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0 2px 10px var(--color-white)',
	display: 'inline-flex',
	height: 44,
	justifyContent: 'space-evenly',
    width: '100%'
});

export const ButtonGroupIndicatorText = styled(ButtonGroupPrimitive.Item, {
    all: 'unset',
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderRightColor: 'var(--color-gray-300)',
	borderRightStyle: 'solid',
	borderRightWidth: 1,
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	color: 'var(--color-gray-500)',
	cursor: 'pointer',
	display: 'flex',
	fontSize: 14,
	fontWeight: 500,
	gap: 8,
	height: '100%',
	justifyContent: 'center',
	lineHeight: '20px',
	padding: '0 16px',
	transition: 'all .2s ease-in-out',
	width: '100%',

	'&:first-child': {
		borderTopLeftRadius: 'inherit',
		borderBottomLeftRadius: 'inherit'
	},

	'&:last-child': {
		borderTopRightRadius: 'inherit',
		borderBottomRightRadius: 'inherit',
		borderRightWidth: 0
	},

	'&:hover': { backgroundColor: 'var(--color-gray-50)' },

	'&[data-state=on]': { backgroundColor: 'var(--color-gray-100)', color: 'var(--color-gray-800)' },

	'&[data-disabled]': {
		backgroundColor: 'var(--color-gray-25)',
		borderColor: 'var(--color-gray-200)',
		color: 'var(--color-gray-300)',
		cursor: 'not-allowed'
	}
});
