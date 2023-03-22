import { keyframes, styled } from '@stitches/react';

const slideRight = keyframes({
	'0%': { transform: 'translateX(-400px)' },
	'100%': { transform: 'translateX(0px)' }
});
const slideLeft = keyframes({
	'0%': { transform: 'translateX(0px)' },
	'100%': { transform: 'translateX(-280px)' }
});

export const NavContainer = styled('div', {
	backgroundColor: 'var(--color-white)',
	borderRight: '1px solid var(--color-gray-200)',
	height: '100vh',
	position: 'relative',
	width: '100%',
	animation: `${slideRight} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
	variants: {
		hideMenu: {
			true: {
				animation: `${slideLeft} 0.2s linear`,
				transform: 'translateX(-280px)',
				width: 280,
				zIndex: 20,
				position: 'absolute'
			}
		}
	}
});

export const Header = styled('div', {
	alignItems: 'center',
	borderBottom: '1px solid var(--color-gray-200)',
	display: 'grid',
	gap: 12,
	gridTemplateColumns: 'auto 40px',
	height: 60,
	justifyContent: 'space-between',
	padding: '0 12px',
	position: 'relative',
	width: '100%'
	// animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
});

export const Container = styled('div', {
	display: 'grid',
	gridTemplateColumns: '80px auto',
	height: '100%',
	overflow: 'hidden',
	width: '100%'
});

export const Footer = styled('div', {
	alignItems: 'center',
	borderTop: '1px solid var(--color-gray-200)',
	display: 'grid',
	gap: 12,
	gridTemplateColumns: 'calc(100% - 50px) 36px',
	height: 60,
	justifyContent: 'space-between',
	padding: '0 12px',
	position: 'relative',
	width: '100%'
});
