import {create} from "zustand";


export const useReference = create((set) => ({
    reference: [],
    addToReference: (reference) => set({reference}),
    resetReference: () => set({reference: []}),
}))