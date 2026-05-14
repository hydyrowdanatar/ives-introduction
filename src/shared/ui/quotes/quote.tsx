// "use client";

// import { FC } from "react";
// import { useQuoteStore, QuoteType } from "@/shared/store/quotesStore";

// interface Row {
//   label: string;
//   values: Record<QuoteType, string>;
//   includedFor: QuoteType[];
// }

// const TITLES: Record<QuoteType, string> = {
//   basic: "Basic",
//   enchanced: "Enhanced",
//   "mynd managed": "Mynd Managed",
// };

// const ROWS: Row[] = [
//   {
//     label: "Rental Rebuild Coverage",
//     values: {
//       basic: "<Dwelling Amount>",
//       enchanced: "<Dwelling Amount>",
//       "mynd managed": "<Dwelling Amount>",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Loss of Rents",
//     values: {
//       basic: "<Annual Rents>",
//       enchanced: "<Annual Rents>",
//       "mynd managed": "<Annual Rents>",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Contents",
//     values: {
//       basic: "Not Included",
//       enchanced: "$5,000",
//       "mynd managed": "$5,000",
//     },
//     includedFor: ["enchanced", "mynd managed"],
//   },
//   {
//     label: "Ordinance and Law",
//     values: {
//       basic: "Not Included",
//       enchanced: "100% of A/10% B/10% C",
//       "mynd managed": "Full Coverage",
//     },
//     includedFor: ["enchanced", "mynd managed"],
//   },
//   {
//     label: "Water Claims",
//     values: {
//       basic: "Up to rebuild cost",
//       enchanced: "Up to rebuild cost",
//       "mynd managed": "Up to rebuild cost",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Sewers/Drains Backup",
//     values: {
//       basic: "$5,000",
//       enchanced: "$25,000 Per Occurrence",
//       "mynd managed": "$50,000",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Equipment Breakdown",
//     values: {
//       basic: "Not Included",
//       enchanced: "$25,000 Per Occurrence",
//       "mynd managed": "$50,000",
//     },
//     includedFor: ["enchanced", "mynd managed"],
//   },
//   {
//     label: "Vacancy Allowance",
//     values: {
//       basic: "30 Days",
//       enchanced: "60 Days",
//       "mynd managed": "Unlimited",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Burglary/Theft/ Vandalism",
//     values: {
//       basic: "Sublimit",
//       enchanced: "Included",
//       "mynd managed": "Included",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Landlord Liability",
//     values: {
//       basic: "$500,000/$1,000,000",
//       enchanced: "$1,000,000/$2,000,000",
//       "mynd managed": "$1,000,000/$3,000,000",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Habitability Lawsuit Coverage",
//     values: {
//       basic: "Not Included",
//       enchanced: "Not Included",
//       "mynd managed": "Included",
//     },
//     includedFor: ["mynd managed"],
//   },
//   {
//     label: "Animal Lawsuit Coverage",
//     values: {
//       basic: "$10,000",
//       enchanced: "$50,000",
//       "mynd managed": "$100,000",
//     },
//     includedFor: ["basic", "enchanced", "mynd managed"],
//   },
//   {
//     label: "Fire Arms Lawsuit Coverage",
//     values: {
//       basic: "Not Included",
//       enchanced: "Included",
//       "mynd managed": "Included",
//     },
//     includedFor: ["enchanced", "mynd managed"],
//   },
//   {
//     label: "Assault and Battery Lawsuit Coverage",
//     values: {
//       basic: "Not Included",
//       enchanced: "Not Included",
//       "mynd managed": "Included",
//     },
//     includedFor: ["mynd managed"],
//   },
// ];

// const ANNUAL_PREMIUM: Record<QuoteType, string> = {
//   basic: "$10,000",
//   enchanced: "<Amount>",
//   "mynd managed": "$100,000",
// };

// interface IProps {
//   type: QuoteType;
//   /** When true, renders the mobile full-screen carousel variant */
//   isMobile?: boolean;
//   onPrev?: () => void;
//   onNext?: () => void;
// }

// const Quote: FC<IProps> = ({ type, isMobile = false, onPrev, onNext }) => {
//   const { selectedQuote, setSelectedQuote } = useQuoteStore();
//   const isSelected = selectedQuote === type;

//   // ── Mobile variant ──────────────────────────────────────────────
//   if (isMobile) {
//     return (
//       <div className="flex flex-col h-full w-full rounded-[12px] overflow-hidden shadow-md">
//         {/* Header with arrows */}
//         <div className="flex items-center justify-between bg-primary px-4 py-[14px]">
//           <button
//             onClick={onPrev}
//             className="text-white p-1"
//             aria-label="Previous"
//           >
//             {arrowLeft}
//           </button>
//           <span className="font-medium text-white text-[25px]">
//             {TITLES[type]}
//           </span>
//           <button onClick={onNext} className="text-white p-1" aria-label="Next">
//             {arrowRight}
//           </button>
//         </div>

//         {/* Scrollable body */}
//         <div className="flex-1 overflow-y-auto bg-white px-4 py-5 flex flex-col gap-[10px]">
//           {ROWS.map((row) => {
//             const isIncluded = row.includedFor.includes(type);
//             return (
//               <div
//                 key={row.label}
//                 className={[
//                   "w-full flex items-start gap-[8px]",
//                   isIncluded ? "text-[#141412]" : "text-[#141412]/30",
//                 ].join(" ")}
//               >
//                 <span className="mt-0.5 shrink-0 w-[18px]">
//                   {isIncluded ? checkIcon : null}
//                 </span>
//                 <div className="flex-1 flex items-start justify-between gap-2 text-left">
//                   <span className="w-[52%] font-medium leading-snug text-[13px]">
//                     {row.label}
//                   </span>
//                   <span className="w-[44%] font-normal leading-snug text-left text-[13px]">
//                     {isIncluded ? row.values[type] : "Not Included"}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Annual Premium footer */}
//         <div className="border-t-[2px] border-primary/20 bg-primary/8">
//           <div className="px-4 py-[14px] flex items-center justify-between">
//             <span className="font-semibold text-primary text-[13px]">
//               Annual Premium
//             </span>
//             <span className="font-bold text-primary text-[13px]">
//               {ANNUAL_PREMIUM[type]}
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── Desktop variant (unchanged) ─────────────────────────────────
//   return (
//     <div
//       onClick={() => setSelectedQuote(type)}
//       className={[
//         "w-[35%] text-center rounded-[12px] cursor-pointer overflow-hidden",
//         "transition-all duration-300 ease-in-out flex flex-col",
//         isSelected ? "ring-[3px] ring-primary shadow-xl" : "shadow-md",
//       ].join(" ")}
//     >
//       {/* Header */}
//       <div
//         className={[
//           "py-[14px] xl:py-[18px] 2xl:py-[22px] 3xl:py-[28px]",
//           "font-semibold text-white",
//           "text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px]",
//           "transition-colors duration-300",
//           isSelected ? "bg-primary" : "bg-[#5BA89A]",
//         ].join(" ")}
//       >
//         {TITLES[type]}
//       </div>

//       {/* Body */}
//       <div
//         className={[
//           "py-[20px] xl:py-[25px] 2xl:py-[30px] 3xl:py-[38px]",
//           "px-[16px] xl:px-[20px] 2xl:px-[24px] 3xl:px-[30px]",
//           "flex flex-col gap-[10px] xl:gap-[12px]",
//           "bg-white flex-1",
//         ].join(" ")}
//       >
//         {ROWS.map((row) => {
//           const isIncluded = row.includedFor.includes(type);
//           return (
//             <div
//               key={row.label}
//               className={[
//                 "w-full flex items-start gap-[8px]",
//                 isIncluded ? "text-[#141412]" : "text-[#141412]/30",
//               ].join(" ")}
//             >
//               <span className="mt-0.5 shrink-0 w-[18px]">
//                 {isIncluded ? checkIcon : null}
//               </span>
//               <div className="flex-1 flex items-start justify-between gap-2 text-left">
//                 <span
//                   className={[
//                     "w-[52%] font-medium leading-snug",
//                     "text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px]",
//                   ].join(" ")}
//                 >
//                   {row.label}
//                 </span>
//                 <span
//                   className={[
//                     "w-[44%] font-normal leading-snug text-left",
//                     "text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px]",
//                   ].join(" ")}
//                 >
//                   {isIncluded ? row.values[type] : "Not Included"}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Annual Premium Footer */}
//       <div
//         className={[
//           "mt-auto border-t-[2px] border-primary/20",
//           "transition-colors duration-300",
//           isSelected ? "bg-primary/8" : "bg-white",
//         ].join(" ")}
//       >
//         <div
//           className={[
//             "px-[16px] xl:px-[20px] 2xl:px-[24px] 3xl:px-[30px]",
//             "py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[22px]",
//             "flex items-center justify-between",
//           ].join(" ")}
//         >
//           <span
//             className={[
//               "font-semibold text-primary",
//               "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px]",
//             ].join(" ")}
//           >
//             Annual Premium
//           </span>
//           <span
//             className={[
//               "font-bold text-primary",
//               "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px]",
//             ].join(" ")}
//           >
//             {ANNUAL_PREMIUM[type]}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quote;

// // ── Icons ──────────────────────────────────────────────────────────

// const checkIcon = (
//   <svg
//     width="16"
//     height="12"
//     viewBox="0 0 19 14"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M1 7.3L5.9 12.2L17.1 1"
//       stroke="#00785E"
//       strokeWidth="2.2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const arrowLeft = (
//   <svg
//     width="25"
//     height="22"
//     viewBox="0 0 25 22"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M24 12H2"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M10 3L1 12L10 21"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const arrowRight = (
//   <svg
//     width="25"
//     height="22"
//     viewBox="0 0 25 22"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M1 12H23"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M15 3L24 12L15 21"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

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
];

const ANNUAL_PREMIUM: Record<QuoteType, string> = {
  basic: "$10,000",
  enchanced: "<Amount>",
  "mynd managed": "$100,000",
};

interface IProps {
  type: QuoteType;
  isMobile?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

const Quote: FC<IProps> = ({ type, isMobile = false, onPrev, onNext }) => {
  const { selectedQuote, setSelectedQuote } = useQuoteStore();
  const isSelected = selectedQuote === type;

  // ── Mobile variant ──────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="flex flex-col h-full w-full rounded-[12px] overflow-hidden shadow-md">
        <div className="flex items-center justify-between bg-primary px-4 py-[14px]">
          <button
            onClick={onPrev}
            className="text-white p-1"
            aria-label="Previous"
          >
            {arrowLeft}
          </button>
          <span className="font-medium text-white text-[25px]">
            {TITLES[type]}
          </span>
          <button onClick={onNext} className="text-white p-1" aria-label="Next">
            {arrowRight}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-white px-4 py-5 flex flex-col gap-[10px]">
          {ROWS.map((row) => {
            const isIncluded = row.includedFor.includes(type);
            return (
              <div
                key={row.label}
                className={[
                  "w-full flex items-start gap-[8px]",
                  isIncluded ? "text-[#141412]" : "text-[#141412]/30",
                ].join(" ")}
              >
                <span className="mt-0.5 shrink-0 w-[18px]">
                  {isIncluded ? checkIcon : null}
                </span>
                <div className="flex-1 flex items-start justify-between gap-2 text-left">
                  <span className="w-[52%] font-medium leading-snug text-[13px]">
                    {row.label}
                  </span>
                  <span className="w-[44%] font-normal leading-snug text-left text-[13px]">
                    {isIncluded ? row.values[type] : "Not Included"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t-2 border-primary/20 bg-primary/8">
          <div className="px-4 py-[14px] flex items-center justify-between">
            <span className="font-semibold text-primary text-[13px]">
              Annual Premium
            </span>
            <span className="font-bold text-primary text-[13px]">
              {ANNUAL_PREMIUM[type]}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ── Desktop variant — w-full, parent wrapper controls the width ─
  return (
    <div
      onClick={() => setSelectedQuote(type)}
      className={[
        "w-full text-center rounded-[12px] cursor-pointer overflow-hidden",
        "transition-all duration-300 ease-in-out flex flex-col",
        isSelected ? "ring-[3px] ring-primary shadow-xl" : "shadow-md",
      ].join(" ")}
    >
      {/* Header */}
      <div
        className={[
          "py-[14px] xl:py-[18px] 2xl:py-[22px] 3xl:py-[28px]",
          "font-semibold text-white",
          "text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px]",
          "transition-colors duration-300",
          isSelected ? "bg-primary" : "bg-[#5BA89A]",
        ].join(" ")}
      >
        {TITLES[type]}
      </div>

      {/* Body */}
      <div
        className={[
          "py-[20px] xl:py-[25px] 2xl:py-[30px] 3xl:py-[38px]",
          "px-[16px] xl:px-[20px] 2xl:px-[24px] 3xl:px-[30px]",
          "flex flex-col gap-[10px] xl:gap-[12px]",
          "bg-white flex-1",
        ].join(" ")}
      >
        {ROWS.map((row) => {
          const isIncluded = row.includedFor.includes(type);
          return (
            <div
              key={row.label}
              className={[
                "w-full flex items-start gap-[8px]",
                isIncluded ? "text-[#141412]" : "text-[#141412]/30",
              ].join(" ")}
            >
              <span className="mt-0.5 shrink-0 w-[18px]">
                {isIncluded ? checkIcon : null}
              </span>
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

      {/* Annual Premium Footer */}
      <div
        className={[
          "mt-auto border-t-[2px] border-primary/20",
          "transition-colors duration-300",
          isSelected ? "bg-primary/8" : "bg-white",
        ].join(" ")}
      >
        <div
          className={[
            "px-[16px] xl:px-[20px] 2xl:px-[24px] 3xl:px-[30px]",
            "py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[22px]",
            "flex items-center justify-between",
          ].join(" ")}
        >
          <span
            className={[
              "font-semibold text-primary",
              "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px]",
            ].join(" ")}
          >
            Annual Premium
          </span>
          <span
            className={[
              "font-bold text-primary",
              "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px]",
            ].join(" ")}
          >
            {ANNUAL_PREMIUM[type]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quote;

// ── Icons ────────────────────────────────────────────────────────

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

const arrowLeft = (
  <svg
    width="25"
    height="22"
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 12H2"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 3L1 12L10 21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const arrowRight = (
  <svg
    width="25"
    height="22"
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 12H23"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3L24 12L15 21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
