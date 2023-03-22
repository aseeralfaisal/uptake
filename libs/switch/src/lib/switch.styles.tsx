import { styled } from '@stitches/react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export const Grid = styled('div', {
	display: 'grid',
	gap: 12,

	variants: {
		size: {
			sm: {
				gridTemplateColumns: '36px auto'
			},
			md: {
				gridTemplateColumns: '44px auto'
			}
		}
	}
});

export const Switch = styled(SwitchPrimitive.Root, {
	all: 'unset',
	backgroundColor: 'var(--color-gray-100)',
	borderRadius: '9999px',
	position: 'relative',
	transition: 'all .2s ease-in-out',
	WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

	'&:focus': {
		backgroundColor: 'var(--color-gray-100)',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
	},

	'&:hover': {
		backgroundColor: 'var(--color-gray-200)'
	},

	'&[data-state="checked"]': {
		backgroundColor: 'var(--color-primary-600)'
	},

	variants: {
		size: {
			sm: {
				height: 20,
				width: 36
			},
			md: {
				height: 24,
				width: 44
			}
		}
	}
});

export const SwitchThumb = styled(SwitchPrimitive.Thumb, {
	backgroundColor: 'var(--color-white)',
	borderRadius: '9999px',
	boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
	display: 'block',
	transform: 'translateX(2px)',
	transition: 'transform 100ms',
	willChange: 'transform',

	variants: {
		size: {
			sm: {
				height: 16,
				width: 16,

				'&[data-state="checked"]': {
					transform: 'translateX(18px)'
				}
			},
			md: {
				height: 20,
				width: 20,

				'&[data-state="checked"]': {
					transform: 'translateX(22px)'
				}
			}
		}
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
	fontWeight: '500',

	a: {
		textDecoration: 'underline'
	},

	variants: {
		size: {
			sm: {
				fontSize: 14,
				lineHeight: '20px'
			},
			md: {
				fontSize: '16px',
				lineHeight: '24px'
			}
		}
	}
});

export const Support = styled('p', {
	color: 'var(--color-gray-500)',
	fontWeight: '400',

	variants: {
		size: {
			sm: {
				fontSize: 14,
				lineHeight: '20px'
			},
			md: {
				fontSize: 16,
				lineHeight: '24px'
			}
		}
	}
});