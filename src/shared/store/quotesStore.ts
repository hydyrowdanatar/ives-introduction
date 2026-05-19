// src/store/quoteStore.ts
import { create } from "zustand";

export type QuoteType = "basic" | "enchanced" | "mynd managed";

interface QuoteState {
  selectedQuote: QuoteType;
  isPopupOpen: boolean;
  premiumAmount: string | null;
  premiumLoading: boolean;
  premiumError: string | null;
  setSelectedQuote: (quote: QuoteType) => void;
  openPopup: () => void;
  closePopup: () => void;
  setPremiumAmount: (amount: string | null) => void;
  setPremiumLoading: (loading: boolean) => void;
  setPremiumError: (error: string | null) => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  selectedQuote: "basic",
  isPopupOpen: false,
  premiumAmount: null,
  premiumLoading: false,
  premiumError: null,
  setSelectedQuote: (quote) => set({ selectedQuote: quote }),
  openPopup: () => set({ isPopupOpen: true }),
  closePopup: () => set({ isPopupOpen: false }),
  setPremiumAmount: (amount) => set({ premiumAmount: amount }),
  setPremiumLoading: (loading) => set({ premiumLoading: loading }),
  setPremiumError: (error) => set({ premiumError: error }),
}));
