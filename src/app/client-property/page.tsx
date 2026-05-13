"use client";

import { useFormStore } from "@/shared/store/formStore";
import FormComponent from "@/widgets/client-property/FormComponent";
import PortfolioAsking from "@/widgets/client-property/PortfolioAsking";
import PropertyTitle from "@/widgets/client-property/PropertyTitle";

export default function ClientPropertyPage() {
  const { currentTab, propertyDetails } = useFormStore();

  const showApartmentInfo =
    currentTab === 1 && propertyDetails.propertyType !== "";

  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className="w-ful lg:w-[86%] lg:h-[595px] xl:h-[750px] 2xl:h-[885px] 3xl:h-[1155px] flex flex-col gap-[45px] lg:flex-row items-center justify-between py-11 px-6 lg:py-0 lg:px-0">
        <div className="flex flex-col gap-8 lg:gap-[45px]">
          <PropertyTitle />

          {/* Apartment definition */}
          {showApartmentInfo && (
            <div className="flex flex-col gap-4">
              <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px]">
                Apartment Programs
              </p>

              <span className="text-[13px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:w-[408px] xl:w-[490px] 2xl:w-[505px] 3xl:w-[790px]">
                While our online program is built for 1–4 unit rental
                properties, we would love to help you insure your apartment
                building.
              </span>
              <span className="text-[13px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:w-[408px] xl:w-[480px] 2xl:w-[525px] 3xl:w-[790px]">
                Please call us at 619-794-2710, and we can shop coverage through
                our network of 100+ insurance companies to find the right option
                for you.
              </span>
            </div>
          )}
          {/* Apartment definition */}
        </div>

        <FormComponent />
      </div>

      {currentTab !== 0 && <PortfolioAsking />}
    </div>
  );
}
