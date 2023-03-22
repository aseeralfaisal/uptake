import { keyframes, styled } from '@stitches/react';

export const TimePickerContainer = styled('div', {
	position: 'relative'
});

export const TimePickerTrigger = styled('button', {
	all: 'unset',
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-300)',
	borderRadius: 8,
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	boxSizing: 'border-box',
	color: 'var(--color-gray-900)',
	display: 'grid',
	fontSize: 14,
	fontWeight: '400',
	gap: 10,
	gridTemplateColumns: 'auto 20px',
	height: 44,
	justifyContent: 'space-between',
	lineHeight: '20px',
	padding: '0 14px',
	textAlign: 'left',
	transition: 'all .2s ease-in-out',
	width: '100%',

	'&:focus': {
		borderColor: 'var(--color-primary-600)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
	}
});

export const TimePickerPlaceholder = styled('p', {
	color: 'var(--color-gray-500)',
	fontSize: 14,
	fontWeight: '400',
	lineHeight: '20px'
});

const scaleIn = keyframes({
	from: { transform: 'rotateX(-20deg) scale(0.95)', opacity: 0 },
	to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 }
});

export const TimePickerOptions = styled('div', {
	animation: `${scaleIn} 50ms ease-in`,
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-300)',
	borderRadius: 8,
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
	color: 'var(--color-gray-500)',
	maxHeight: 200,
	minHeight: 100,
	overflow: 'auto',
	padding: 0,
	position: 'absolute',
	top: 'calc(100% + 6px)',
	width: '100%',
	zIndex: 1,
	transition: 'transform 200ms cubic-bezier(0.24, 0.22, 0.015, 1.56) 0s, opacity 100ms ease-in-out 0s'
});

export const TimePickerOption = styled('div', {
	alignItems: 'center',
	color: 'var(--color-gray-900)',
	cursor: 'pointer',
	display: 'grid',
	fontSize: 14,
	fontWeight: '400',
	gap: 10,
	gridTemplateColumns: 'auto 25px',
	justifyContent: 'space-between',
	lineHeight: '20px',
	minHeight: 44,
	padding: '0 14px',

	'&:hover': {
		backgroundColor: 'var(--color-gray-100)'
	},

	variants: {
		selected: {
			true: {
				backgroundColor: 'var(--color-gray-50)'
			}
		}
	}
});
