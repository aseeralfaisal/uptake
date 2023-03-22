export type AvatarProps = {
	href?: string;
	online?: boolean;
	shallow?: boolean;
	size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	src?: string;
    title?: string;
    titleSide?: 'top' | 'right' | 'bottom' | 'left',
};
