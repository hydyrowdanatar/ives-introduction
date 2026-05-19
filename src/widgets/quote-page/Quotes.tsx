"use client";

import { QuoteType, useQuoteStore } from "@/shared/store/quotesStore";
import Button from "@/shared/ui/btn";
import Quote from "@/shared/ui/quotes/quote";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SelectedQuotePopup from "./SelectedQuotePopup";
// import { useFormStore } from "@/shared/store/formStore";
// import { pdf } from "@react-pdf/renderer";
// import ProposalDocument from "@/shared/pdf/ProposalDocument";

const QUOTE_TYPES: QuoteType[] = ["basic", "mynd managed"];

const Quotes = ({ deductible: _deductible }: { deductible: string }) => {
  const router = useRouter();
  const { openPopup, setSelectedQuote } = useQuoteStore();
  const [mobileIndex, setMobileIndex] = useState(0);
  // const { aboutYou, propertyDetails, coverage } = useFormStore();

  // const handleDownloadProposal = async () => {
  //   const blob = await pdf(
  //     <ProposalDocument
  //       aboutYou={aboutYou}
  //       propertyDetails={propertyDetails}
  //       coverage={coverage}
  //       deductible={deductible}
  //     />,
  //   ).toBlob();
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = "ives-insurance-proposal.pdf";
  //   link.click();
  //   URL.revokeObjectURL(url);
  // };

  const handleDownloadProposal = () => {
    const link = document.createElement("a");
    link.href = "/doc/MyndProposalWebsite2026.pdf";
    link.download = "MyndProposalWebsite2026.pdf";
    link.click();
  };

  const handleSelectQuote = (type: QuoteType) => {
    setSelectedQuote(type);
    openPopup();
  };

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
      <div className="hidden md:flex w-full flex-col gap-[40px]">
        {/* Cards row — each with its own SELECT QUOTE button below */}
        <div className="flex justify-between lg:justify-evenly items-start gap-8">
          {QUOTE_TYPES.map((type) => (
            <div key={type} className="w-[45%] lg:w-[35%] flex flex-col gap-4">
              <Quote type={type} />
              <Button
                title="SELECT QUOTE"
                className="w-fit text-white bg-primary self-center hover:bg-secondary hover:text-primary border border-primary mt-4"
                onClick={() => handleSelectQuote(type)}
              />
            </div>
          ))}
        </div>

        {/* Bottom-right: BACK + SELECT QUOTE + Download Proposal */}
        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-5 items-center">
            <Button
              title="BACK"
              className="border border-primary text-primary bg-transparent hover:bg-primary hover:text-white "
              onClick={() => router.back()}
            />
            {/* <Button
              title="SELECT QUOTE"
              className="text-white bg-primary"
              onClick={openPopup}
            /> */}
          </div>
          <button
            onClick={handleDownloadProposal}
            className="text-primary underline font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] cursor-pointer hover:scale-105"
          >
            Download Proposal
          </button>
        </div>
      </div>

      {/* ── Mobile Layout (below md) ── */}
      <div className="flex md:hidden w-full flex-col h-full gap-6">
        {/* Card carousel */}
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
        <div className="flex justify-center gap-2">
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

        {/* Bottom actions: BACK + global SELECT QUOTE + Download Proposal */}
        <div className="flex flex-col items-start gap-4 pb-6">
          <div className="flex gap-4 w-full justify-between">
            <Button
              title="BACK"
              className="w-1/2 border border-primary text-primary bg-transparent"
              onClick={() => router.back()}
            />
            <Button
              title="SELECT QUOTE"
              className="w-1/2 text-white bg-primary"
              onClick={openPopup}
            />
          </div>
          <button
            onClick={handleDownloadProposal}
            className="text-primary underline font-semibold text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]"
          >
            Download Proposal
          </button>
        </div>
      </div>

      <SelectedQuotePopup />
    </>
  );
};

export default Quotes;
