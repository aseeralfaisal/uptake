import { styled } from '@stitches/react';

export const Container = styled('div', {
    alignItems: 'center',
    backgroundColor: 'var(--color-white)',
    borderBottom: '1px solid var(--color-gray-200)',
    display: 'flex',
    height: 56,
    justifyContent: 'space-between',
    padding: 16,
    position: 'sticky',
    top: 0,
    zIndex: 10
});

export const LeftPanel = styled('div', {
    display: 'flex',
    flexDirection: 'column'
});

export const Title = styled('h6', {
    color: 'var(--color-gray-800)',
    fontFamily: 'inherit',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '30px'
});

export const Description = styled('p', {
    color: 'var(--color-gray-500)',
    fontFamily: 'inherit',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px'
});

export const RightPanel = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 12
});
