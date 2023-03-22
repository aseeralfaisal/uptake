import create from 'zustand';

interface ExportExamsState {
    extension: string;
    fields: string[];
    method: string;
    updateExtension: (extension: string) => void;
    updateMethod: (method: string) => void;
}

export const useExportExamsStore = create<ExportExamsState>(set => ({
    extension: null,
    fields: [],
    method: null,
    updateExtension: (extension) => set({ extension }),
    updateMethod: (method) => set({ method }),
}));
