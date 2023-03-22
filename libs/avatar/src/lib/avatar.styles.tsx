import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { keyframes, styled } from '@stitches/react';

export const AvatarContainer = styled('div', {
	alignItems: 'center',
	backgroundColor: 'var(--color-primary-50)',
	borderRadius: '100%',
	color: 'var(--color-primary-600)',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	position: 'relative',
	transition: 'all .2s ease-in-out',

	'&:hover': {
		borderRadius: '100%',
		boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
	},

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
			},
			lg: {
				height: 48,
				width: 48
			},
			xl: {
				height: 56,
				width: 56
			},
			xxl: {
				height: 64,
				width: 64
			}
		}
	}
});

export const Avatar = styled(AvatarPrimitive.Root, {
    alignItems: 'center',
    backgroundColor: 'var(--color-primary-50)',
    border: '1px solid var(--color-primary-100)',
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
                width: 24
            },
            sm: {
                height: 32,
                width: 32
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
            xxl: {
                height: 64,
                width: 64
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
            },
            lg: {
                height: 48,
                width: 48
            },
            xl: {
                height: 56,
                width: 56
            },
            xxl: {
                height: 64,
                width: 64
            }
        }
    }
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
    alignItems: 'center',
    backgroundColor: 'var(--color-primary-50)',
    color: 'var(--color-primary-700)',
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

export const AvatarIcon = styled('div', {
	alignItems: 'center',
	bottom: 0,
	display: 'flex',
	justifyContent: 'center',
	position: 'absolute',
	right: 0,
});

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-10px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(10px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

export const TooltipContent = styled(Tooltip.Content, {
    backgroundColor: 'var(--color-gray-900)',
    borderRadius: 8,
    boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    color: 'var(--color-white)',
    fontSize: 12,
    padding: '8px 12px',
    zIndex: 15,

    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',

        '&[data-state="delayed-open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade }
        }
    }
});
