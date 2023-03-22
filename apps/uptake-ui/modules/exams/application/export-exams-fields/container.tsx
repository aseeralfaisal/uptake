import React from 'react';

import { ButtonGroupComponent } from '@uptake-ui-button-group';
import { CheckboxComponent } from '@uptake-ui-checkbox';

const ExportExamsFieldsContainer: React.FC = () => {
	return (
		<div style={{ width: '100%' }}>
			<span style={{ color: 'var(--color-gray-800)', fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
				Select fields
			</span>
			<ButtonGroupComponent
				buttons={[
					{ message: 'Select all', value: 'selectAll' },
					{
						message: 'Unselect all',
						value: 'unSelectAll'
					}
				]}
				onChange={() => {}}
			/>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gap: 12,
					marginTop: 16
				}}
			>
				<CheckboxComponent onChange={() => console.warn('checked')} id='name'>
					Name
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='status'>
					Status
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='questions'>
					Questions
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='questions'>
					Questions fetched
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='points'>
					Points
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='duration'>
					Duration
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='duration'>
					Privacy
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='editors'>
					Editors
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='editors'>
					Payment
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='created'>
					Date created
				</CheckboxComponent>
				<CheckboxComponent onChange={() => console.warn('checked')} id='created'>
					Last modified
				</CheckboxComponent>
			</div>
		</div>
	);
};

export default ExportExamsFieldsContainer;
