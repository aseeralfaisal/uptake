import * as Popover from '@radix-ui/react-popover';

import { keyframes, styled } from '@stitches/react';

const slideRight = keyframes({
	'0%': { transform: 'translateX(413px)' },
	'100%': { transform: 'translateX(0px)' }
});
const slideLeft = keyframes({
	'0%': { transform: 'translateX(0px)' },
	'100%': { transform: 'translateX(413px)' }
});

export const PopoverContent = styled(Popover.Content, {
	backgroundColor: 'var(--color-white)',
	padding: '16px',
	boxShadow: '0px 10px 32px -5px rgba(0, 0, 0, 0.15)',
	gap: '16px',
	height: '100vh',
	margin: '0 16px',
	width: '413px',
	zIndex: 12,
	animation: `${slideLeft} 400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
	variants: {
		open: {
			true: {
				animation: `${slideRight} 400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)`
			}
		}
	}
});

export const HeaderParent = styled('div', {
	width: 381,
	height: 40
});

export const PopoverClose = styled(Popover.Close, {
	background: 'none',
	'&:hover': {
		opacity: 0.7
	}
});

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
	variants: {
		editorsVisibility: {
			false: {
				visibility: 'hidden'
			}
		}
	}
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
	lineHeight: '20px'
});

export const SearchInputComponent = styled('div', {
	width: 285,
	height: 36
});

export const UserNameLabel = styled('div', {
	color: 'var(--color-gray-800)',
	fontWeight: 500,
	fontSize: '16px',
	lineHeight: '24px'
});

export const EditorMenuItemFlex = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	width: '313px',
	height: '44px'
});

export const CustomizeItemParent = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	padding: '16px',
	margin: '8px 0',
	width: '381px',
	height: '112px',
	background: 'var(--color-white)',
	borderRadius: '8px',
	border: '1px solid var(--color-gray-200)'
});

export const FilterParent = styled('div', {
	marginTop: '10px',
	overflowY: 'scroll',
	height: '80%',
	'&::-webkit-scrollbar': {
		display: 'none'
	}
});

export const Flex = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',
	padding: 0,
	gap: '16px',
	width: '313px',
	height: '80px'
});

export const TitleLabel = styled('span', {
	fontSize: '14px',
	lineHeight: '20px',
	fontWeight: 500,
	color: 'var(--color-gray-700)'
});

export const ContentRowTitle = styled('div', {
	color: 'var(--color-gray-700)',
	fontSize: '14px',
	lineHeight: '20px',
	variants: {
		visibility: {
			true: {
				color: 'var(--color-primary-500)'
			}
		}
	}
});

export const IconContainer = styled('div', {
	color: 'var(--color-gray-700)',
	variants: {
		visibility: {
			true: {
				color: 'var(--color-primary-500)'
			}
		}
	}
});

export const LeftRow = styled('div', {
	display: 'flex',
	gap: '8px',
	color: 'var(--color-gray-700)',
	userSelect: 'none',
	variants: {
		visibility: {
			true: {
				color: 'var(--color-primary-500)'
			}
		}
	}
});

export const FieldsParent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	margin: '20px 0',
	overflowY: 'scroll',
	height: '80%',
	transition: 'ease-out 2s all',
	'&::-webkit-scrollbar': {
		display: 'none'
	}
});

export const ContentRowContainer = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	borderRadius: 8,
	padding: '16px',
	backgroundColor: 'var(--color-white)',
	border: '1px solid var(--color-primary-100)',
	cursor: 'pointer',
	variants: {
		visibility: {
			true: {
				backgroundColor: 'var(--color-primary-25)'
			}
		}
	}
});

export const Footer = styled('div', {
	display: 'flex',
	justifyContent: 'flex-end',
	top: 364,
	left: 254
});

export const ContentTitle = styled('div', {
	fontWeight: 400,
	fontSize: '12px',
	width: 344,
	height: 40,
	lineHeight: '18px',
	color: 'var(--color-gray-700)'
});

export const Header = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: '8px'
});

export const TitleContainer = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	alignItems: 'center'
});
export const Title = styled('label', {
	color: 'var(--color-black)',
	fontSize: '18px',
	fontWeight: 600,
	lineHeight: '28px'
});
