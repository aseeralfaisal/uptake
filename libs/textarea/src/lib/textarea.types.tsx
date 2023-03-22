import React from 'react';

export type TextareaProps = {
	color: 'primary';
	disabled?: boolean;
	error?: boolean;
	hint?: string;
	id?: string;
	label?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	success?: boolean;
}
