import { styled } from '@stitches/react';

export const BadgeContainer = styled('div', {
	alignItems: 'center',
	borderRadius: 16,
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	fontWeight: '500',
	justifyContent: 'space-between',

	variants: {
		color: {
			error: {
				backgroundColor: 'var(--color-error-50)',
				color: 'var(--color-error-700)',

				'&:hover': {
					backgroundColor: 'var(--color-error-100)'
				}
			},
			gray: {
				backgroundColor: 'var(--color-gray-50)',
				color: 'var(--color-gray-700)',

				'&:hover': {
					backgroundColor: 'var(--color-gray-100)'
				}
			},
			primary: {
				backgroundColor: 'var(--color-primary-50)',
				color: 'var(--color-primary-700)',

				'&:hover': {
					backgroundColor: 'var(--color-primary-100)'
				}
			},
			success: {
				backgroundColor: 'var(--color-success-50)',
				color: 'var(--color-success-700)',

				'&:hover': {
					backgroundColor: 'var(--color-success-100)'
				}
			},
			warning: {
				backgroundColor: 'var(--color-warning-50)',
				color: 'var(--color-warning-700)',

				'&:hover': {
					backgroundColor: 'var(--color-warning-100)'
				}
			}
		},
		size: {
			md: {
				fontSize: 12,
				gap: 8,
				height: 30,
				lineHeight: '18px'
			},
			lg: {
				fontSize: 14,
				gap: 12,
				height: 32,
				lineHeight: '20px'
			}
		},
		outlined: { true: {} },
		leading: {true: {padding: '0 10px 0 4px'}},
		trailing: {true: {padding: '0 4px 0 10px'}},
	},

	compoundVariants: [
		{
			color: 'error',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-error-700)',
				border: '1px solid var(--color-error-700)'
			}
		},
		{
			color: 'gray',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-gray-700)',
				border: '1px solid var(--color-gray-700)'
			}
		},
		{
			color: 'primary',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-primary-700)',
				border: '1px solid var(--color-primary-700)'
			}
		},
		{
			color: 'success',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-success-700)',
				border: '1px solid var(--color-success-700)'
			}
		},
		{
			color: 'warning',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-warning-700)',
				border: '1px solid var(--color-warning-700)'
			}
		}
	]
});

export const LeadingSection = styled('div', {
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',

	variants: {
		size: {
			md: {
				gap: 8
			},
			lg: {
				gap: 12
			}
		}
	}
});

export const Title = styled('div', {
	alignItems: 'center',
	borderRadius: 16,
	color: 'var(--color-white)',
	display: 'flex',
	flexDirection: 'row',
	fontWeight: '500',
	gap: 6,
	justifyContent: 'center',
	padding: '0 10px',

	variants: {
		color: {
			error: {
				backgroundColor: 'var(--color-error-600)'
			},
			gray: {
				backgroundColor: 'var(--color-gray-600)'
			},
			primary: {
				backgroundColor: 'var(--color-primary-600)'
			},
			success: {
				backgroundColor: 'var(--color-success-600)'
			},
			warning: {
				backgroundColor: 'var(--color-warning-600)'
			}
		},
		size: {
			md: {
				fontSize: 12,
				height: 22,
				lineHeight: '18px'
			},
			lg: {
				fontSize: 14,
				height: 24,
				lineHeight: '20px'
			}
		},
		outlined: { true: {} },
		plain: { true: {} },
		soft: { true: {} }
	},

	compoundVariants: [
		{
			color: 'error',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-error-700)',
				border: '1px solid var(--color-error-700)'
			}
		},
		{
			color: 'error',
			plain: true,
			css: {
				backgroundColor: 'var(--color-white)',
				color: 'var(--color-error-700)'
			}
		},
		{
			color: 'error',
			soft: true,
			css: {
				backgroundColor: 'var(--color-error-100)',
				color: 'var(--color-error-700)'
			}
		},
		{
			color: 'gray',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-gray-700)',
				border: '1px solid var(--color-gray-700)'
			}
		},
		{
			color: 'gray',
			plain: true,
			css: {
				backgroundColor: 'var(--color-white)',
				color: 'var(--color-gray-700)'
			}
		},
		{
			color: 'gray',
			soft: true,
			css: {
				backgroundColor: 'var(--color-gray-100)',
				color: 'var(--color-gray-700)'
			}
		},
		{
			color: 'primary',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-primary-700)',
				border: '1px solid var(--color-primary-700)'
			}
		},
		{
			color: 'primary',
			plain: true,
			css: {
				backgroundColor: 'var(--color-white)',
				color: 'var(--color-primary-700)'
			}
		},
		{
			color: 'primary',
			soft: true,
			css: {
				backgroundColor: 'var(--color-primary-100)',
				color: 'var(--color-primary-700)'
			}
		},
		{
			color: 'success',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-success-700)',
				border: '1px solid var(--color-success-700)'
			}
		},
		{
			color: 'success',
			plain: true,
			css: {
				backgroundColor: 'var(--color-white)',
				color: 'var(--color-success-700)'
			}
		},
		{
			color: 'success',
			soft: true,
			css: {
				backgroundColor: 'var(--color-success-100)',
				color: 'var(--color-success-700)'
			}
		},
		{
			color: 'warning',
			outlined: true,
			css: {
				backgroundColor: 'transparent',
				color: 'var(--color-warning-700)',
				border: '1px solid var(--color-warning-700)'
			}
		},
		{
			color: 'warning',
			plain: true,
			css: {
				backgroundColor: 'var(--color-white)',
				color: 'var(--color-warning-700)'
			}
		},
		{
			color: 'warning',
			soft: true,
			css: {
				backgroundColor: 'var(--color-warning-100)',
				color: 'var(--color-warning-700)'
			}
		}
	]
});
