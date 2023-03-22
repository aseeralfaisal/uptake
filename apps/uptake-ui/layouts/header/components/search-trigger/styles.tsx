import { keyframes, styled } from '@stitches/react';

import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';

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

export const TooltipContent = styled(Tooltip.Content, {
    backgroundColor: 'var(--color-gray-900)',
    borderRadius: 8,
    boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    color: 'var(--color-white)',
    fontSize: 12,
    padding: '8px 12px',
    zIndex: 15,

    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',

        '&[data-state="delayed-open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade }
        }
    }
});

export const PopoverTrigger = styled(Popover.Trigger, {
    all: 'unset',
    alignItems: 'center',
    backgroundColor: 'var(--color-gray-100)',
    borderColor: 'var(--color-gray-100)',
    borderRadius: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
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
        backgroundColor: 'var(--color-gray-200)',
        borderColor: 'var(--color-gray-200)'
    },

    '&[aria-expanded="true"]': {
        backgroundColor: 'var(--color-gray-300)',
        borderColor: 'var(--color-gray-300)',
        color: 'var(--color-gray-800)'
    }
});

export const PopoverContent = styled(Popover.Content, {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gray-50)',
    borderRadius: 8,
    boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    height: 600,
    padding: 0,
    width: 500,

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
    display: 'grid',
});

export const RecentSearch = styled('div', {
    alignItems: 'center',
    borderBottom: '1px solid var(--color-gray-25)',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: 10,
    justifyContent: 'stretch',
    padding: '0 16px',
    position: 'relative'
});

export const RecentSearchTop = styled('div', {
    color: 'var(--color-gray-600)',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '18px',
    width: '100%'
});

export const RecentSearchBottom = styled('div', {
    display: 'grid',
    overflow: 'auto',
    scrollbarWidth: 'none',
    width: '100%',

    '&::-webkit-scrollbar': {
        display: 'none'
    }
});

export const RecentSearchKeywords = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    width: '100%'
});

export const Content = styled('div', {
    height: 420,
    margin: '10px 0'
});

export const Footer = styled('div', {
    alignItems: 'center',
    borderTop: '1px solid var(--color-gray-200)',
    display: 'grid',
    gridTemplateColumns: '75px auto',
    height: 50,
    justifyContent: 'stretch',
    position: 'relative'
});

export const FooterLeft = styled('div', {
    alignItems: 'center',
    color: 'var(--color-gray-600)',
    display: 'flex',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    position: 'relative',
    width: '100%'
});

export const FooterRight = styled('div', {
    display: 'grid',
    overflow: 'auto',
    scrollbarWidth: 'none',
    width: '100%',

    '&::-webkit-scrollbar': {
        display: 'none'
    }
});

export const FooterRightModules = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    width: '100%'
});


// INPUT

export const InputContainer = styled('fieldset', {
    height: '100px'
});

export const Label = styled('label', {
    color: 'var(--color-gray-700)',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '24px'
});

export const InputController = styled('div', {
    height: 60,
    position: 'relative',
    width: '100%'
});

export const StartIcon = styled('div', {
    alignItems: 'center',
    color: 'var(--color-gray-900)',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: 40
});

export const Input = styled('input', {
    alignItems: 'center',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'var(--color-gray-200)',
    color: 'var(--color-gray-900)',
    cursor: 'default',
    display: 'flex',
    fontFamily: 'var(--font-family)',
    fontSize: 14,
    fontWeight: 400,
    gap: 8,
    height: '100%',
    justifyContent: 'center',
    lineHeight: '24px',
    outline: 'none',
    padding: '10px 14px 10px 40px',
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    width: '100%',

    '&:placeholder': {
        color: 'var(--color-gray-500)'
    }
});

export const Hint = styled('span', {
    color: 'var(--color-gray-500)',
    cursor: 'default',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '20px'
});

export const ErrorMessage = styled('span', {
    color: 'var(--color-error-500)',
    cursor: 'default',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '20px'
});
