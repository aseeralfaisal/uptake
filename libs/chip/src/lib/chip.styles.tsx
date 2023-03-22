import { styled } from '@stitches/react';

export const Chip = styled('div', {
	alignItems: 'center',
	borderRadius: 16,
	display: 'flex',
	flexDirection: 'row',
	gap: 6,
	justifyContent: 'center',
    width: 'max-content',

	variants: {
		color: {
			error: {
				backgroundColor: 'var(--color-error-50)',
				color: 'var(--color-error-700)'
			},
			gray: {
				backgroundColor: 'var(--color-gray-100)',
				color: 'var(--color-gray-700)'
			},
			primary: {
				backgroundColor: 'var(--color-primary-50)',
				color: 'var(--color-primary-700)'
			},
			success: {
				backgroundColor: 'var(--color-success-50)',
				color: 'var(--color-success-700)'
			},
			warning: {
				backgroundColor: 'var(--color-warning-50)',
				color: 'var(--color-warning-700)'
			},
		},
		size: {
			sm: {
				height: 22,
                padding: '2px 8px'
			},
            md: {
				height: 24,
                padding: '2px 10px'
			},
            lg: {
				height: 28,
                padding: '4px 12px'
			}
		},
		outlined: { true: {} }
	},

	compoundVariants: [
		{
			color: '',
			outlined: true,
			css: {}
		}
	]
});

export const Content = styled('p', {
	fontWeight: '500',

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
				fontSize: 14,
				lineHeight: '20px'
			}
		}
	}
});
