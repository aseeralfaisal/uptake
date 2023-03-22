import { styled } from '@stitches/react';
import ReactPaginate from 'react-paginate';

export const PaginatorContainer = styled('div', {
	margin: ' 16px 18px',
	position: 'relative'
})

export const Paginator = styled(ReactPaginate, {
	alignItems: 'center',
	display: 'flex',
	gap: 10,
	justifyContent: 'center',
	listStyleType: 'none',
	position: 'relative',
	width: '100%',
	'li:first-child': {
		left: 0,
		position: 'absolute',
	},

	'li:last-child': {
		position: 'absolute',
		right: 0,
	},

	'.page-item': {
		borderRadius: 20,
		color: 'var(--color-gray-600)',
		cursor: 'pointer',
		height: 40,
		transition: 'all .2s ease-in-out',
		width: 40,

		'.page-link': {
			alignItems: 'center',
			display: 'flex',
			fontSize: 14,
			fontWeight: 500,
			height: '100%',
			justifyContent: 'center',
			lineHeight: '20px',
			width: '100%',
		},

		'&.disabled': {
			pointerEvents: 'none',
			color: 'var(--color-gray-300)',
		},

		'&.active': {
			backgroundColor: 'var(--color-gray-100)',
			color: 'var(--color-gray-600)',
		},

		'&:focus': {
			backgroundColor: 'var(--color-gray-50)',
			color: 'var(--color-gray-800)',
			boxShadow: '0px 0px 0px 4px var(--color-gray-100)'
		},
		'&:hover': {
			backgroundColor: 'var(--color-gray-100)',
			color: 'var(--color-gray-600)',
		},

	}
});
