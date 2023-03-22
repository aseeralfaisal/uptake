import { ButtonComponent } from '@uptake-ui-button';
import { EmptyComponent } from '@uptake-ui-empty';

export function PlusIcon() {
	return (
		<svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.5916 4.24854V15.6387M4.89648 9.94364H16.2867'
				stroke='currentColor'
				strokeWidth='1.63043'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export function EmptyPage() {
	return (
		<div
			style={{
				display: 'grid',
				gap: '30px',
				gridTemplateColumns: 'repeat(2, 1fr)',
				margin: '50px auto',
				width: '1080px'
			}}
		>
			<EmptyComponent message='Please try again or create a new exam' title='No exams found'>
				<ButtonComponent color='gray' size='md' outlined>
					Clear search
				</ButtonComponent>
			</EmptyComponent>

			<EmptyComponent message='Please try again or create a new exam' title='No exams found'>
				<ButtonComponent color='primary' size='md' StartIcon={PlusIcon}>
					Create exam
				</ButtonComponent>
			</EmptyComponent>

			<EmptyComponent message='Please try again or create a new exam' title='No exams found'>
				<ButtonComponent color='gray' size='md' outlined>
					Clear search
				</ButtonComponent>
				<ButtonComponent color='primary' size='md' StartIcon={PlusIcon} onClick={() => alert('clicked')}>
					Create exam
				</ButtonComponent>
			</EmptyComponent>
		</div>
	);
}

export default EmptyPage;
