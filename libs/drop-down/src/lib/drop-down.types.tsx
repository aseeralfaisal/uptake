export type DropDownOption = {
	content: JSX.Element;
    disabled?: boolean;
    onSelect: () => void;
};

export type DropDownProps = {
	align?: 'start' | 'center' | 'end';
	color: 'error' | 'gray' | 'primary' | 'success';
    disabled?: boolean,
	options: DropDownOption[];
	size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	outlined?: boolean;
	plain?: boolean;
	soft?: boolean;
	side?: 'top' | 'right' | 'bottom' | 'left';
};
