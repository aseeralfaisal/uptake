import * as Styled from './multiple-checker-list.styles';
import Icon from '@uptake-ui-icons';
import { InputComponent } from '@uptake-ui-input';
import { CheckboxComponent } from '@uptake-ui-checkbox';
import { AvatarComponent } from '@uptake-ui-avatar';
import { MultipleCheckerListProps } from './multiple-checker-list.types';
import { useEffect, useRef, useState } from 'react';
import { editorsVisibilityState } from 'libs/table/src/stores/export-editors-visibilty';

export function MultipleCheckerList(props: MultipleCheckerListProps) {
	const { list, setList } = props;
	const [searchValue, setSearchValue] = useState('');
	const editorRef = useRef<object | null>(null);
	const setEditorsVisibility = editorsVisibilityState(({ setEditorsVisibility }) => setEditorsVisibility);

	const onChangeChecked = (checked: boolean, idx: number) => {
		const newState = list.map((item: { name: string; checked: boolean }, index: number) => {
			if (index === idx) {
				return { ...item, checked: checked };
			}
			return item;
		});
		setList(newState);
	};

	const clearUp = () => {
		setSearchValue('');
		const newList = list.map((item: { name: string; checked: boolean }) => {
			if (item.checked) {
				return { ...item, checked: false };
			}
			return item;
		});
		setList(newList);
	};

	useEffect(() => {
		const handleMouseDown = (event) => {
			if (!editorRef?.current.contains(event.target)) {
				setEditorsVisibility(false);
			}
		};
		document.addEventListener('mousedown', handleMouseDown);
		return () => {
			document.removeEventListener('mousedown', handleMouseDown);
		};
	}, [editorRef]);

	return (
		<Styled.AllEditorsMenu ref={editorRef}>
			<Styled.EditorMenuColum>
				<Styled.HeaderFlex>
					<Styled.EditorMenuHeader>
						<Styled.AllEditorLabel>All Editors</Styled.AllEditorLabel>
						<Styled.ClearLabel onClick={clearUp}>Clear</Styled.ClearLabel>
					</Styled.EditorMenuHeader>
					<Styled.SearchInputComponent>
						<InputComponent
							soft
							select
							selectHeight
							startIcon={<Icon.Search />}
							placeholder='Search'
							type='search'
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					</Styled.SearchInputComponent>
				</Styled.HeaderFlex>
				<Styled.EditorsListContainer>
					{list
						.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
						.map(({ checked, name }, idx) => {
							return (
								<Styled.CheckBoxContainer soft={checked ? true : false} key={idx}>
									<CheckboxComponent
										children={<AvatarComponent size='sm' />}
										checked={checked}
										support={name}
										soft
										id={idx.toString()}
										onChange={(v: boolean) => onChangeChecked(v, idx)}
									/>
								</Styled.CheckBoxContainer>
							);
						})}
				</Styled.EditorsListContainer>
			</Styled.EditorMenuColum>
		</Styled.AllEditorsMenu>
	);
}

export default MultipleCheckerList;
