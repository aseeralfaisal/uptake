import { keyframes, styled } from '@stitches/react';

export const shimmer = keyframes({
    '0%': { backgroundColor: 'var(--color-gray-50)' },
    '100%': { backgroundColor: 'var(--color-gray-200)' }
});

export const Skeleton = styled('div', {
    alignItems: 'center',
    borderRadius: 8,
    cursor: 'default',
    display: 'grid',
    gap: 12,
    gridTemplateColumns: '40px auto',
    padding: 8,
    placeItems: 'stretch',
    position: 'relative',
    transition: 'all .2s ease-in-out',
});

export const SkeletonAvatar = styled('div', {
    animation: `${shimmer} 1s linear infinite alternate`,
    backgroundColor: 'var(--color-gray-50)',
    borderRadius: '100%',
    height: 40,
    position: 'relative',
    width: 40
});

export const SkeletonContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    position: 'relative',
    width: '100%',
});

export const SkeletonTitle = styled('div', {
    animation: `${shimmer} 1s linear infinite alternate`,
    backgroundColor: 'var(--color-gray-50)',
    borderRadius: 6,
    height: 25,
    position: 'relative',
    width: '100%'
});

export const SkeletonTime = styled('div', {
    animation: `${shimmer} 1s linear infinite alternate`,
    backgroundColor: 'var(--color-gray-50)',
    borderRadius: 4,
    height: 15,
    position: 'relative',
    width: '50%'
});
