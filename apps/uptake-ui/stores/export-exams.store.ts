import create from 'zustand';

interface ExportExamsState {
    type: string;
    fields: string[];
    changeFileType: (type: string) => void;
}

export const useExportExamsStore = create<ExportExamsState>(set => ({
    type: null,
    fields: [],
    changeFileType: (type) => set({ type })
}));
