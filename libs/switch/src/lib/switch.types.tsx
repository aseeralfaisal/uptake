export interface SwitchProps {
	checked?: boolean;
	disabled?: boolean;
	id: string;
	required?: boolean;
	size: 'sm' | 'md';
    onChange: (checked: boolean) => void;
    support?: string;
}
