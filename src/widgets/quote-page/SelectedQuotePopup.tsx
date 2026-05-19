// import Button from "@/shared/ui/btn";
// import QuoteTitle from "@/shared/ui/titles/quoteTitle";

// const SelectedQuotePopup = ({ type }: { type: string }) => {
//   return (
//     <div className="w-[460px] xl:w-[580px] 2xl:w-[685px] 3xl:w-[895px] h-[430px] xl:h-[545px] 2xl:h-[645px] 3xl:h-[840px] py-[36px] xl:py-[45px] 2xl:py-[54px] 3xl:py-[70px] px-10 xl:px-[50px] 2xl:px-[60px] 3xl:px-[77px] bg-primary flex flex-col items-center justify-center gap-4">
//       <QuoteTitle
//         title="Mynd Managed Advantage Has Best Coverage"
//         subTitle_1="We’ve created two landlord coverage packages to simplify the process so you can compare protection levels and choose the option that best fits your property and investment strategy. Owners with properties managed by Mynd receive access to the exclusive Mynd Managed Advantage — our most comprehensive coverage option."
//         titleWidth=""
//         subTitleWidth=""
//       />

//       <div className="flex flex-col gap-5">
//         <p>
//           {type === "basic"
//             ? "Continue with Basic plan?"
//             : "Continue with Enchanced plan?"}
//         </p>

//         <div className="flex items-center gap-5">
//           <Button
//             title="YES"
//             className="text-primary bg-secondary"
//             // onClick={}
//           />
//           <Button
//             title="NO"
//             className="border border-secondary text-secondary bg-transparent"
//             // onClick={}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectedQuotePopup;

// src/shared/ui/quotes/SelectedQuotePopup.tsx
"use client";

import { useEffect } from "react";
import Button from "@/shared/ui/btn";
import QuoteTitle from "@/shared/ui/titles/quoteTitle";
import { useQuoteStore, QuoteType } from "@/shared/store/quotesStore";
import { useRouter } from "next/navigation";

const QUOTE_LABELS: Record<QuoteType, string> = {
  basic: "Basic",
  enchanced: "Enhanced",
  "mynd managed": "Mynd Managed",
};

const SelectedQuotePopup = () => {
  const { selectedQuote, isPopupOpen, closePopup } = useQuoteStore();
  const router = useRouter();
  // Close on Escape key
  useEffect(() => {
    if (!isPopupOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isPopupOpen, closePopup]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  if (!isPopupOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#141412]/50 backdrop-blur-sm"
      onClick={closePopup}
    >
      {/* Panel — stop click propagation so clicks inside don't close */}
      <div
        className="relative w-[350px] lg:w-[460px] xl:w-[580px] 2xl:w-[685px] 3xl:w-[895px]
                   py-[45px] 2xl:py-[54px] 3xl:py-[70px]
                   px-6 xl:px-[50px] 2xl:px-[60px] 3xl:px-[77px]
                   bg-primary flex flex-col items-center justify-center gap-8
                    shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close ✕ */}
        {/* <button
          onClick={closePopup}
          className="absolute top-4 right-5 text-white/60 hover:text-white transition-colors text-2xl leading-none"
          aria-label="Close"
        >
          ✕
        </button> */}

        {/* Title block */}
        <QuoteTitle
          title="Mynd Managed Advantage Has Best Coverage"
          subTitle_1="We've created two landlord coverage packages to simplify the process so you can compare protection levels and choose the option that best fits your property and investment strategy. Owners with properties managed by Mynd receive access to the exclusive Mynd Managed Advantage — our most comprehensive coverage option."
          titleWidth="text-white"
          subTitleWidth="text-white"
        />

        {/* Confirmation */}
        <div className="w-full flex flex-col gap-5">
          <p className="text-white text-[16px] 2xl:text-[20px] 3xl:text-[26px] font-semibold">
            Continue with{" "}
            <span className="font-bold">{QUOTE_LABELS[selectedQuote]}</span>{" "}
            plan?
          </p>

          <div className="flex items-center gap-5">
            <Button
              title="YES"
              className="text-primary bg-secondary w-1/2 lg:w-[76px] xl:w-[100px] 2xl:w-[120px] 3xl:w-[155px]"
              onClick={() => { closePopup(); router.push("/bind"); }}
            />
            <Button
              title="NO"
              className="border border-secondary text-secondary bg-transparent w-1/2 lg:w-[76px] xl:w-[100px] 2xl:w-[120px] 3xl:w-[155px]"
              onClick={closePopup}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedQuotePopup;
