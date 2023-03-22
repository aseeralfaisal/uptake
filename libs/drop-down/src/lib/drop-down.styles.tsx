import { styled, keyframes } from '@stitches/react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export const DropDownTrigger = styled(DropdownMenuPrimitive.Trigger, {
	all: 'unset',
	alignItems: 'center',
	borderColor: 'none',
	borderWidth: '1px',
	borderStyle: 'solid',
	borderRadius: 'var(--border-radius)',
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	cursor: 'pointer',
	display: 'flex',
	fontFamily: 'var(--font-family)',
	fontWeight: 500,
	gap: '8px',
	justifyContent: 'center',
	outline: 'none',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: 'auto',

	'&:disabled': {
		cursor: 'not-allowed'
	},

	variants: {
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
			sm: {
				fontSize: 14,
				height: 36,
				lineHeight: '20px',
				minWidth: 36,
				padding: 0
			},
			md: {
				fontSize: 14,
				height: 40,
				lineHeight: '20px',
				minWidth: 40,
				padding: '10px 16px'
			},
			lg: {
				fontSize: 16,
				height: 44,
				lineHeight: '24px',
				minWidth: 44,
				padding: 0
			},
			xl: {
				fontSize: 16,
				height: 48,
				lineHeight: '24px',
				minWidth: 48,
				padding: 0
			},
			xxl: {
				fontSize: 18,
				height: 60,
				lineHeight: '28px',
				minWidth: 36,
				padding: 0
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
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-error-300)',
				color: 'var(--color-error-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-error-200)',
					color: 'var(--color-error-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-error-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
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
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-white)',
				color: 'var(--color-error-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-error-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
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

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-error-50)',
					borderColor: 'var(--color-error-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-error-100)'
				},

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
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',
				color: 'var(--color-gray-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-200)',
					color: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
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
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-white)',
				color: 'var(--color-gray-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					borderColor: 'var(--color-white)',
					backgroundColor: 'var(--color-gray-50)'
				}
			}
		},
		{
			color: 'gray',
			soft: true,
			css: {
				backgroundColor: 'var(--color-gray-50)',
				borderColor: 'var(--color-gray-50)',
				color: 'var(--color-gray-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-gray-50)',
					borderColor: 'var(--color-gray-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

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
					backgroundColor: 'var(--color-gray-50)',
					borderColor: 'var(--color-gray-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-gray-100)',
					borderColor: 'var(--color-gray-100)'
				}
			}
		},
		{
			color: 'primary',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-primary-300)',
				color: 'var(--color-primary-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-primary-200)',
					color: 'var(--color-primary-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-primary-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
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
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-white)',
				color: 'var(--color-primary-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-primary-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
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

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-primary-50)',
					borderColor: 'var(--color-primary-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
				},

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
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-success-300)',
				color: 'var(--color-success-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-success-200)',
					color: 'var(--color-success-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-success-200)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
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
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-white)',
				color: 'var(--color-success-700)',

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				},

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-white)',
					color: 'var(--color-success-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-white)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-white)',
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

				'&[data-state="open"]': {
					backgroundColor: 'var(--color-success-50)',
					borderColor: 'var(--color-success-50)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-success-100)'
				},

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

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(4px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-4px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-4px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(4px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

export const StyledContent = styled(DropdownMenuPrimitive.Content, {
	animationDuration: '500ms',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	backgroundColor: 'var(--color-white)',
	border: '1px solid var(--color-gray-100)',
	borderRadius: 8,
	boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
	fontSize: 14,
	lineHeight: '20px',
	minWidth: 200,
	padding: '8px 0',
	willChange: 'transform, opacity',

	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade }
	}
});

export const DropDownOption = styled(DropdownMenuPrimitive.Item, {
	all: 'unset',
	alignItems: 'center',
	cursor: 'pointer',
	display: 'flex',
	height: 36,
	padding: '0 14px',
	gap: 8,

	'&:hover': {
		backgroundColor: 'var(--color-gray-50)'
	}
});
