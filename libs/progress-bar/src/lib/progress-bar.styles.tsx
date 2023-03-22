import { keyframes, styled } from '@stitches/react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

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

export const ProgressTooltip = styled(TooltipPrimitive.Content, {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-200)',
	borderRadius: 8,
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
	color: 'var(--color-gray-700)',
	display: 'flex',
	fontSize: 12,
	fontWeight: 600,
	height: 34,
	lineHeight: '18px',
	padding: '0 12px',
	userSelect: 'none',

	'@media (prefers-reduced-motion: no-preference)': {
		animationDuration: '150ms',
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

export const ProgressContainer = styled('div', {
	display: 'grid',
	gridTemplateColumns: '100%',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 12,

	variants: {
		side: {
			top: {},
			right: {},
			bottom: {},
			left: {},
		},
		showInfo: {true: {}}
	},

	compoundVariants: [
		{
			showInfo: true,
			side: 'top',
			css: {
				alignItems: 'inherit',
				display: 'flex',
				gap: 12,
				flexDirection: 'column-reverse'
			}
		},
		{
			showInfo: true,
			side: 'right',
			css: {
				alignItems: 'center',
				display: 'grid',
				gap: 0,
				gridTemplateColumns: 'calc(100% - 50px) 50px',
			}
		},
		{
			showInfo: true,
			side: 'bottom',
			css: {
				display: 'grid',
				gap: 12,
				gridTemplateColumns: 'repeat(1, 1fr)',
			}
		},
		{
			showInfo: true,
			side: 'left',
			css: {
				alignItems: 'center',
				display: 'grid',
				gap: 0,
				gridTemplateColumns: '50px calc(100% - 50px)',
			}
		},
	]
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
	background: 'var(--color-primary-600)',
	borderRadius: 'inherit',
	width: '100%',
	height: '100%',
	transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
});

export const ProgressInfo = styled('p', {
	color: 'var(--color-gray-700)',
	fontSize: 12,
	fontWeight: 500,
	lineHeight: '18px',
	textAlign: 'end'
})
