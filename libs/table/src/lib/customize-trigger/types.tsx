interface TriggerProps {
	id: string;
	icon: JSX.Element;
	visibility: boolean;
}
interface buttons {
	message: string;
	value: string;
	visible: boolean;
}
export type CustomizeTriggerProps = {
	fields: TriggerProps[];
	headerButtons: buttons[];
	FilterMenuItems: () => JSX.Element;
	setFields: (value: TriggerProps[]) => void;
};
