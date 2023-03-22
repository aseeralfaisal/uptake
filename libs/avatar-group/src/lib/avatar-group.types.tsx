export type AvatarGroupProps = {
	add?: boolean;
	avatars?: string[];
	color?: 'gray' | 'primary';
	disabled?: boolean;
	limit: number;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	size: 'xs' | 'sm' | 'md';
};
