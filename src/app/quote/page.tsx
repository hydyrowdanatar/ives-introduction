import QuoteTitle from "@/shared/ui/titles/quoteTitle";
import Quotes from "@/widgets/quote-page/Quotes";
import { ChevronDown } from "lucide-react";

export default function QuotePage() {
  return (
    <div className="pt-[75px] lg:pt-[110px] pb-[75px] w-full bg-bright">
      <div className="w-full lg:w-[86%] mx-auto flex flex-col gap-[45px] lg:gap-[60px] px-6 lg:px-0">
        <QuoteTitle
          titleWidth="xl:w-[411px] 2xl:w-[500px]"
          subTitleWidth="lg:w-[500px] xl:w-[646px] 2xl:w-[770px] 3xl:w-[1000px]"
          title="We’ve put together three quotes for you."
          subTitle_1="We’ve created three landlord coverage packages to simplify the process
          so you can compare protection levels and choose the option that best
          fits your property and investment strategy."
          subTitle_2="Owners with properties managed by MYND receive access to the exclusive
          MYND Managed Advantage our most comprehensive coverage option."
        />

        {/* Select */}
        <div className="relative w-[340px]">
          <select
            defaultValue=""
            className="
              w-full h-[40px] px-[10px] rounded-[8px] bg-white
              appearance-none cursor-pointer outline-none
              text-[#141412]/50 text-[13px] xl:text-[15px]
              shadow-sm
            "
          >
            <option value="" disabled>
              Property Deductible
            </option>
            <option value="1000">$1,000</option>
            <option value="2500">$2,500</option>
            <option value="5000">$5,000</option>
            <option value="10000">$10,000</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#141412]/50 pointer-events-none"
            size={16}
          />
        </div>

        <Quotes />
      </div>
    </div>
  );
}
