"use client";
import Button from "@/shared/ui/btn";
import QuoteTitle from "@/shared/ui/titles/quoteTitle";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  return (
    <div className="w-full h-[calc(100vh-129px)] lg:h-[595px] xl:h-[750px] 2xl:h-[885px] 3xl:h-[1155px] flex items-center justify-center">
      <div className="w-full lg:w-[408px] xl:w-[513px] 2xl:w-[625px] 3xl:w-[790px] flex flex-col gap-9 px-6 lg:px-0">
        <QuoteTitle
          title="Mynd Managed Advantage"
          subTitle_1="Because your property is managed by Mynd, you are not required to make a payment today."
          subTitle_2="As part of the Mynd Managed Advantage, your policy premium will be billed directly to Mynd Property Management, making the process simple and seamless for you."
          subTitleWidth=""
          titleWidth=""
        />

        <div className="w-full flex items-center justify-between gap-5">
          <Button
            title="BACK"
            className="border border-primary text-primary w-1/2 lg:w-[95px] xl:w-[120px] 2xl:w-[140px] 3xl:w-[185px]"
            onClick={() => router.back()}
          />
          <Button
            title="COMPLETE"
            className="text-white bg-primary w-1/2 lg:w-fit"
          />
        </div>

        <a
          href=""
          className="underline text-primary self-end font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]"
        >
          Download Invoice
        </a>
      </div>
    </div>
  );
}
