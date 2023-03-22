import { styled } from '@stitches/react';

export const InputContainer = styled('fieldset', {
	display: 'flex',
	flexDirection: 'column',
	gap: 6,
	width: '100%'
});

export const Label = styled('label', {
	color: 'var(--color-gray-700)',
	cursor: 'pointer',
	fontSize: 14,
	fontWeight: 500,
	lineHeight: '24px'
});

export const InputController = styled('div', {
	height: 44,
	position: 'relative',
	width: '100%',
	variants: {
		selectHeight: {
			true: {
				height: '100%'
			}
		}
	}
});

export const StartIcon = styled('div', {
	alignItems: 'center',
	color: 'var(--color-gray-900)',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	position: 'absolute',
	left: 0,
	top: 0,
	width: 40,
	variants: {
		soft: {
			true: {
				color: 'var(--color-gray-500)'
			}
		}
	}
});
export const EndIcon = styled('div', {
	alignItems: 'center',
	color: 'var(--color-gray-900)',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	position: 'absolute',
	right: 0,
	top: 0,
	width: 40,
	variants: {
		soft: {
			true: {
				color: 'var(--color-gray-500)'
			}
		}
	}
});

export const InputError = styled('div', {
	alignItems: 'center',
	color: 'var(--color-error-500)',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	position: 'absolute',
	right: 0,
	top: 0,
	width: 40
});

export const Input = styled('input', {
	alignItems: 'center',
	borderRadius: 'var(--border-radius)',
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	borderColor: 'var(--color-gray-300)',
	color: 'var(--color-gray-900)',
	cursor: 'default',
	display: 'flex',
	fontFamily: 'var(--font-family)',
	fontSize: 14,
	fontWeight: 400,
	gap: 8,
	height: '100%',
	justifyContent: 'center',
	lineHeight: '24px',
	outline: 'none',
	padding: '10px 14px',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: '100%',
	backgroundColor: 'var(--color-white)',
	'&:disabled': {
		backgroundColor: 'var(--color-gray-50)',
		borderColor: 'var(--color-gray-300)',
		color: 'var(--color-gray-500)',
		cursor: 'not-allowed'
	},

	'&:focus': {
		borderColor: 'var(--color-primary-300)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
	},

	'&:placeholder': {
		color: 'var(--color-gray-500)'
	},

	variants: {
		error: {
			true: {
				borderColor: 'var(--color-error-300)',
				paddingRight: 40,

				'&:focus': {
					borderColor: 'var(--color-error-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				}
			}
		},
		startIcon: {
			true: {
				paddingLeft: 40
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
		},
		borderLess: {
			true: {
				border: 'none'
			}
		},
		soft: {
			true: {
				backgroundColor: 'var(--color-gray-100)'
			}
		},
		select: {
			true: {
				backgroundColor: 'var(--color-white)'
			}
		}
	}
});

export const Hint = styled('span', {
	color: 'var(--color-gray-500)',
	cursor: 'default',
	fontSize: 12,
	fontWeight: 400,
	lineHeight: '20px'
});

export const ErrorMessage = styled('span', {
	color: 'var(--color-error-500)',
	cursor: 'default',
	fontSize: 12,
	fontWeight: 500,
	lineHeight: '20px'
});
