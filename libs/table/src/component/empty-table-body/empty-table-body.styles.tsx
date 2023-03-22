import { styled } from '@stitches/react';

const EmptyTableBody = styled('tbody', {
    tr: {
        height: '400px'
    },
});

const InfoTitle = styled('h5', {
    color: 'var(--color-gray-800)',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    marginBottom: 4,
    marginTop: 16
});

const InfoSubTitle = styled('h5', {
    color: 'var(--color-gray-600)',
    fontSize: 14,
    lineHeight: '20px',
    marginBottom: 16,
    fontWeight: 400,
    textAlign: 'center'
});

const EmptyContentWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const CenterContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 372
});

export default {
    CenterContent,
    EmptyContentWrapper,
    EmptyTableBody,
    InfoSubTitle,
    InfoTitle,
}
