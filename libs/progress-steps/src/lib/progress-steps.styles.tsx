/* eslint-disable-next-line */
import { keyframes, styled } from '@stitches/react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' }
});

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column'
});

export const ProgressBarContainer = styled('div', {
	height: '8px',
	borderRadius: '4px',
	backgroundColor: 'var(--color-gray-100)',
	width: '320px'
});
export const Progress = styled(ProgressPrimitive.Root, {
	position: 'relative',
	overflow: 'hidden',
	background: 'var(--color-gray-200)',
	borderRadius: 4,
	width: '100%',
	height: 8,
	transform: 'translateZ(0)'
});

export const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
	variants: {
		color: {
			primary: {
				background: 'var(--color-primary-600)'
			},
			error: {
				background: 'var(--color-error-600)'
			},
			warning: {
				background: 'var(--color-warning-600)'
			},
			success: {
				background: 'var(--color-success-600)'
			},
			gray: {
				background: 'var(--color-gray-600)'
			}
		}
	},
	borderRadius: 'inherit',
	width: '100%',
	height: '100%',
	transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
});

export const ProgressMeter = styled('div', {
	variants: {
		color: {
			primary: {
				backgroundColor: 'var(--color-primary-600)'
			},
			error: {
				backgroundColor: 'var(--color-error-600)'
			},
			warning: {
				backgroundColor: 'var(--color-warning-600)'
			},
			success: {
				backgroundColor: 'var(--color-success-600)'
			},
			gray: {
				backgroundColor: 'var(--color-gray-600)'
			}
		}
	},
	height: '8px',

	borderRadius: '4px'
});
export const ProgressDetailsText = styled('span', {
	marginTop: '8px',
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '20px',
	variants: {
		color: {
			primary: {
				color: 'var(--color-primary-700)'
			},
			error: {
				color: 'var(--color-error-700)'
			},
			success: {
				color: 'var(--color-success-700)'
			},
			warning: {
				color: 'var(--color-warning-700)'
			},
			gray: {
				color: 'var(--color-gray-700)'
			}
		}
	}
});
export const ProgressDescriptionText = styled('span', {
	fontWeight: 400,
	fontSize: '14px',
	lineHeight: '20px',
	variants: {
		color: {
			primary: {
				color: 'var(--color-primary-600)'
			},
			error: {
				color: 'var(--color-error-600)'
			},
			success: {
				color: 'var(--color-success-600)'
			},
			warning: {
				color: 'var(--color-warning-600)'
			},
			gray: {
				color: 'var(--color-gray-600)'
			}
		}
	}
});
export const ProgressPercentageTextContainer = styled('div', {
	variants: {
		direction: {
			side: {
				backgroundColor: 'transparent'
			},
			sideBottom: {
				backgroundColor: 'transparent',
				marginTop: '12px'
			},
			pointedUp: {
				backgroundColor: 'var(--color-white)',
				borderRadius: '8px',
				padding: '8px 12px',

				width: '50px',
				height: '40px',

				marginTop: '-50px',
				boxShadow: ' 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
				borderStyle: 'solid',
				borderColor: ' white transparent transparent transparent',
				position: 'absolute',

				'&::after': {
					content: '',
					position: 'absolute',
					top: '100%',
					left: '50%',
					marginLeft: '-5px',
					borderWidth: '5px',
					borderStyle: 'solid',
					borderColor: ' white transparent transparent transparent'
				}
			},
			nonPointedDown: {
				backgroundColor: 'var(--color-white)',
				borderRadius: '8px',
				padding: '8px 12px',

				width: '50px',
				height: '40px',

				marginTop: '12px',
				boxShadow: ' 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
			}
		}
	}
});
