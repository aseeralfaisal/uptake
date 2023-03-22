import { styled } from '@stitches/react';

export const AvatarLabelContainer = styled('div', {
	alignItems: 'center',
	display: 'grid',
	placeContent: 'stretch',

	variants: {
		size: {
			sm: {
				gap: 10,
				gridTemplateColumns: '32px auto',
			},
			md: {
				gap: 12,
				gridTemplateColumns: '40px auto',
			},
			lg: {
				gap: 12,
				gridTemplateColumns: '48px auto',
			},
			xl: {
				gap: 16,
				gridTemplateColumns: '56px auto',
			}
		}
	}
});

export const AvatarContainer = styled('div', {
	alignItems: 'center',
	backgroundColor: 'var(--color-primary-50)',
	borderRadius: 200,
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	position: 'relative',
	transition: 'all .2s ease-in-out',

	'&:hover': {
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
	},

	variants: {
		size: {
			sm: {
				height: 32,
				width: 32,
				padding: 5
			},
			md: {
				height: 40,
				width: 40
			},
			lg: {
				height: 48,
				width: 48
			},
			xl: {
				height: 56,
				width: 56
			},
		}
	}
});

export const AvatarImage = styled('img', {
	borderRadius: '100%',
	objectFit: 'cover',
	height: '100%',
	width: '100%'
});

export const AvatarIcon = styled('div', {
	alignItems: 'center',
	bottom: 0,
	display: 'flex',
	justifyContent: 'center',
	position: 'absolute',
	right: 0
});

export const AvatarContent = styled('div', {
	display: 'flex',
	flexDirection: 'column'
});

export const Email = styled('p', {
	color: 'var(--color-gray-500)',
	fontWeight: 400,

	variants: {
		size: {
			sm: {
				fontSize: 12,
				lineHeight: '18px'
			},
			md: {
				fontSize: 14,
				lineHeight: '20px'
			},
			lg: {
				fontSize: 16,
				lineHeight: '24px'
			},
			xl: {
				fontSize: 16,
				lineHeight: '24px'
			}
		}
	}
});

export const Name = styled('h6', {
	color: 'var(--color-gray-700)',
	fontWeight: 500,

	variants: {
		size: {
			sm: {
				fontSize: 14,
				lineHeight: '20px'
			},
			md: {
				fontSize: 14,
				lineHeight: '20px'
			},
			lg: {
				fontSize: 16,
				lineHeight: '24px'
			},
			xl: {
				fontSize: 18,
				lineHeight: '28px'
			}
		}
	}
});
