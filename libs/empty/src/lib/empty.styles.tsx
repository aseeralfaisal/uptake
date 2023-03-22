import { styled } from '@stitches/react';

export const EmptyContainer = styled('div', {
	alignItems: 'center',
	borderColor: 'var(--color-gray-200)',
	borderRadius: 8,
	borderStyle: 'solid',
	borderWidth: 1,
	display: 'flex',
	flexDirection: 'column',
	gap: 24,
	justifyContent: 'center',
	minHeight: 200,
	padding: 40
});

export const EmptyIconSection = styled('div', {
	backgroundColor: 'var(--color-error-100)',
	borderRadius: 28,
	boxShadow: '0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-error-50)',
	color: 'var(--color-error-600)',
	display: 'grid',
	height: 48,
	placeContent: 'center',
	width: 48
});

export const EmptyContent = styled('div', {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	textAlign: 'center'
});

export const EmptyTitle = styled('h6', {
	color: 'var(--color-gray-900)',
	fontSize: 16,
	fontWeight: '600',
	lineHeight: '24px'
});

export const EmptyMessage = styled('p', {
	color: 'var(--color-gray-600)',
	fontSize: 14,
	fontWeight: '400',
	lineHeight: '20px'
});

export const EmptyActions = styled('div', {
	alignItems: 'center',
	display: 'flex',
	gap: 12,
	justifyContent: 'center',
});
