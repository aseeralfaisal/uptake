
export type ConfirmationModalProps = {
    isOpen: boolean;
    message: string;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    headerIcon?: JSX.Element;
    confirmButtonLabel: string,
    color?: 'error' | 'primary';
};

