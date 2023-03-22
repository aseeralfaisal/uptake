interface CheckerItem {
	name: string;
	checked: boolean;
}
export type MultipleCheckerList = {
	list: CheckerItem[];
};

export type MultipleCheckerListProps = {
	list: CheckerItem[];
	setList: (value: CheckerItem[]) => void;
};
