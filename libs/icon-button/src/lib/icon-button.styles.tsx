import { keyframes, styled } from '@stitches/react';
import * as Tooltip from '@radix-ui/react-tooltip';

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

export const Button = styled('div', {
	alignItems: 'center',
	borderColor: 'none',
	borderRadius: 'var(--border-radius)',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	cursor: 'pointer',
	display: 'flex',
	gap: 8,
	justifyContent: 'center',
	outline: 'none',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: 'auto',

	'&:disabled': {
		cursor: 'not-allowed'
	},

	variants: {
        circle: { true: { borderRadius: '100%' } },
		color: {
			error: {
				backgroundColor: 'var(--color-error-600)',
				borderColor: 'var(--color-error-600)',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-error-200)',
					borderColor: 'var(--color-error-200)',

					'&:hover': {
						backgroundColor: 'var(--color-error-200)',
						borderColor: 'var(--color-error-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-error-600)',
					borderColor: 'var(--color-error-600)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-error-700)',
					borderColor: 'var(--color-error-700)'
				}
			},
			gray: {
				backgroundColor: 'var(--color-gray-600)',
				borderColor: 'var(--color-gray-600)',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-gray-200)',
					borderColor: 'var(--color-gray-200)',

					'&:hover': {
						backgroundColor: 'var(--color-gray-200)',
						borderColor: 'var(--color-gray-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-gray-600)',
					borderColor: 'var(--color-gray-600)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-gray-700)',
					borderColor: 'var(--color-gray-700)'
				}
			},
			primary: {
				backgroundColor: 'var(--color-primary-600)',
				borderColor: 'var(--color-primary-600)',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-primary-200)',
					borderColor: 'var(--color-primary-200)',

					'&:hover': {
						backgroundColor: 'var(--color-primary-200)',
						borderColor: 'var(--color-primary-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-primary-600)',
					borderColor: 'var(--color-primary-600)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-primary-700)',
					borderColor: 'var(--color-primary-700)'
				}
			},
			success: {
				backgroundColor: 'var(--color-success-600)',
				borderColor: 'var(--color-success-600)',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-success-200)',
					borderColor: 'var(--color-success-200)',

					'&:hover': {
						backgroundColor: 'var(--color-success-200)',
						borderColor: 'var(--color-success-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-success-600)',
					borderColor: 'var(--color-success-600)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-success-700)',
					borderColor: 'var(--color-success-700)'
				}
			}
		},
		outlined: { true: {} },
		plain: { true: {} },
		size: {
            xs: {
                width: 30,
                height: 30,
                padding: 6
            },
			sm: {
				width: 36,
				height: 36,
				padding: 8
			},
			md: {
				width: 40,
				height: 40,
				padding: 8
			},
			lg: {
				width: 44,
				height: 44,
			},
			xl: {
				width: 48,
				height: 48,
				padding: 14
			},
			xxl: {
				width: 56,
				height: 56,
				padding: 16
			}
		},
		soft: {
			true: {
				boxShadow: 'none'
			}
		}
	},

	compoundVariants: [
		{
			color: 'error',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-error-300)',
				color: 'var(--color-error-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-error-200)',
					color: 'var(--color-error-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-error-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-error-50)'
				}
			}
		},
		{
			color: 'error',
			plain: true,
			css: {
				boxShadow: 'none',
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-white)',
				color: 'var(--color-error-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-error-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				},

				'&:hover': {
					borderColor: 'var(--color-white)',
					backgroundColor: 'var(--color-error-50)'
				}
			}
		},
		{
			color: 'error',
			soft: true,
			css: {
				backgroundColor: 'var(--color-error-50)',
				borderColor: 'var(--color-error-50)',
				color: 'var(--color-error-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-error-25)',
					borderColor: 'var(--color-error-25)',
					color: 'var(--color-error-300)',

					'&:hover': {
						backgroundColor: 'var(--color-error-25)',
						borderColor: 'var(--color-error-25)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-error-50)',
					borderColor: 'var(--color-error-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-error-100)',
					borderColor: 'var(--color-error-100)'
				}
			}
		},
		{
			color: 'gray',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-gray-300)',
				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-gray-200)',
					color: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-gray-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-gray-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-gray-50)',
					borderColor: 'var(--color-gray-300)'
				}
			}
		},
		{
			color: 'gray',
			plain: true,
			css: {
				boxShadow: 'none',
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-transparent)',
				color: 'var(--color-gray-600)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-gray-200)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					borderColor: 'var(--color-gray-50)',
					backgroundColor: 'var(--color-gray-50)'
				}
			}
		},
		{
			color: 'gray',
			soft: true,
			css: {
				backgroundColor: 'var(--color-gray-100)',
				borderColor: 'var(--color-gray-100)',
				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-gray-25)',
					borderColor: 'var(--color-gray-25)',
					color: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-gray-25)',
						borderColor: 'var(--color-gray-25)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-gray-100)',
					borderColor: 'var(--color-gray-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)',

                    '&:hover': {
                        backgroundColor: 'var(--color-gray-100)',
                        borderColor: 'var(--color-gray-300)',
                    }
				},

				'&:hover': {
					backgroundColor: 'var(--color-gray-200)',
					borderColor: 'var(--color-gray-200)'
				}
			}
		},
		{
			color: 'primary',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-primary-300)',
				color: 'var(--color-primary-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-primary-200)',
					color: 'var(--color-primary-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-primary-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-primary-50)'
				}
			}
		},
		{
			color: 'primary',
			plain: true,
			css: {
				boxShadow: 'none',
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-white)',
				color: 'var(--color-primary-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-primary-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:hover': {
					borderColor: 'var(--color-white)',
					backgroundColor: 'var(--color-primary-50)'
				}
			}
		},
		{
			color: 'primary',
			soft: true,
			css: {
				backgroundColor: 'var(--color-primary-50)',
				borderColor: 'var(--color-primary-50)',
				color: 'var(--color-primary-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-primary-25)',
					borderColor: 'var(--color-primary-25)',
					color: 'var(--color-primary-300)',

					'&:hover': {
						backgroundColor: 'var(--color-primary-25)',
						borderColor: 'var(--color-primary-25)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-primary-50)',
					borderColor: 'var(--color-primary-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-primary-100)',
					borderColor: 'var(--color-primary-100)'
				}
			}
		},
		{
			color: 'success',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-success-300)',
				color: 'var(--color-success-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-success-200)',
					color: 'var(--color-success-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-success-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-success-50)'
				}
			}
		},
		{
			color: 'success',
			plain: true,
			css: {
				boxShadow: 'none',
				backgroundColor: 'var(--color-transparent)',
				borderColor: 'var(--color-white)',
				color: 'var(--color-success-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-success-300)',

					'&:hover': {
						backgroundColor: 'var(--color-transparent)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-transparent)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				},

				'&:hover': {
					borderColor: 'var(--color-white)',
					backgroundColor: 'var(--color-success-50)'
				}
			}
		},
		{
			color: 'success',
			soft: true,
			css: {
				backgroundColor: 'var(--color-success-50)',
				borderColor: 'var(--color-success-50)',
				color: 'var(--color-success-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-success-25)',
					borderColor: 'var(--color-success-25)',
					color: 'var(--color-success-300)',

					'&:hover': {
						backgroundColor: 'var(--color-success-25)',
						borderColor: 'var(--color-success-25)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-success-50)',
					borderColor: 'var(--color-success-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-success-100)',
					borderColor: 'var(--color-success-100)'
				}
			}
		}
	]
});

const spin = keyframes({
	from: { transform: 'rotate(0deg)' },
	to: { transform: 'rotate(360deg)' }
});

export const LoadingIcon = styled('svg', {
	animation: `${spin} 1s linear infinite`,
	height: '1.25rem',
	width: '1.25rem'
});
