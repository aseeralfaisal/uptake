import { styled } from '@stitches/react';

export const Separator = styled('span', {
	color: 'var(--color-gray-300)',
	lineHeight: '20px',
	width: '8px',
	height: '20px'
});

export const PathLabel = styled('div', {
	borderRadius: 6,
	color: 'var(--color-gray-500)',
	fontSize: 12,
	fontWeight: 500,
	lineHeight: '20px',
});

export const Container = styled('div', {
    alignItems: 'center',
    display: 'flex',
    gap: 8,
    justifyContent:'center',
    height: '100%',

    [`& ${PathLabel}:last-child`]: {
        backgroundColor: 'var(--color-gray-50)',
        color: 'var(--color-gray-700)',
        padding: '4px 8px'
    },
});
