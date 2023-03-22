import React, { Ref, forwardRef } from 'react';

import { Hint, Textarea, TextareaContainer, Label } from './textarea.styles';
import type { TextareaProps } from './textarea.types';

export const TextareaComponent = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(props: TextareaProps, forwardedRef: Ref<HTMLTextAreaElement>) => {
		const {
			color,
			disabled = false,
			error = false,
			hint,
			id,
			label,
			placeholder = 'Enter a description...',
			success = false
		} = props;

		return (
			<TextareaContainer disabled={disabled}>
				{label && <Label htmlFor={id}>{label}</Label>}

				<Textarea
					color={color}
					disabled={disabled}
					error={error}
					id={id}
					placeholder={placeholder}
					success={success}
					onChange={
						disabled
							? (event: React.ChangeEvent<HTMLTextAreaElement>) => event.preventDefault()
							: props.onChange
					}
					ref={forwardedRef}
				/>

				{hint && <Hint>{hint}</Hint>}
			</TextareaContainer>
		);
	}
);

export default TextareaComponent;
