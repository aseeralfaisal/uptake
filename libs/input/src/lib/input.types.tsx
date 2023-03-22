import React from 'react';

export type InputProps = {
	endIcon?: JSX.Element;
	startIcon?: JSX.Element;
	disabled?: boolean;
	endIconClassName?: string;
	error?: boolean;
	hint?: string;
	id?: string;
	label?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: () => void;
	placeholder?: string;
	startIconClassName?: string;
	success?: boolean;
	type: 'email' | 'number' | 'password' | 'search' | 'text' | 'url';
	width?: number;
	height?: number;
	errorMessage?: string;
	borderLess?: boolean;
	soft?: boolean;
	select?: boolean;
	selectHeight?: boolean;
	value?: string;
};
