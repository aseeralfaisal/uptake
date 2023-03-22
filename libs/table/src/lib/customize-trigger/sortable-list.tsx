import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import * as Styled from './styles';
import Icon from '@uptake-ui-icons';

export function SortableItem(props) {
	const { visibility, icon, switchComponent, id, index } = props;
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	};

	const [currentIndex, setCurrentIndex] = useState(null);

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			onMouseEnter={() => setCurrentIndex(index)}
			onMouseLeave={() => setCurrentIndex(null)}
		>
			<Styled.ContentRowContainer visibility={visibility}>
				<Styled.LeftRow visibility={visibility}>
					{currentIndex === index ? <Icon.Drag /> : icon}
					<Styled.ContentRowTitle visibility={visibility}>{id}</Styled.ContentRowTitle>
				</Styled.LeftRow>
				{switchComponent}
			</Styled.ContentRowContainer>
		</div>
	);
}
