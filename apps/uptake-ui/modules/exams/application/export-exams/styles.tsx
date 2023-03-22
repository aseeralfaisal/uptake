import { keyframes, styled } from '@stitches/react';

import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 0.9 }
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

export const Overlay = styled(Dialog.Overlay, {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    backgroundColor: 'var(--color-white)',
    inset: 0,
    opacity: 0.9,
    position: 'fixed',
    zIndex: 20,
});

export const Content = styled(Dialog.Content, {
    '&:focus': { outline: 'none' },
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    backgroundColor: 'var(--color-white)',
    borderRadius: 12,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    height: 600,
    left: '50%',
    maxHeight: 'calc(100% - 150px)',
    padding: 0,
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    zIndex: 25,
});

export const Header = styled('div', {
    alignItems: 'center',
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'auto 40px',
    height: 70,
    padding: '0 24px',
});

export const Title = styled(Dialog.Title, {
    color: 'var(--color-gray-800)',
    fontFamily: 'inherit',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '28px',
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
