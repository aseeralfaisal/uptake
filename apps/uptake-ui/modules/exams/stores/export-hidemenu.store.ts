import create from 'zustand';

interface HideMenuTypes {
	hideMenu: boolean;
	toggleHideMenu: () => void;
}
export const hideMenuState = create<HideMenuTypes>((set) => ({
	hideMenu: false,
	toggleHideMenu: () => set((state: { hideMenu: boolean }) => ({ hideMenu: !state.hideMenu }))
}));

