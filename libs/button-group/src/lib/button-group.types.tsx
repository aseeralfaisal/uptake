import React from "react";

type Button = {
	disabled?: boolean;
	message: string | React.ReactNode;
	value: string;
}

export type ButtonGroupProps = {
	buttons: Button[];
	disabled?: boolean;
	id?: string;
	onChange: (value: string) => void;
};
