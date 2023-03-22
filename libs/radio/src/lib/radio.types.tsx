export type RadioProps = {
    disabled?: boolean;
    id: string;
    onChange: (value: string) => void;
    required?: boolean;
    support?: string;
    value: string;
};