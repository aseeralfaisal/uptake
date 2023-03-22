import React from 'react';

export type ProgressStepsProps = {
	color: 'primary' | 'error' | 'gray' | 'warning' | 'success';
	progress: number;
	detailsText?: string;
	descriptionText?: string;
};
