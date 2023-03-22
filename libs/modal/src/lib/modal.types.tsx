export type ModalProps = {
    content: JSX.Element;
    footer: JSX.Element;
    header: JSX.Element;
    isOpen: boolean;
    onClose: () => void;
};