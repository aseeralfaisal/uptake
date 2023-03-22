import { keyframes, styled } from '@stitches/react';

import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';

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

export const TooltipContent = styled(Tooltip.Content, {
    backgroundColor: 'var(--color-gray-900)',
    borderRadius: 8,
    boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    color: 'var(--color-white)',
    fontSize: 12,
    padding: '8px 12px',

    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',

        '&[data-state="delayed-open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade },
        },
    },
});

export const PopoverTrigger = styled(Popover.Trigger, {
    all: 'unset',
    alignItems: 'center',
    backgroundColor: 'var(--color-primary-50)',
    borderColor: 'var(--color-primary-50)',
    borderRadius: 'var(--border-radius)',
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
    boxSizing: 'border-box',
    color: 'var(--color-primary-700)',
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
        backgroundColor: 'var(--color-primary-25)',
        borderColor: 'var(--color-primary-25)',
        color: 'var(--color-primary-300)',
        cursor: 'not-allowed',

        '&:hover': {
            backgroundColor: 'var(--color-primary-25)',
            borderColor: 'var(--color-primary-25)'
        }
    },

    '&:hover': {
        backgroundColor: 'var(--color-primary-100)',
        borderColor: 'var(--color-primary-100)'
    },

    '&[aria-expanded="true"]': {
        backgroundColor: 'var(--color-primary-50)',
        borderColor: 'var(--color-primary-300)',
        boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-primary-100)'
    }
});

export const PopoverContent = styled(Popover.Content, {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gray-50)',
    borderRadius: 8,
    boxShadow: '0 0 64px 12px rgba(16, 24, 40, 0.14)',
    color: 'var(--color-gray-600)',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    fontWeight: 400,
    gap: 4,
    minWidth: 230,
    padding: 8,
    zIndex: 15,

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
});

export const QuickAddItem = styled('div', {
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
    }
});

export const Arrow = styled(Popover.Arrow, {
    fill: 'var(--color-white)',
    height: 8,
    width: 16,
});
