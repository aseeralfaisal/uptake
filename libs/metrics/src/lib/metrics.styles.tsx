import { styled } from '@stitches/react';

const MetricsContainer = styled('div', {
	alignItems: 'center',
	backgroundColor: 'var(--color-white)',
	borderColor: 'var(--color-gray-200)',
	borderRadius: 12,
	borderStyle: 'solid',
	borderWidth: 1,
	boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
	display: 'flex',
	flexDirection: 'row',
	gap: 16,
	justifyContent: 'space-between',
	padding: '20px 24px'
});

const MetricsContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 4
});

const MetricsTitle = styled('h6', {
	color: 'var(--color-gray-500)',
	fontSize: 14,
	fontWeight: 500,
	lineHeight: '20px'
});

const MetricsCounter = styled('h1', {
	color: 'var(--color-gray-800)',
	fontSize: 20,
	fontWeight: 500,
	lineHeight: '30px'
});

export default {
    MetricsContainer,
    MetricsContent,
    MetricsTitle,
    MetricsCounter,
}
