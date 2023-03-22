import React from 'react';

export type ExamActionsProps = {
	onDeleteClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onEditClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
