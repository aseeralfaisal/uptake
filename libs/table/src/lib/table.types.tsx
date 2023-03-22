interface ButtonsType {
	message: string;
	value: string;
}
interface ColumnTypes {
	cell: (info: object) => void;
	header: () => HTMLSpanElement;
	id: string;
	size: number;
}

interface DataType {
	check: boolean;
	created: Date;
	duration: string;
	name: {
		title: string;
		subtitle: string;
	};
	points: number;
	questions: number;
	status: string;
	privacy: string;
	questionsFetched: number;
	paymentStatus: string;
	editors: string[];
	actions: { enabled: boolean; link: string; id: string };
	lastModified: Date;
}

interface FiltersType {
	title: string;
}
interface HeaderButton {
	message: string;
	value: string;
	visible: boolean;
}
interface PageInfo {
	currentPageIndex: number;
	isDisabled: boolean;
	itemsPerPage: number;
	onChange: (page: number) => void;
	totalItems: number;
}

interface Field {
	id: string;
	icon: JSX.Element;
	visibility: boolean;
}

export type TableProps = {
	columns: ColumnTypes[];
	buttonGroupEvent: (v: string) => void;
	data: DataType[];
	buttons: ButtonsType[];
	datePickerEvent: () => void;
	searchEvent: (target: object) => void;
	customizeEvent: () => void;
	filterEvent: () => void;
	filters: FiltersType[];
	headerButtons: HeaderButton[];
	isLoading: boolean;
	pageInfo: PageInfo[];
	fields: Field[];
	setFields: (value: Field[]) => void;
};
