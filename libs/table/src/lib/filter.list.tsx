import { Fragment, useState } from 'react';

import { CheckboxComponent } from '@uptake-ui-checkbox';

import Styled from './filter.list.styles';
import FilterComponent from './filter.component';

export default function FilterMenuItems() {
	const [filterList, setfilterList] = useState([
		{
			label: 'Editors',
			checked: true
		},
		{
			label: 'Fetch Question',
			checked: false
		},
		{
			label: 'Questions',
			checked: false
		},
		{
			label: 'Point',
			checked: false
		},
		{
			label: 'Privacy',
			checked: false
		},
		{
			label: 'Paid or Free',
			checked: false
		}
	]);

	return (
		<div>
			{filterList?.map(({ label, checked }, idx) => {
				return (
					<Fragment key={idx}>
						<Styled.CustomizeItemParent checked={checked}>
							<CheckboxComponent
								soft
								id={idx.toString()}
								checked={checked}
								onChange={(checked: boolean) => {
									const newState = filterList.map((obj, index) => {
										if (idx === index) {
											return { ...obj, checked: checked };
										} else {
											return obj;
										}
									});
									setfilterList(newState);
								}}
							/>
							<Styled.FlexColumn>
								<Styled.TitleLabel>{label}</Styled.TitleLabel>
								<FilterComponent label={label} checked={checked} />
							</Styled.FlexColumn>
						</Styled.CustomizeItemParent>
					</Fragment>
				);
			})}
		</div>
	);
}
