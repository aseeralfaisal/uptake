import { styled } from '@stitches/react';

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 32,
	height: '100%',
	justifyContent: 'center',
	margin: '0 auto',
	width: 400,

	'@media (max-width: 1399.98px)': {
		width: 400
	},

	'@media (max-width: 1199.98px)': {
		width: 400
	},

	'@media (max-width: 991.98px)': {
		width: 400
	},

	'@media (max-width: 767.98px)': {
		width: '100%'
	},

	'@media (max-width: 575.98px)': {
		width: '100%'
	}
});

export const Header = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	textAlign: 'center'
});

export const Title = styled('h1', {
	color: 'var(--color-gray-800)',
	fontSize: 30,
	fontWeight: 600,
	lineHeight: '38px'
});

export const Subtitle = styled('p', {
	color: 'var(--color-gray-500)',
	fontSize: 16,
	fontWeight: 400,
	lineHeight: '24px',

	span: {
		color: 'var(--color-gray-600)',
		fontWeight: 500
	}
});

export const Icon = styled('div', {
	backgroundColor: 'var(--color-primary-100)',
	borderRadius: 28,
	boxShadow: '0 0 0 10px var(--color-primary-50)',
	color: 'var(--color-primary-500)',
	display: 'flex',
	height: 56,
	margin: 'auto',
	placeContent: 'center',
	placeItems: 'center',
	width: 56
});

export const ResendLink = styled('div', {
	textAlign: 'center',
	color: 'var(--color-gray-500)',
	fontSize: 16,
	fontWeight: 400,
	lineHeight: '24px',

    span: {
        color: 'var(--color-primary-700)',
		cursor: 'pointer'
    }
});
