import { TextareaComponent } from '@uptake-ui-textarea';

export function TextareaPage() {
	return (
		<div
			style={{
				display: 'grid',
				gap: '30px',
				gridTemplateColumns: 'repeat(3, 1fr)',
				margin: '50px auto',
				width: '1080px'
			}}
		>
			<TextareaComponent color='primary' id='desc' label='Description' hint='This is a hint text to help user' />
			<TextareaComponent color='primary' error label='Description' hint='This is a hint text to help user' />
			<TextareaComponent color='primary' success label='Description' hint='This is a hint text to help user' />
		</div>
	);
}

export default TextareaPage;
