// src/store/quoteStore.ts
import { create } from "zustand";

export type QuoteType = "basic" | "enchanced" | "mynd managed";

type PremiumAmounts = Record<"basic" | "mynd managed", string | null>;

interface QuoteState {
  selectedQuote: QuoteType;
  isPopupOpen: boolean;
  premiumAmounts: PremiumAmounts;
  premiumLoading: boolean;
  premiumError: string | null;
  setSelectedQuote: (quote: QuoteType) => void;
  openPopup: () => void;
  closePopup: () => void;
  setPremiumAmounts: (amounts: PremiumAmounts) => void;
  setPremiumLoading: (loading: boolean) => void;
  setPremiumError: (error: string | null) => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  selectedQuote: "basic",
  isPopupOpen: false,
  premiumAmounts: { basic: null, "mynd managed": null },
  premiumLoading: false,
  premiumError: null,
  setSelectedQuote: (quote) => set({ selectedQuote: quote }),
  openPopup: () => set({ isPopupOpen: true }),
  closePopup: () => set({ isPopupOpen: false }),
  setPremiumAmounts: (amounts) => set({ premiumAmounts: amounts }),
  setPremiumLoading: (loading) => set({ premiumLoading: loading }),
  setPremiumError: (error) => set({ premiumError: error }),
}));
