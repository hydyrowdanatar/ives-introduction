// "use client";

// import Button from "@/shared/ui/btn";
// import Quote from "@/shared/ui/quotes/quote";
// import { useQuoteStore } from "@/shared/store/quotesStore";
// import { useRouter } from "next/navigation";

// const QUOTE_TYPES = ["basic", "enchanced", "mynd managed"] as const;

// const Quotes = () => {
//   const router = useRouter();
//   const { selectedQuote } = useQuoteStore();

//   return (
//     <div className="w-full flex flex-col gap-[60px]">
//       <div className="flex justify-between items-start">
//         {QUOTE_TYPES.map((type) => (
//           <Quote key={type} type={type} />
//         ))}
//       </div>

//       <div className="flex flex-col self-end gap-7">
//         <div className="flex gap-5 items-center">
//           <Button
//             title="BACK"
//             className="border border-primary text-primary bg-transparent"
//             onClick={() => router.back()}
//           />
//           <Button
//             title="SELECT QUOTE"
//             className="text-white bg-primary"
//             // wire up navigation here when ready
//           />
//         </div>

//         <a
//           href=""
//           className="text-end text-primary underline font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]"
//         >
//           Download Proposal
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Quotes;

// src/widgets/quote-page/Quotes.tsx
"use client";

import Button from "@/shared/ui/btn";
import Quote from "@/shared/ui/quotes/quote";
import { useQuoteStore } from "@/shared/store/quotesStore";
import { useRouter } from "next/navigation";
import SelectedQuotePopup from "./SelectedQuotePopup";

const QUOTE_TYPES = ["basic", "enchanced", "mynd managed"] as const;

const Quotes = () => {
  const router = useRouter();
  const { openPopup } = useQuoteStore();

  return (
    <>
      <div className="w-full flex flex-col gap-[60px]">
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

      {/* Popup — rendered via portal-like fixed positioning */}
      <SelectedQuotePopup />
    </>
  );
};

export default Quotes;
