export type BadgeGroupProps = {
	color: 'error' | 'gray' | 'primary' | 'success' | 'warning';
	content: string;
	href?: string;
	leading?: boolean;
	outlined?: boolean;
	plain?: boolean;
	shallow?: boolean;
	size: 'md' | 'lg';
	soft?: boolean;
	title?: string;
	trailing?: boolean;
};
