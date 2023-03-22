import { styled } from '@stitches/react';

export const Container = styled('div', {
    backgroundColor: 'var(--color-white)',
    display: 'grid',
    gap: 0,
    gridTemplateColumns: '60% 40%',
    minHeight: '100vh',
    width: '100%',

    '@media (max-width: 1399.98px)': { gridTemplateColumns: '60% 40%' },

    '@media (max-width: 1199.98px)': { gridTemplateColumns: '40% 60%' },

    '@media (max-width: 991.98px)': { gridTemplateColumns: 'repeat(1, 1fr)' },

    '@media (max-width: 767.98px)': { gridTemplateColumns: 'repeat(1, 1fr)' },

    '@media (max-width: 575.98px)': { gridTemplateColumns: 'repeat(1, 1fr)' }
});

export const LeftContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
	height: '100%',
	justifyContent: 'space-evenly',
	margin: 'auto',
	padding: 30,
	position: 'relative',
	width: 500,

	'@media (max-width: 1399.98px)': {
		justifyContent: 'space-between'
	},

	'@media (max-width: 1199.98px)': {
		justifyContent: 'space-between',
		width: '100%'
	},

	'@media (max-width: 991.98px)': {
		justifyContent: 'space-evenly',
		width: 600
	},

	'@media (max-width: 767.98px)': {
		gap: 60,
		justifyContent: 'center',
		padding: 16,
		width: '100%'
	},

	'@media (max-width: 575.98px)': {
		gap: 60,
		justifyContent: 'center',
		padding: 16,
		width: '100%'
	}
});

export const FormContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 32,
	width: '100%',

	a: {
		color: 'var(--color-primary-700)',
		fontWeight: 500
	}
});

export const Header = styled('div', {
	display: 'flex',
	flexDirection: 'column'
});

export const Title = styled('h1', {
	color: 'var(--color-gray-900)',
	fontSize: 32,
	fontWeight: 600,
	lineHeight: '44px'
});

export const Info = styled('p', {
	color: 'var(--color-gray-600)',
	fontSize: 16,
	fontWeight: 400,
	lineHeight: '24px'
});

export const SignUpLink = styled('div', {
	color: 'var(--color-gray-600)',
	fontSize: 14,
	fontWeight: 400,
	textAlign: 'center',

	a: {
		color: 'var(--color-primary-700)',
		fontWeight: 500
	}
});

export const Footer = styled('div', {
	textAlign: 'center',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: 8,

	p: {
		color: 'var(--color-gray-500)',
		fontSize: 12,
		fontWeight: 400
	},

	'@media (max-width: 767.98px)': {
		display: 'none'
	},

	'@media (max-width: 575.98px)': {
		display: 'none'
	}
});

export const HelpContainer = styled('div', {
	color: 'var(--color-gray-800)',
	display: 'flex',
	flexDirection: 'row',
	fontSize: 12,
	fontWeight: 500,
	gap: 8,
	lineHeight: '18px',
	placeContent: 'center',
	width: '100%'
});

export const RightContainer = styled('div', {
	background: 'var(--color-primary-100) url("/images/sign-in-background.png")',
	backgroundPosition: 'right center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',

	'@media (max-width: 1399.98px)': {
		backgroundSize: 'contain'
	},

	'@media (max-width: 1199.98px)': {
		backgroundSize: 'contain'
	},

	'@media (max-width: 991.98px)': {
		display: 'none'
	},

	'@media (max-width: 767.98px)': {
		display: 'none'
	},

	'@media (max-width: 575.98px)': {
		display: 'none'
	}
});
