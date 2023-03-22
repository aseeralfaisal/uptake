import { styled } from '@stitches/react';

export const Bubble = styled('div', {
	borderRadius: 28,
	display: 'grid',
	height: 48,
	placeContent: 'center',
	width: 48,

	variants: {
		color: {
			error: {
				backgroundColor: 'var(--color-error-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-error-50)',
				color: 'var(--color-error-600)'
			},
			gray: {
				backgroundColor: 'var(--color-gray-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-gray-50)',
				color: 'var(--color-gray-600)'
			},
			info: {
				backgroundColor: 'var(--color-blue-light-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-blue-light-50)',
				color: 'var(--color-blue-light-600)'
			},
			primary: {
				backgroundColor: 'var(--color-primary-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-primary-50)',
				color: 'var(--color-primary-600)'
			},
			purple: {
				backgroundColor: 'var(--color-purple-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-purple-50)',
				color: 'var(--color-purple-600)'
			},
			rose: {
				backgroundColor: 'var(--color-rose-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-rose-50)',
				color: 'var(--color-rose-600)'
			},
			success: {
				backgroundColor: 'var(--color-success-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-success-50)',
				color: 'var(--color-success-600)'
			},
			warning: {
				backgroundColor: 'var(--color-warning-100)',
				boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-warning-50)',
				color: 'var(--color-warning-600)'
			}
		}
	}
});
