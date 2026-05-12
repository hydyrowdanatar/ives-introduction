"use client";

import { useFormStore } from "@/shared/store/formStore";
import FormComponent from "@/widgets/client-property/FormComponent";
import PortfolioAsking from "@/widgets/client-property/PortfolioAsking";
import PropertyTitle from "@/widgets/client-property/PropertyTitle";

export default function ClientPropertyPage() {
  const { currentTab } = useFormStore();
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className="w-[86%] h-[595px] xl:h-[750px] 2xl:h-[885px] 3xl:h-[1155px] flex items-center justify-between">
        <PropertyTitle />

        <FormComponent />
      </div>

      {currentTab !== 0 && <PortfolioAsking />}
    </div>
  );
}
