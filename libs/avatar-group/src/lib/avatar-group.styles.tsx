import { styled } from '@stitches/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const AvatarGroupContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',
	gap: 8
});

export const AvatarContainer = styled('div', {
	alignItems: 'center',
	borderRadius: 200,
	color: 'var(--color-primary-600)',
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	position: 'relative',
	transition: 'all .2s ease-in-out',

	variants: {
		size: {
			xs: {
				height: 24
			},
			sm: {
				height: 32
			},
			md: {
				height: 40
			}
		}
	}
});

export const Avatar = styled(AvatarPrimitive.Root, {
	alignItems: 'center',
	backgroundColor: 'var(--color-primary-50)',
	border: '1.5px solid var(--color-white)',
	borderRadius: '100%',
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	display: 'inline-flex',
	justifyContent: 'center',
	overflow: 'hidden',
	userSelect: 'none',
	verticalAlign: 'middle',

	variants: {
		size: {
			xs: {
				height: 24,
				margin: '0 -4px',
				width: 24
			},
			sm: {
				height: 32,
				margin: '0 -6px',
				width: 32
			},
			md: {
				height: 40,
				margin: '0 -8px',
				width: 40
			}
		}
	}
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
	backgroundColor: 'var(--color-primary-50)',
	borderRadius: 'inherit',
	height: '100%',
	objectFit: 'cover',

	variants: {
		size: {
			xs: {
				height: 24,
				width: 24
			},
			sm: {
				height: 32,
				width: 32
			},
			md: {
				height: 40,
				width: 40
			}
		}
	}
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
	alignItems: 'center',
	backgroundColor: 'var(--color-primary-50)',
	color: 'var(--color-gray-700)',
	display: 'flex',
	fontSize: 14,
	fontWeight: 500,
	height: '100%',
	justifyContent: 'center',
	lineHeight: 1,
	width: '100%',

	variants: {
		color: {
			gray: {
				backgroundColor: 'var(--color-gray-50)',
				color: 'var(--color-gray-600)'
			},
			primary: {
				backgroundColor: 'var(--color-primary-50)',
				color: 'var(--color-primary-600)'
			}
		}
	}
});

export const RemainingAvatar = styled('div', {
	alignItems: 'center',
	border: '1px solid var(--color-white)',
	borderRadius: 200,
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 1.5px var(--color-white)',
	cursor: 'pointer',
	display: 'flex',
	flexGrow: 0,
	fontWeight: 500,
	justifyContent: 'center',
	transition: 'all .2s ease-in-out',

	variants: {
		color: {
			gray: {
				backgroundColor: 'var(--color-gray-50)',
				color: 'var(--color-gray-700)'
			},
			primary: {
				backgroundColor: 'var(--color-primary-50)',
				color: 'var(--color-primary-700)'
			}
		},
		size: {
			xs: {
				fontSize: 12,
				height: 24,
				lineHeight: '18px',
				width: 24
			},
			sm: {
				fontSize: 14,
				height: 32,
				lineHeight: '20px',
				width: 32
			},
			md: {
				fontSize: 16,
				height: 40,
				lineHeight: '24px',
				width: 40
			}
		}
	}
});

export const AddIcon = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	border: '1px dashed var(--color-gray-300)',
	borderRadius: '100%',
	cursor: 'pointer',

	variants: {
		size: {
			xs: {
				height: 24,
				width: 24
			},
			sm: {
				height: 32,
				width: 32
			},
			md: {
				height: 40,
				width: 40
			}
		}
	}
});
