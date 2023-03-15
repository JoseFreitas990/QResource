import { create } from 'zustand';

interface DataState {
  generatingData: string;
  updateData: (data: string) => void;
  clearData: () => void;
}

const useStore = create<DataState>((set) => ({
  generatingData: '',
  updateData: (data: string) => set((state: any) => ({ generatingData: data })),
  clearData: () => set({ generatingData: '' }),
}));

export default useStore;
