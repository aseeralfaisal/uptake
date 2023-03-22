import React from 'react';

import Icon from '@uptake-ui-icons';
import { editorsVisibilityState } from '../stores/export-editors-visibilty';
import { InputComponent } from '@uptake-ui-input';
import { RadioComponent } from '@uptake-ui-radio';

import Styled from './filter.list.styles'

export const FilterComponent = ({ label, checked }: { label: string; checked: boolean }) => {
	const editorsVisibility = editorsVisibilityState(({ editorsVisibility }) => editorsVisibility);
	const setEditorsVisibility = editorsVisibilityState(({ setEditorsVisibility }) => setEditorsVisibility);

	if (label === 'Editors' && checked) {
		return (
			<InputComponent
				soft
				select
				selectHeight
				startIcon={<Icon.Search />}
				endIcon={<Icon.DownArrow />}
				placeholder='Selected editors'
				type='search'
				onClick={() => setEditorsVisibility(!editorsVisibility)}
			/>
		);
	}
	if (label === 'Fetch Question' && checked) {
		return (
			<Styled.InputsParent>
				<InputComponent soft select selectHeight width={150} placeholder='Min.' type='search' />
				<InputComponent soft select selectHeight width={150} placeholder='Max.' type='search' />
			</Styled.InputsParent>
		);
	}
	if (label === 'Questions' && checked) {
		return (
			<Styled.InputsParent>
				<InputComponent soft select selectHeight width={150} placeholder='Min.' type='search' />
				<InputComponent soft select selectHeight width={150} placeholder='Max.' type='search' />
			</Styled.InputsParent>
		);
	}
	if (label === 'Point' && checked) {
		return (
			<Styled.InputsParent>
				<InputComponent soft select selectHeight width={150} placeholder='Min.' type='search' />
				<InputComponent soft select selectHeight width={150} placeholder='Max.' type='search' />
			</Styled.InputsParent>
		);
	}
	if (label === 'Privacy' && checked) {
		return (
			<Styled.InputsParent>
				<RadioComponent id='r1' onChange={(e) => console.log(e)} value='value'>
					<label style={{ fontSize: 14 }}>Public</label>
				</RadioComponent>

				<RadioComponent id='r2' onChange={(e) => console.log(e)} value='value'>
					<label style={{ fontSize: 14 }}>Private</label>
				</RadioComponent>
			</Styled.InputsParent>
		);
	}
	if (label === 'Paid or Free' && checked) {
		return (
			<Styled.InputsParent>
				<RadioComponent id='r1' onChange={(e) => console.log(e)} value='value'>
					<label style={{ fontSize: 14 }}>Paid</label>
				</RadioComponent>
				<RadioComponent id='r2' onChange={(e) => console.log(e)} value='value'>
					<label style={{ fontSize: 14 }}>Free</label>
				</RadioComponent>
			</Styled.InputsParent>
		);
	}
	return null;
};

export default FilterComponent;
