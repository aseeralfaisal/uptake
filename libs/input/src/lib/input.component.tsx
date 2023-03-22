import React, { Ref, forwardRef } from 'react';

import InputErrorIcon from './input-error.icon';

import type { InputProps } from './input.types';
import {
	EndIcon,
	ErrorMessage,
	Hint,
	Input,
	InputContainer,
	InputController,
	InputError,
	Label,
	StartIcon
} from './input.styles';

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
	(props: InputProps, forwardedRef: Ref<HTMLInputElement>) => {
		const {
			disabled = false,
			hint,
			id,
			label,
			error,
			errorMessage,
			startIcon,
			borderLess = false,
			width,
			endIcon,
			soft = false,
			select = false,
			selectHeight = false,
			value,
			...inputProps
		} = props;

		return (
			<InputContainer disabled={disabled}>
				{label && <Label htmlFor={id}>{label}</Label>}

				<InputController selectHeight={selectHeight}>
					{startIcon && <StartIcon soft={soft}>{startIcon}</StartIcon>}

					<Input
						{...inputProps}
						autoCapitalize='off'
						autoComplete='current-password'
						error={error}
						startIcon={!!startIcon}
						id={id}
						borderLess={borderLess}
						onChange={
							disabled
								? (event: React.ChangeEvent<HTMLInputElement>) => event.preventDefault()
								: props.onChange
						}
						ref={forwardedRef}
						spellCheck={false}
						value={value}
						soft={soft}
						select={select}
						onClick={props.onClick}
					/>

					{error && (
						<InputError>
							<InputErrorIcon />
						</InputError>
					)}

					{endIcon && <EndIcon soft={soft}>{endIcon}</EndIcon>}
				</InputController>

				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				{hint && !errorMessage && <Hint>{hint}</Hint>}
			</InputContainer>
		);
	}
);

export default InputComponent;
