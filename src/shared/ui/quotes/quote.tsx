"use client";

import { FC } from "react";
import { useQuoteStore, QuoteType } from "@/shared/store/quotesStore";

interface Row {
  label: string;
  values: Record<QuoteType, string>;
  includedFor: QuoteType[];
}

const TITLES: Record<QuoteType, string> = {
  basic: "Basic",
  enchanced: "Enhanced",
  "mynd managed": "Mynd Managed",
};

const ROWS: Row[] = [
  {
    label: "Rental Rebuild Coverage",
    values: {
      basic: "<Dwelling Amount>",
      enchanced: "<Dwelling Amount>",
      "mynd managed": "<Dwelling Amount>",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Loss of Rents",
    values: {
      basic: "<Annual Rents>",
      enchanced: "<Annual Rents>",
      "mynd managed": "<Annual Rents>",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Contents",
    values: {
      basic: "Not Included",
      enchanced: "$5,000",
      "mynd managed": "$5,000",
    },
    includedFor: ["enchanced", "mynd managed"],
  },
  {
    label: "Ordinance and Law",
    values: {
      basic: "Not Included",
      enchanced: "100% of A/10% B/10% C",
      "mynd managed": "Full Coverage",
    },
    includedFor: ["enchanced", "mynd managed"],
  },
  {
    label: "Water Claims",
    values: {
      basic: "Up to rebuild cost",
      enchanced: "Up to rebuild cost",
      "mynd managed": "Up to rebuild cost",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Sewers/Drains Backup",
    values: {
      basic: "$5,000",
      enchanced: "$25,000 Per Occurrence",
      "mynd managed": "$50,000",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Equipment Breakdown",
    values: {
      basic: "Not Included",
      enchanced: "$25,000 Per Occurrence",
      "mynd managed": "$50,000",
    },
    includedFor: ["enchanced", "mynd managed"],
  },
  {
    label: "Vacancy Allowance",
    values: {
      basic: "30 Days",
      enchanced: "60 Days",
      "mynd managed": "Unlimited",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Burglary/Theft/ Vandalism",
    values: {
      basic: "Sublimit",
      enchanced: "Included",
      "mynd managed": "Included",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Landlord Liability",
    values: {
      basic: "$500,000/$1,000,000",
      enchanced: "$1,000,000/$2,000,000",
      "mynd managed": "$1,000,000/$3,000,000",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Habitability Lawsuit Coverage",
    values: {
      basic: "Not Included",
      enchanced: "Not Included",
      "mynd managed": "Included",
    },
    includedFor: ["mynd managed"],
  },
  {
    label: "Animal Lawsuit Coverage",
    values: {
      basic: "$10,000",
      enchanced: "$50,000",
      "mynd managed": "$100,000",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
  {
    label: "Fire Arms Lawsuit Coverage",
    values: {
      basic: "Not Included",
      enchanced: "Included",
      "mynd managed": "Included",
    },
    includedFor: ["enchanced", "mynd managed"],
  },
  {
    label: "Assault and Battery Lawsuit Coverage",
    values: {
      basic: "Not Included",
      enchanced: "Not Included",
      "mynd managed": "Included",
    },
    includedFor: ["mynd managed"],
  },
  {
    label: "Annual Premium",
    values: {
      basic: "<Amount>",
      enchanced: "<Amount>",
      "mynd managed": "<Amount>",
    },
    includedFor: ["basic", "enchanced", "mynd managed"],
  },
];

interface IProps {
  type: QuoteType;
}

const Quote: FC<IProps> = ({ type }) => {
  const { selectedQuote, setSelectedQuote } = useQuoteStore();
  const isSelected = selectedQuote === type;

  return (
    <div
      onClick={() => setSelectedQuote(type)}
      className={[
        "w-[30%] text-center rounded-[12px] cursor-pointer overflow-hidden",
        "transition-all duration-300 ease-in-out",
        // selected: strong border + shadow; unselected: subtle border
        isSelected ? "ring-[3px] ring-primary shadow-xl" : "shadow-md",
      ].join(" ")}
    >
      {/* ── Header ── */}
      <div
        className={[
          "py-[14px] xl:py-[18px] 2xl:py-[22px] 3xl:py-[28px]",
          "font-semibold text-white",
          "text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px]",
          "transition-colors duration-300",
          // selected: solid primary; unselected: lighter teal-ish
          isSelected ? "bg-primary" : "bg-[#5BA89A]",
        ].join(" ")}
      >
        {TITLES[type]}
      </div>

      {/* ── Body ── */}
      <div
        className={[
          "py-[20px] xl:py-[25px] 2xl:py-[30px] 3xl:py-[38px]",
          "px-[16px] xl:px-[20px] 2xl:px-[24px] 3xl:px-[30px]",
          "flex flex-col gap-[10px] xl:gap-[12px]",
          "transition-colors duration-300",
          isSelected ? "bg-white" : "bg-white",
        ].join(" ")}
      >
        {ROWS.map((row) => {
          const isIncluded = row.includedFor.includes(type);
          return (
            <div
              key={row.label}
              className={[
                "w-full flex items-start gap-[8px]",
                // included rows: dark text; excluded: muted/greyed
                isIncluded ? "text-[#141412]" : "text-[#141412]/30",
              ].join(" ")}
            >
              {/* Check icon or spacer */}
              <span className="mt-0.5 shrink-0 w-[18px]">
                {isIncluded ? checkIcon : null}
              </span>

              {/* Label + value */}
              <div className="flex-1 flex items-start justify-between gap-2 text-left">
                <span
                  className={[
                    "w-[52%] font-medium leading-snug",
                    "text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px]",
                  ].join(" ")}
                >
                  {row.label}
                </span>
                <span
                  className={[
                    "w-[44%] font-normal leading-snug text-left",
                    "text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px]",
                  ].join(" ")}
                >
                  {isIncluded ? row.values[type] : "Not Included"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quote;

const checkIcon = (
  <svg
    width="16"
    height="12"
    viewBox="0 0 19 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7.3L5.9 12.2L17.1 1"
      stroke="#00785E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
