import { styled } from '@stitches/react';

const InputsParent = styled('div', {
	display: 'flex',
	gap: 13
});

const CustomizeItemParent = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	padding: '16px',
	margin: '8px 0',
	width: '381px',
	height: '112px',
	background: 'var(--color-white)',
	borderRadius: '8px',
	border: '1px solid var(--color-gray-200)',
	transition: '0.2s ease-out all',
	variants: {
		checked: {
			false: {
				height: '52px',
				alignItems: 'center'
			}
		}
	}
});

const FlexColumn = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',
	padding: 0,
	gap: '16px',
	width: '313px',
	height: '80px'
});

const TitleLabel = styled('span', {
	fontSize: '14px',
	lineHeight: '20px',
	fontWeight: 500,
	color: 'var(--color-gray-700)'
});

export default {
	InputsParent,
	CustomizeItemParent,
	FlexColumn,
	TitleLabel
}
