import { keyframes, styled } from '@stitches/react';

export const StyledIconButtonText = styled('p', {
	fontWeight: 600,
	fontSize: '16px',
	lineHeight: '24px'
});

export const StyledIconButtonContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	gap: '12px'
});

export const StyledIconContainer = styled('div', {
	display: 'flex'
});
export const StyledIconButton = styled('div', {
	alignItems: 'center',
	borderColor: 'none',
	borderWidth: '1px',
	borderStyle: 'solid',
	borderRadius: 'var(--border-radius)',
	boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
	cursor: 'pointer',
	display: 'flex',

	justifyContent: 'center',
	outline: 'none',
	textDecoration: 'none',
	transition: 'all .2s ease-in-out',
	width: 'auto',
	padding: '10px 16px',
	'&:disabled': {
		cursor: 'not-allowed'
	},

	variants: {
		color: {
			google: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',
				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
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
			},
			facebook: {
				backgroundColor: '#1877F2',
				borderColor: 'none',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
					}
				},

				'&:focus': {
					backgroundColor: '#1877F2',
					borderColor: 'none',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: '#0C63D4',
					borderColor: 'none'
				}
			},
			apple: {
				backgroundColor: 'var(--color-black)',
				borderColor: 'none',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-black)',
					borderColor: 'none',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-black)',
					borderColor: 'none'
				}
			},
			twitter: {
				backgroundColor: '#1DA1F2',
				borderColor: 'none',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
					}
				},

				'&:focus': {
					backgroundColor: '#1DA1F2',
					borderColor: 'var(--color-success-600)',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: '#0C8BD9',
					borderColor: 'none'
				}
			},
			figma: {
				backgroundColor: 'var(--color-black)',
				borderColor: 'none',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
					}
				},

				'&:focus': {
					backgroundColor: 'var(--color-black)',

					borderColor: 'none',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: 'var(--color-black)',

					borderColor: 'none'
				}
			},
			dribble: {
				backgroundColor: '#EA4C89',
				borderColor: 'none',
				color: 'var(--color-white)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
					}
				},

				'&:focus': {
					backgroundColor: '#EA4C89',
					borderColor: 'none',
					boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
				},

				'&:hover': {
					backgroundColor: '#E62872',
					borderColor: 'none'
				}
			}
		},
		outlined: { true: {} },
		plain: { true: {} },
		size: {
			sm: {
				width: '36px',
				height: '36px',
				padding: '8px'
			},
			md: {
				width: '40px',
				height: '40px',
				padding: '10px'
			},
			lg: {
				width: '44px',
				height: '44px',
				padding: '12px'
			},
			xl: {
				width: '48px',
				height: '48px',
				padding: '14px'
			},
			xxl: {
				width: '56px',
				height: '56px',
				padding: '16px'
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
			color: 'facebook',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',

				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
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
			color: 'apple',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',

				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
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
			color: 'twitter',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',

				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
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
			color: 'figma',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',

				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
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
			color: 'dribble',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',

				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
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
			color: 'google',
			outlined: true,
			css: {
				backgroundColor: 'var(--color-white)',
				borderColor: 'var(--color-gray-300)',

				color: 'var(--color-gray-700)',

				'&:disabled': {
					backgroundColor: 'var(--color-white)',
					borderColor: 'var(--color-gray-300)',

					'&:hover': {
						backgroundColor: 'var(--color-white)',
						borderColor: 'var(--color-gray-300)'
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
		}
	]
});
