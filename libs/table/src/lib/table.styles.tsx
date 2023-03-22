import { keyframes, styled } from '@stitches/react';

export const TableContainer = styled('div', {
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-200)',
	borderRadius: 10,
	borderStyle: 'solid',
	borderWidth: 1,
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
	overflowX: 'auto',
	scrollbarWidth: 'none',
	width: '100%',

	'&::-webkit-scrollbar': {
		display: 'none'
	}
});
export const TableHeaderContainer = styled('div', {
	display: 'grid',
	gridTemplateColumns: '300px auto',
	gap: 16,
	padding: 0
});
export const RightSideComponents = styled('div', {
	display: 'grid',
	gridTemplateColumns: '250px auto auto',
	gap: 12,
	justifyContent: 'flex-end'
});

export const MainHeaderText = styled('div', {
	fontWeight: 500,
	fontSize: '18px',
	lineHeight: '28px',
	color: 'var(--color-gray-700)',

	borderColor: 'var(--color-gray-200)',
	borderTopLeftRadius: '10px',
	borderTopRightRadius: '10px',
	borderWidth: '1px',
	borderStyle: 'solid',
	padding: '10px 24px',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
});

export const Table = styled('table', {
	borderCollapse: 'collapse',
	textAlign: 'left',
	width: '100%'
});

export const TableHead = styled('thead', {
	tr: {
		display: 'flex',
		height: 44,
		width: '100%'
	},

	th: {
		alignItems: 'center',
		boxSizing: 'content-box',
		color: 'var(--color-gray-500)',
		display: 'flex',
		flexDirection: 'row',
		fontSize: 12,
		fontWeight: 500,
		gap: 12,
		lineHeight: '18px',
		padding: '0 16px',
		position: 'relative',

		'&:hover': {
			'.resizer': {
				opacity: 1
			}
		},

		'.resizer': {
			background: 'var(--color-gray-300)',
			cursor: 'col-resize',
			height: '100%',
			position: 'absolute',
			right: 0,
			top: 0,
			touchAction: 'none',
			userSelect: 'none',
			width: 4,
			opacity: 0,

			'&.isResizing': {
				background: 'var(--color-gray-600)',
				opacity: 1
			}
		},

		'&:first-child': {
			backgroundColor: 'var(--color-white)',
			position: 'sticky',
			left: 0,
			zIndex: 9
		},
		'&:nth-child(2)': {
			backgroundColor: 'var(--color-white)',
			boxShadow: 'inset -2px 0 2px var(--color-gray-100)',
			position: 'sticky',
			left: 55,
			zIndex: 9
		},

		'&:last-child': {
			backgroundColor: 'var(--color-white)',
			position: 'sticky',
			right: 0,
			zIndex: 9
		}
	}
});

export const TableBody = styled('tbody', {
	tr: {
		borderTop: '1px solid var(--color-gray-200)',
		display: 'flex',
		height: 72,
		width: '100%',

		'&:nth-child(even)': {
			backgroundColor: 'var(--color-gray-50)',

			td: {
				'&:first-child': {
					backgroundColor: 'var(--color-gray-50)',
					position: 'sticky',
					left: 0
				},
				'&:nth-child(2)': {
					backgroundColor: 'var(--color-gray-50)',
					boxShadow: 'inset -2px 0 2px var(--color-gray-100)',
					position: 'sticky',
					left: 55
				},
				'&:last-child': {
					backgroundColor: 'var(--color-gray-50)',
					boxShadow: 'inset 2px 0 2px var(--color-gray-100)',
					position: 'sticky',
					right: 0
				}
			}
		}
	},

	td: {
		alignItems: 'center',
		boxSizing: 'content-box',
		display: 'flex',
		flexDirection: 'row',
		gap: 12,
		padding: '0 16px',

		'&:first-child': {
			backgroundColor: 'var(--color-white)',
			position: 'sticky',
			left: 0
		},
		'&:nth-child(2)': {
			backgroundColor: 'var(--color-white)',
			boxShadow: 'inset -2px 0 2px var(--color-gray-100)',
			position: 'sticky',
			left: 55
		},
		'&:last-child': {
			backgroundColor: 'var(--color-white)',
			boxShadow: 'inset 2px 0 2px var(--color-gray-100)',
			position: 'sticky',
			right: 0
		}
	}
});

export const TableFilters = styled('div', {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderBottomColor: 'transparent',
	borderBottomLeftRadius: 0,
	borderBottomRightRadius: 0,
	borderLeftColor: 'var(--color-gray-200)',
	borderRightColor: 'var(--color-gray-200)',
	borderStyle: 'solid',
	borderTopColor: 'var(--color-gray-200)',
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,
	borderWidth: 1,
	display: 'flex',
	height: 60,
	justifyContent: 'space-between',
	padding: 20,
	width: '100%'
});

export const TableFiltersWrapper = styled('div', {
	height: '100%',
	display: 'flex',
	gap: 12,
	alignItems: 'center',
	justifyContent: 'stretch'
});

export const TableTitle = styled('div', {
	fontWeight: 500,
	color: 'var(--color-gray-700)',
	fontSize: 18,
	lineHeight: '28px'
});

export const TableActions = styled('div', {
	height: '100%',
	display: 'flex',
	gap: 12,
	alignItems: 'center',
	justifyContent: 'stretch'
});

export const shimmer = keyframes({
	'0%': { backgroundColor: 'var(--color-gray-50)' },
	'100%': { backgroundColor: 'var(--color-gray-200)' }
});

export const SkeletonBar = styled('div', {
	animation: `${shimmer} 1s linear infinite alternate`,
	backgroundColor: 'var(--color-gray-50)',
	borderRadius: 16,
	height: 16,
	position: 'relative',
	width: '100%'
});
