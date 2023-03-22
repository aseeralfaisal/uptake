import { ButtonComponent } from '@uptake-ui-button';
import { useEffect, useState } from 'react';
import PaginationNextIcon from './pagination-next.icon';
import PaginationPreviousIcon from './pagination-previous.icon';
import { Paginator, PaginatorContainer } from './pagination.styles';
import type { PaginationProps } from './pagination.types';

export const PaginationComponent = (props: PaginationProps) => {
	const { itemsPerPage = 10, onChange, totalItems = 0, currentPageIndex, isDisabled = false } = props;

	const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage));
	const [currentPage, setCurrentPage] = useState(currentPageIndex);
	useEffect(() => {
		setTotalPages(Math.ceil(totalItems / itemsPerPage));
	}, [itemsPerPage, totalItems]);

	useEffect(() => {
		setCurrentPage(currentPageIndex)
	}, [currentPageIndex])

	const handlePageClick = (event: { selected: number }) => {
		const { selected } = event;
		setCurrentPage(selected)
		onChange(selected);
	};

	return (
		<PaginatorContainer>
			<Paginator
				disableInitialCallback={true}
				activeClassName='active'
				breakClassName={`page-item ${isDisabled && 'disabled'}`}
				breakLabel='...'
				initialPage={currentPage}
				breakLinkClassName='page-link'
				marginPagesDisplayed={3}
				nextLabel={
					<ButtonComponent
						color='gray'
						disabled={totalItems === 0 || currentPage === totalPages - 1 || isDisabled}
						endIcon={<PaginationNextIcon />}
						size='sm'
						outlined
					>
						Next
					</ButtonComponent>
				}
				nextLinkClassName={`page-link`}
				onPageChange={handlePageClick}
				pageClassName={`page-item ${isDisabled && 'disabled'}`}
				pageCount={totalPages}
				pageLinkClassName='page-link'
				pageRangeDisplayed={3}
				previousLabel={
					<ButtonComponent
						color='gray'
						disabled={totalItems === 0 || currentPage === 0 || isDisabled}
						size='sm'
						startIcon={<PaginationPreviousIcon />}
						outlined
					>
						Previous
					</ButtonComponent>
				}
				previousLinkClassName={`page-link`}
			/>
		</PaginatorContainer>
	);
};

export default PaginationComponent;
