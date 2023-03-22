import { keyframes, styled } from '@stitches/react';

import * as Popover from '@radix-ui/react-popover';

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-10px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(10px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

export const PopoverContent = styled(Popover.Content, {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gray-50)',
    borderRadius: 8,
    boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
    gap: 12,
    height: 600,
    padding: '8px 16px',
    width: 400,
    zIndex: 12,

    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',

        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade }
        }
    }
});

export const Header = styled('div', {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
});

export const Title = styled('div', {
    color: 'var(--color-gray-800)',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '28px'
});

export const Content = styled('div', {
    height: 480,
});

export const Footer = styled('div', {
    alignItems: 'center',
    borderTop: '1px solid var(--color-gray-200)',
    display: 'flex',
    height: 60,
    justifyContent: 'space-between',
    position: 'relative',
});

export const FooterLeft = styled('div', {
    alignItems: 'center',
    display: 'flex',
    gap: 6,
    justifyContent: 'space-between',
    position: 'relative',
});

export const SettingsButton = styled('button', {
    alignItems: 'center',
    backgroundColor: 'var(--color-transparent)',
    borderColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius)',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: 'none',
    color: 'var(--color-gray-700)',
    cursor: 'pointer',
    display: 'flex',
    gap: 8,
    height: 36,
    justifyContent: 'center',
    outline: 'none',
    padding: 0,
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    width: 36,

    '&:focus': {
        backgroundColor: 'var(--color-transparent)',
        borderColor: 'var(--color-white)',
        boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px var(--color-gray-100)'
    },

    '&:hover': {
        borderColor: 'var(--color-white)',
        backgroundColor: 'var(--color-gray-50)'
    }
});

export const MarkReadLink = styled('a', {
    alignItems: 'center',
    color: 'var(--color-primary-600)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '20px',

    '&:hover': {
        textDecoration: 'underline'
    }
});

export const FooterRight = styled('div', {
    alignItems: 'center',
    display: 'flex',
    gap: 6,
    justifyContent: 'space-between',
    position: 'relative'
});
