// src/store/bindStore.ts
import { create } from "zustand";

export interface InsuredInfo {
  clientFirstName: string;
  clientLastName: string;
  mailingAddress1: string;
  mailingAddress2: string;
  city: string;
  state: string;
  zipcode: string;
  email: string;
  phoneNumber: string;
  policyEffectiveDate: string;
}

export interface AdditionalInsured {
  id: string;
  firstName: string;
  lastName: string;
  interestType: string;
  correspondenceRequired: string;
  correspondenceType: string;
  loanNumber: string;
  mailingAddress1: string;
  mailingAddress2: string;
  city: string;
  state: string;
  zipcode: string;
  email: string;
  phoneNumber: string;
  policyEffectiveDate: string;
}

const emptyAdditional = (): AdditionalInsured => ({
  id: crypto.randomUUID(),
  firstName: "",
  lastName: "",
  interestType: "",
  correspondenceRequired: "",
  correspondenceType: "",
  loanNumber: "",
  mailingAddress1: "",
  mailingAddress2: "",
  city: "",
  state: "",
  zipcode: "",
  email: "",
  phoneNumber: "",
  policyEffectiveDate: "",
});

interface BindState {
  insuredInfo: InsuredInfo;
  additionalInsureds: AdditionalInsured[];
  certified: boolean;

  setInsuredInfo: (data: Partial<InsuredInfo>) => void;
  setAdditionalInsured: (id: string, data: Partial<AdditionalInsured>) => void;
  addAdditionalInsured: () => void;
  removeAdditionalInsured: (id: string) => void;
  setCertified: (val: boolean) => void;
}

export const useBindStore = create<BindState>((set) => ({
  insuredInfo: {
    clientFirstName: "",
    clientLastName: "",
    mailingAddress1: "",
    mailingAddress2: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
    phoneNumber: "",
    policyEffectiveDate: "",
  },
  additionalInsureds: [emptyAdditional()],
  certified: false,

  setInsuredInfo: (data) =>
    set((s) => ({ insuredInfo: { ...s.insuredInfo, ...data } })),

  setAdditionalInsured: (id, data) =>
    set((s) => ({
      additionalInsureds: s.additionalInsureds.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),

  addAdditionalInsured: () =>
    set((s) => ({
      additionalInsureds: [...s.additionalInsureds, emptyAdditional()],
    })),

  removeAdditionalInsured: (id) =>
    set((s) => ({
      additionalInsureds: s.additionalInsureds.filter((i) => i.id !== id),
    })),

  setCertified: (val) => set({ certified: val }),
}));
