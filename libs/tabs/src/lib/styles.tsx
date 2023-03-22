import { styled } from '@stitches/react';
import * as Tabs from '@radix-ui/react-tabs';

export const TabsList = styled(Tabs.List, {
    display: 'inline-flex',
    gap: 8,
    justifyContent: 'flex-start',
    overflow: 'auto',
    scrollbarWidth: 'none',
    width: '100%',

    '&::-webkit-scrollbar': {
        display: 'none'
    },

    variants: {
        bordered: {
            true: {
                borderBottom: '1px solid var(--color-gray-200)',
                gap: 16,
            }
        },
        centered: {
            true: {
                justifyContent: 'space-evenly'
            }
        }
    }
});

export const TabTrigger = styled(Tabs.Trigger, {
    all: 'unset',
    alignItems: 'center',
    borderRadius: 6,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    height: '100%',
    justifyContent: 'center',
    transition: 'all .2s ease-in-out',

    variants: {
        centered: {
            true: {
                width: '100%'
            }
        },
        color: {
            gray: {},
            primary: {}
        },
        soft: { true: {} },
        size: {
            sm: {
                fontSize: 14,
                fontWeight: 500,
                height: 36,
                lineHeight: '20px',
                padding: '0 12px'
            },
            md: {
                fontSize: 14,
                fontWeight: 500,
                height: 44,
                lineHeight: '20px',
                padding: '0 12px'
            }
        },
        bordered: {
            true: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 0,
            }
        },
    },

    compoundVariants: [
        {
            color: 'gray',
            soft: true,
            css: {
                color: 'var(--color-gray-500)',

                '&[data-state="active"]': {
                    backgroundColor: 'var(--color-gray-50)',
                    color: 'var(--color-gray-700)'
                }
            }
        },
        {
            color: 'gray',
            bordered: true,
            css: {
                borderBottom: '2px solid var(--color-transparent)',
                color: 'var(--color-gray-500)',

                '&[data-state="active"]': {
                    borderBottom: '2px solid var(--color-gray-700)',
                    color: 'var(--color-gray-700)'
                }
            }
        },
        {
            color: 'primary',
            soft: true,
            css: {
                color: 'var(--color-gray-500)',

                '&[data-state="active"]': {
                    backgroundColor: 'var(--color-primary-50)',
                    color: 'var(--color-primary-700)'
                }
            }
        },
        {
            color: 'primary',
            bordered: true,
            css: {
                borderBottom: '2px solid var(--color-transparent)',
                color: 'var(--color-gray-500)',

                '&[data-state="active"]': {
                    borderBottom: '2px solid var(--color-primary-700)',
                    color: 'var(--color-primary-700)'
                }
            }
        }
    ]
});

export const TabContent = styled(Tabs.Content, {
    marginTop: 16
});
