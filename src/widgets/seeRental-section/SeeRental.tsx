"use client";

import Button from "@/shared/ui/btn";
import { useRouter } from "next/navigation";

const SeeRentalSection = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-primary-dark lg:h-[302px] xl:h-[380px] 2xl:h-[448px] 3xl:h-[585px] flex  items-center py-11 px-6 lg:py-0 lg:px-0">
      <div className="w-full lg:w-[86%] mx-auto flex flex-col lg:flex-row items-center justify-around ">
        {/* left side */}
        <div className="w-full lg:w-[55%] flex flex-col gap-12 items-start justify-center">
          <p className="w-full 2xl:w-[90%] 3xl:pr-[350px]  text-white text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px]">
            It only takes a few minutes to see if your rental property has the
            protection it deserves.
          </p>

          <div className="flex flex-col gap-6 text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white">
            <span>
              Compare your current coverage to our policies comprehensive
              features.
            </span>
            <span className="lg:w-[475px] xl:w-[600px] 2xl:w-[710px]">
              Provide a few basic details about your property and see insurance
              options designed specifically for rental property owners.
            </span>
          </div>
        </div>

        {/* right side */}
        <div className="w-full lg:w-[45%] flex flex-col lg:items-center lg:justify-end gap-[10px] lg:gap-3 mt-11 lg:mt-0">
          <Button
            title="SEE MY COVERAGE"
            className="text-primary bg-white hover:bg-primary hover:text-white border border-white cursor-pointer w-fit"
            onClick={() => router.push("/client-property")}
          />

          <span className="text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl-text-[18px] text-white italic">
            Takes less than 2 minutes!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeeRentalSection;
