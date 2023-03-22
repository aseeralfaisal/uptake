import { styled } from '@stitches/react';

export const Container = styled('div', {
    background: 'var(--color-white) url("/images/forgot-password-background.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'grid',
    gap: 32,
    gridTemplateColumns: 'repeat(1, 1fr)',
    height: '100vh',
    padding: 30,
    placeContent: 'center',
    placeItems: 'center',
    width: '100%',

    '@media (max-width: 767.98px)': {
        padding: '50px 30px',
        placeContent: 'space-between'
    },

    '@media (max-width: 575.98px)': {
        padding: '50px 30px',
        placeContent: 'space-between'
    }
});

export const BackLink = styled('a', {
    color: 'var(--color-gray-500)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 14,
    fontWeight: 500,
    gap: 8,
    lineHeight: '20px',
    placeContent: 'center',
});
