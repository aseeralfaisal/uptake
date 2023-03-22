import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'grid',
    gap: 30,
    gridTemplateColumns: 'repeat(1, 1fr)',
    width: '100%',
});

export const RadioGroup = styled('div', {
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(1, 1fr)',
    width: '100%',
});
