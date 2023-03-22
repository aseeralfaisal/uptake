import { keyframes, styled } from '@stitches/react';

export const StyledButton = styled('div', {
	alignItems: 'center',
	borderColor: 'none',
	borderRadius: 'var(--border-radius)',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	cursor: 'pointer',
	display: 'flex',
	fontFamily: 'var(--font-family)',
	fontWeight: 500,
	gap: '8px',
	justifyContent: 'center',
    letterSpacing: 0.25,
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
				padding: '8px 14px'
			},
			md: {
				fontSize: 14,
				height: 40,
				lineHeight: '20px',
				padding: '10px 16px'
			},
			lg: {
				fontSize: 14,
				height: 44,
				lineHeight: '24px',
				padding: '10px 18px'
			},
			xl: {
				fontSize: '16px',
				height: '48px',
				lineHeight: '24px',
				padding: '12px 20px'
			},
			xxl: {
				fontSize: '18px',
				height: '60px',
				lineHeight: '28px',
				padding: '16px 28px'
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
	width: '1.25rem',
});
