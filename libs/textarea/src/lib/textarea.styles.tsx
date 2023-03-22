import { styled } from '@stitches/react';

export const TextareaContainer = styled('fieldset', {
	display: 'flex',
	flexDirection: 'column',
	gap: '6px',
});

export const Label = styled('label', {
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	fontSize: '14px',
	fontWeight: 500,
	lineHeight: '24px'
});

export const Textarea = styled('textarea', {
	alignItems: 'center',
	borderColor: 'none',
	borderRadius: 'var(--border-radius)',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	cursor: 'default',
	display: 'flex',
	fontFamily: 'var(--font-family)',
	fontSize: '16px',
	fontWeight: 400,
	gap: '8px',
	height: 128,
	justifyContent: 'center',
	lineHeight: '24px',
	outline: 'none',
	padding: '10px 14px',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: '100%',
	resize: 'vertical',

	'&:disabled': {
		cursor: 'not-allowed'
	},

	variants: {
		color: {
			primary: {
				borderColor: 'var(--color-gray-300)',
				color: 'var(--color-gray-900)',

				'&:disabled': {
					backgroundColor: 'var(--color-gray-50)',
					borderColor: 'var(--color-gray-300)',
					color: 'var(--color-gray-500)'
				},

				'&:focus': {
					borderColor: 'var(--color-primary-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:placeholder': {
					color: 'var(--color-gray-500)'
				}
			}
		},
		error: {
			true: {
				borderColor: 'var(--color-error-300)',

				'&:focus': {
					borderColor: 'var(--color-error-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				}
			}
		},
		success: {
			true: {
				borderColor: 'var(--color-success-300)',

				'&:focus': {
					borderColor: 'var(--color-success-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				}
			}
		}
	}
});

export const Hint = styled('span', {
	color: 'var(--color-gray-500)',
	cursor: 'default',
	fontSize: '12px',
	fontWeight: 400,
	lineHeight: '20px'
});
