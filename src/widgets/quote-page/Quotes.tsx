// "use client";

// import Button from "@/shared/ui/btn";
// import Quote from "@/shared/ui/quotes/quote";
// import { useQuoteStore } from "@/shared/store/quotesStore";
// import { useRouter } from "next/navigation";
// import SelectedQuotePopup from "./SelectedQuotePopup";

// const QUOTE_TYPES = ["basic", "enchanced", "mynd managed"] as const;

// const Quotes = () => {
//   const router = useRouter();
//   const { openPopup } = useQuoteStore();

//   return (
//     <>
//       <div className="w-full flex flex-col gap-[60px]">
//         <div className="flex justify-between items-start">
//           {QUOTE_TYPES.map((type) => (
//             <Quote key={type} type={type} />
//           ))}
//         </div>

//         <div className="flex flex-col self-end gap-7">
//           <div className="flex gap-5 items-center">
//             <Button
//               title="BACK"
//               className="border border-primary text-primary bg-transparent"
//               onClick={() => router.back()}
//             />
//             <Button
//               title="SELECT QUOTE"
//               className="text-white bg-primary"
//               onClick={openPopup}
//             />
//           </div>

//           <a
//             href=""
//             className="text-end text-primary underline font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]"
//           >
//             Download Proposal
//           </a>
//         </div>
//       </div>

//       {/* Popup — rendered via portal-like fixed positioning */}
//       <SelectedQuotePopup />
//     </>
//   );
// };

// export default Quotes;

"use client";

import Button from "@/shared/ui/btn";
import Quote from "@/shared/ui/quotes/quote";
import { useQuoteStore, QuoteType } from "@/shared/store/quotesStore";
import { useRouter } from "next/navigation";
import SelectedQuotePopup from "./SelectedQuotePopup";
import { useState } from "react";

const QUOTE_TYPES: QuoteType[] = ["basic", "mynd managed"];

const Quotes = () => {
  const router = useRouter();
  const { openPopup, setSelectedQuote } = useQuoteStore();
  const [mobileIndex, setMobileIndex] = useState(0);

  const handlePrev = () => {
    const newIndex =
      (mobileIndex - 1 + QUOTE_TYPES.length) % QUOTE_TYPES.length;
    setMobileIndex(newIndex);
    setSelectedQuote(QUOTE_TYPES[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (mobileIndex + 1) % QUOTE_TYPES.length;
    setMobileIndex(newIndex);
    setSelectedQuote(QUOTE_TYPES[newIndex]);
  };

  return (
    <>
      {/* ── Desktop Layout (md and above) ── */}
      <div className="hidden md:flex w-full flex-col gap-[60px]">
        <div className="flex justify-between items-start">
          {QUOTE_TYPES.map((type) => (
            <Quote key={type} type={type} />
          ))}
        </div>

        <div className="flex flex-col self-end gap-7">
          <div className="flex gap-5 items-center">
            <Button
              title="BACK"
              className="border border-primary text-primary bg-transparent"
              onClick={() => router.back()}
            />
            <Button
              title="SELECT QUOTE"
              className="text-white bg-primary"
              onClick={openPopup}
            />
          </div>

          <a
            href=""
            className="text-end text-primary underline font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]"
          >
            Download Proposal
          </a>
        </div>
      </div>

      {/* ── Mobile Layout (below md) ── */}
      <div className="flex md:hidden w-full flex-col h-full gap-6">
        {/* Card with arrows in header */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Quote
            key={QUOTE_TYPES[mobileIndex]}
            type={QUOTE_TYPES[mobileIndex]}
            isMobile
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 py-4">
          {QUOTE_TYPES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setMobileIndex(i);
                setSelectedQuote(QUOTE_TYPES[i]);
              }}
              className={[
                "w-2 h-2 rounded-full transition-colors duration-300",
                i === mobileIndex ? "bg-primary" : "bg-gray-300",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Bottom actions */}
        <div className="flex flex-col items-start gap-6 pb-6">
          <div className="flex gap-4 w-full justify-between">
            <Button
              title="BACK"
              className="w-1/2 lg:w-fit border border-primary text-primary bg-transparent"
              onClick={() => router.back()}
            />
            <Button
              title="SELECT QUOTE"
              className="w-1/2 lg:w-fit  text-white bg-primary"
              onClick={openPopup}
            />
          </div>

          <a
            href=""
            className="text-primary underline font-semibold text-[13px]"
          >
            Download Proposal
          </a>
        </div>
      </div>

      <SelectedQuotePopup />
    </>
  );
};

export default Quotes;
