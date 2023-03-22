export type ChipProps = {
    closable?: boolean;
    color: 'error' | 'gray' | 'primary' | 'success' | 'warning';
    dot?: boolean;
    onClose?: () => void;
    outlined?: boolean;
    size: 'sm' | 'md' | 'lg';
    startIcon?: JSX.Element;
};
