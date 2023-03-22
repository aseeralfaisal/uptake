import { keyframes, styled } from '@stitches/react';

import * as Popover from '@radix-ui/react-popover';

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-10px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(10px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const PopoverTrigger = styled(Popover.Trigger, {
    all: 'unset',
    alignItems: 'center',
    borderRadius: '100%',
    boxSizing: 'border-box',
    color: 'var(--color-gray-700)',
    cursor: 'pointer',
    display: 'flex',
    gap: 8,
    height: 40,
    justifyContent: 'center',
    outline: 'none',
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    width: 40,

    '&:disabled': {
        backgroundColor: 'var(--color-gray-25)',
        borderColor: 'var(--color-gray-25)',
        color: 'var(--color-gray-300)',
        cursor: 'not-allowed',

        '&:hover': {
            backgroundColor: 'var(--color-gray-25)',
            borderColor: 'var(--color-gray-25)'
        }
    },

    '&:hover': {
        backgroundColor: 'var(--color-gray-100)',
        borderColor: 'var(--color-gray-100)'
    },

    '&[data-state="open"]': {
        backgroundColor: 'var(--color-gray-50)',
        borderColor: 'var(--color-gray-300)',
        boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
    }
});

export const PopoverContent = styled(Popover.Content, {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gray-50)',
    borderRadius: 8,
    boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
    color: 'var(--color-gray-600)',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    fontWeight: 400,
    gap: 4,
    minWidth: 250,
    padding: 8,
    zIndex: 12,

    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',

        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade },
        },
    },

    hr: {
        width: '100%',
        height: 1,
        backgroundColor: 'var(--color-gray-200)',
    }
});

export const QuickAddItem = styled('span', {
    alignItems: 'center',
    backgroundColor: 'var(--color-white)',
    borderRadius: 8,
    color: 'var(--color-gray-700)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 14,
    gap: 12,
    height: 40,
    lineHeight: '20px',
    padding: '0 12px',
    transition: 'all .2s ease-in-out',

    '&:hover': {
        backgroundColor: 'var(--color-gray-100)',
    },
});

export const Arrow = styled(Popover.Arrow, {
    fill: 'var(--color-white)',
    height: 8,
    width: 16,
});
