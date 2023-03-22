import create from 'zustand';

interface Editor {
	name: string;
	checked: boolean;
}

interface EditorsList {
	editorsList: Editor[];
	setEditorsList: (list: Editor[]) => void;
}
export const editorsListState = create<EditorsList>((set) => ({
	editorsList: [
		{ name: 'APheonix Baker', checked: true },
		{ name: 'BPheonix Baker', checked: false },
		{ name: 'CPheonix Baker', checked: true },
		{ name: 'DPheonix Baker', checked: false },
		{ name: 'EPheonix Baker', checked: false }
	],
	setEditorsList: (list: Editor[]) => set((state) => ({ editorsList: list }))
}));
