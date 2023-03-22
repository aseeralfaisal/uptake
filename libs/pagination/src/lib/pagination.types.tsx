export type PaginationProps = {
  onChange: (page: number) => void;
  currentPageIndex: number;
  itemsPerPage: number;
  totalItems: number;
  isDisabled: boolean
};
