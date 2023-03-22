import { styled } from '@stitches/react';

type ChipCloseIconProps = {
	dimension?: number;
	onClick?: () => void;
};

const SVG = styled('svg', {
	cursor: 'pointer'
});

export default function ChipCloseIcon(props: ChipCloseIconProps) {
	return (
		<SVG width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M9 3L3 9M3 3L9 9'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</SVG>
	);
}
