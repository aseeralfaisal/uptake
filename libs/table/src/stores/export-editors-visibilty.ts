import create from 'zustand';

interface EditorsVisibilityType {
	editorsVisibility: boolean;
	setEditorsVisibility: (bool: boolean) => void;
}
export const editorsVisibilityState = create<EditorsVisibilityType>((set) => ({
	editorsVisibility: false,
	setEditorsVisibility: (bool: boolean) => set((state) => ({ editorsVisibility: bool }))
}));
