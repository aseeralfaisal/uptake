import { useState } from 'react';

import { PaginationComponent } from '@uptake-ui-pagination';

export default function LoadingPage() {
	const [currentPage, setCurrentPage] = useState(0);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(1, 1fr)',
				gap: '30px',
				placeContent: 'center',
				margin: '50px auto',
				width: '1080px'
			}}
		>
			<PaginationComponent
				itemsPerPage={10}
				onChange={handlePageChange}
				totalItems={133}
			/>
		</div>
	);
}
