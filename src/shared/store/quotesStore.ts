// src/store/quoteStore.ts
import { create } from "zustand";

export type QuoteType = "basic" | "enchanced" | "mynd managed";

interface QuoteState {
  selectedQuote: QuoteType;
  isPopupOpen: boolean;
  setSelectedQuote: (quote: QuoteType) => void;
  openPopup: () => void;
  closePopup: () => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  selectedQuote: "basic",
  isPopupOpen: false,
  setSelectedQuote: (quote) => set({ selectedQuote: quote }),
  openPopup: () => set({ isPopupOpen: true }),
  closePopup: () => set({ isPopupOpen: false }),
}));
