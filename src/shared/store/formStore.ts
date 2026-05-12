// src/store/formStore.ts
import { create } from "zustand";

export type Tab = 0 | 1 | 2;

export interface AboutYouData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface PropertyDetailsData {
  streetAddress: string;
  city: string;
  state: string;
  zipcode: string;
  squareFootage: string;
  yearBuilt: string;
  propertyType: string;
  numberOfUnits: string;
}

export interface CoverageData {
  occupancy: string;
  knownLossesLast3Years: string;
  propertyRebuildCost: string;
  lossOfUseMonthlyRents: string;
  acknowledged: boolean;
}

interface FormState {
  currentTab: Tab;
  aboutYou: AboutYouData;
  propertyDetails: PropertyDetailsData;
  coverage: CoverageData;

  setCurrentTab: (tab: Tab) => void;
  nextTab: () => void;
  prevTab: () => void;

  setAboutYou: (data: Partial<AboutYouData>) => void;
  setPropertyDetails: (data: Partial<PropertyDetailsData>) => void;
  setCoverage: (data: Partial<CoverageData>) => void;
}

export const useFormStore = create<FormState>((set) => ({
  currentTab: 0,
  aboutYou: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
  propertyDetails: {
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    squareFootage: "",
    yearBuilt: "",
    propertyType: "",
    numberOfUnits: "",
  },
  coverage: {
    occupancy: "",
    knownLossesLast3Years: "",
    propertyRebuildCost: "",
    lossOfUseMonthlyRents: "",
    acknowledged: false,
  },

  setCurrentTab: (tab) => set({ currentTab: tab }),
  nextTab: () =>
    set((s) => ({ currentTab: Math.min(s.currentTab + 1, 2) as Tab })),
  prevTab: () =>
    set((s) => ({ currentTab: Math.max(s.currentTab - 1, 0) as Tab })),

  setAboutYou: (data) => set((s) => ({ aboutYou: { ...s.aboutYou, ...data } })),
  setPropertyDetails: (data) =>
    set((s) => ({ propertyDetails: { ...s.propertyDetails, ...data } })),
  setCoverage: (data) => set((s) => ({ coverage: { ...s.coverage, ...data } })),
}));
