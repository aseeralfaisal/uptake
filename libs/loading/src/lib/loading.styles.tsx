import { keyframes, styled } from '@stitches/react';

export const LoadingContainer = styled('div', {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const LoadingText = styled('p', {
	color: 'var(--color-gray-700)',
	fontSize: 14,
	fontWeight: 500,
	lineHeight: '20px',
});

const spin = keyframes({
	from: { transform: 'rotate(0deg)' },
	to: { transform: 'rotate(360deg)' }
});

export const LoadingIconDiv = styled('div', {
	animation: `${spin} 1s linear infinite`,

	variants: {
		color: {
			error: {
				color: 'var(--color-error-600)',
			},
			gray: {
				color: 'var(--color-gray-600)',
			},
			primary: {
				color: 'var(--color-primary-600)',
			},
			success: {
				color: 'var(--color-success-600)',
			},
			warning: {
				color: 'var(--color-warning-600)',
			}
		},
		size: {
			sm: {
				height: 28,
				width: 28
			},
			md: {
				height: 42,
				width: 42
			},
			lg: {
				height: 50,
				width: 50
			},
			xl: {
				height: 58,
				width: 58
			}
		}
	}
});


export default {
    LoadingContainer,
    LoadingText,
    LoadingIconDiv
}
