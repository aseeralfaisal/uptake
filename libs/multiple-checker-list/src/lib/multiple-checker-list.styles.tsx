import { styled } from '@stitches/react';

export const AllEditorsMenu = styled('div', {
	position: 'absolute',
	top: 250,
	left: 84,
	borderRadius: 10,
	width: '313px',
	height: '316px',
	border: '1px solid var(--color-gray-200)',
	boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
	backgroundColor: 'var(--color-white)',
	transition: 'ease-out 0.5s all',
});

export const CheckBoxContainer = styled('div', {
	padding: '10px',
	variants: {
		soft: {
			true: {
				backgroundColor: 'var(--color-gray-50)'
			}
		}
	}
});

export const EditorsListContainer = styled('div', {
	position: 'relative',
	height: '200px',
	width: '100%',
	overflow: 'scroll',
	'&::-webkit-scrollbar': {
		display: 'none'
	}
});

export const EditorMenuHeader = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0px',
	width: '285px',
	height: '20px'
});

export const EditorMenuColum = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	alignItems: 'flex-start'
});

export const HeaderFlex = styled('div', {
	padding: '14px',
	display: 'grid',
	gap: '12px'
});

export const AllEditorLabel = styled('span', {
	color: 'var(--color-gray-800)',
	fontSize: 14,
	fontWeight: 500,
	lineHeight: '20px'
});

export const ClearLabel = styled('span', {
	color: 'var(--color-gray-500)',
	fontSize: 14,
	fontWeight: 500,
	lineHeight: '20px',
	userSelect: 'none',
	'&:hover': {
		opacity: 0.8
	}
});

export const SearchInputComponent = styled('div', {
	width: 285,
	height: 36
});

export const EditorMenuItemFlex = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	width: '313px',
	height: '44px'
});
