import { styled } from '@stitches/react';

export const Header = styled('div', {
    alignItems: 'center',
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'auto 40px',
    height: 70,
    padding: '0 24px',
});

export const Title = styled('h5', {
    fontWeight: 500,
    color: 'var(--color-gray-800)',
    fontSize: 18,
    lineHeight: '28px'
});

export const Container = styled('div', {
    alignItems: 'flex-start',
    backgroundColor: 'var(--color-white)',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    height: 'calc(100% - 140px)',
    justifyContent: 'flex-start',
    overflow: 'auto',
    padding: '12px 24px',
    width: '100%',
});

export const Footer = styled('div', {
    alignItems: 'center',
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(2, 1fr)',
    height: 70,
    padding: '0 24px',
});
