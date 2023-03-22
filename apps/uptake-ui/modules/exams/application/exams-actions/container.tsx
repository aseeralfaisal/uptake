import { IconButtonComponent } from '@uptake-ui-icon-button';
import Icon from '@uptake-ui-icons';
import type { ExamActionsProps } from './exam-actions.types';
import * as StyledComponents from './styles';

const ExamActionsContainer = ({ onEditClick, onDeleteClick }: ExamActionsProps) => {
	return (
		<StyledComponents.Wrapper>
			<IconButtonComponent
				color='gray'
				plain
				icon={<Icon.Copy />}
				size='sm'
				title='Copy'
			></IconButtonComponent>
			<IconButtonComponent
				color='gray'
				plain
				icon={<Icon.Edit />}
				size='sm'
				title='Edit'
				onClick={onEditClick}
			></IconButtonComponent>
			<IconButtonComponent
				color='gray'
				plain
				icon={<Icon.Delete />}
				size='sm'
				title='Delete'
				onClick={onDeleteClick}
			></IconButtonComponent>
			<IconButtonComponent
				color='gray'
				plain
				icon={<Icon.MoreVertical />}
				size='sm'
				title='More'
			></IconButtonComponent>
		</StyledComponents.Wrapper>
	)
}

export default ExamActionsContainer;