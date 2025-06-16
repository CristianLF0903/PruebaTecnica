// store/useDialogStore.ts
import { create } from 'zustand'

interface DialogState {
  content: React.ReactNode | null
  isOpen: boolean,
  showDialog: () => void
  hiddenDialog: () => void
  setContent: (node: React.ReactNode) => void
  clearContent: () => void
}

export const useDialogStore = create<DialogState>((set) => ({
  content: null,
  isOpen: false,
  showDialog: () => set({isOpen: true}),
  hiddenDialog: () => set({isOpen: false}),
  setContent: (node) => set({ content: node }),
  clearContent: () => set({ content: null }),
}))
