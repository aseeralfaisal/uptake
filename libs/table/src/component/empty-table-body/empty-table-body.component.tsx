import Icon from '@uptake-ui-icons';
import { ButtonComponent } from '@uptake-ui-button';
import { IconBubble } from '@uptake-ui-icon-bubble';

import type { EmptyTableBodyProps } from './empty-table-body.types';

import StyledComponents from './empty-table-body.styles';

export default function EmptyTableBodyComponent(props: EmptyTableBodyProps) {
	const { searchQuery = '' } = props;

	return (
		<StyledComponents.EmptyTableBody>
			<tr>
				<td>
					<StyledComponents.EmptyContentWrapper>
						<StyledComponents.CenterContent>
							<IconBubble color='error'>
								{searchQuery ? <Icon.SearchStatus /> : <Icon.Dropbox />}
							</IconBubble>
							<StyledComponents.InfoTitle>
								{searchQuery ? `No search result found for “${searchQuery}”` : 'No data found'}{' '}
							</StyledComponents.InfoTitle>
							<StyledComponents.InfoSubTitle>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
								consequat.
							</StyledComponents.InfoSubTitle>
							{searchQuery ? (
								<ButtonComponent size='md' outlined color='gray'>
									Clear search
								</ButtonComponent>
							) : (
								<ButtonComponent size='md' color='primary' startIcon={<Icon.Plus />}>
									Create exam
								</ButtonComponent>
							)}
						</StyledComponents.CenterContent>
					</StyledComponents.EmptyContentWrapper>
				</td>
			</tr>
		</StyledComponents.EmptyTableBody>
	);
}
