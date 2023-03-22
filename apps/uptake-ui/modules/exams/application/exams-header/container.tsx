import Icon from '@uptake-ui-icons';
import { BreadcrumbComponent } from '@uptake-ui-breadcrumb';
import { ButtonComponent } from '@uptake-ui-button';

import ExportExamsContainer from '@modules/exams/application/export-exams/container';

import * as StyledComponents from './styles';

const ExamsHeaderContainer = () => {
	const paths = [
		{ to: '/', label: 'Exams' },
		{ to: '/2', label: 'Overview' }
	];

	return (
		<StyledComponents.Container>
			<StyledComponents.LeftPanel>
				<BreadcrumbComponent paths={paths} />
			</StyledComponents.LeftPanel>

			<StyledComponents.RightPanel>
				<ExportExamsContainer />
				<ButtonComponent color='gray' outlined size='md' startIcon={<Icon.Import />}>
					Import
				</ButtonComponent>
				<ButtonComponent size='md' color='primary' startIcon={<Icon.Plus />}>
					Create exam
				</ButtonComponent>
			</StyledComponents.RightPanel>
		</StyledComponents.Container>
	);
};

export default ExamsHeaderContainer;
