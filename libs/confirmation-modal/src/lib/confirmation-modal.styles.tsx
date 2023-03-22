import { keyframes, styled } from '@stitches/react';

export const ConfirmationModal = styled('div', {
	position: 'relative',
	zIndex: 10
});

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 0.5 }
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

export const ConfirmationModalOverlay = styled('div', {
	backgroundColor: 'var(--color-gray-900)',
	bottom: 0,
	inset: 0,
	left: 0,
	position: 'fixed',
	right: 0,
	top: 0,
	backdropFilter: 'blur(8px)',
	height: '100%',
	mixBlendMode: 'multiply',
	opacity: 0.5,
	width: '100%',

	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
	}
});

export const ConfirmationModalPanel = styled('div', {
	backgroundColor: 'var(--color-white)',
	borderRadius: 12,
	boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
	left: '50%',
	maxHeight: '85vh',
	padding: 24,
	position: 'fixed',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	width: '400px',

	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
	},

	'&:focus': { outline: 'none' }
});

export const ConfirmationModalDetails = styled('div', {
	alignItems: 'flex-start',
	display: 'flex',
	flexDirection: 'column',
	gap: '4px',
	marginBottom: 24
});

export const ConfirmationModalHeader = styled('div', {
	display: 'flex',
	marginBottom: 16,
	justifyContent: 'space-between'
});

export const ConfirmationModalTitle = styled('h6', {
	fontSize: '18px',
	lineHeight: '28px',
	fontWeight: 500,
	color: 'var(--color-gray-800)'
});

export const ConfirmationModalMessage = styled('p', {
	fontSize: '14px',
	lineHeight: '20px',
	fontWeight: 400,
	color: 'var(--color-gray-600)'
});

export const ConformationModalFooter = styled('div', {
	display: 'grid',
	gap: 12,
	gridTemplateColumns: 'repeat(2, 1fr)',

	'@media (max-width: 768px)': {
		display: 'flex',
		flexDirection: 'column-reverse'
	}
});

export const ConfirmationModalClose = styled('div', {
	color: 'var(--color-gray-500)',
	cursor: 'pointer'
});
