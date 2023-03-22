export type CheckboxProps = {
	checked?: boolean;
	disabled?: boolean;
	id: string;
	onChange: (checked: boolean) => void;
	support?: string;
	soft: boolean;
};
