import Button from "@/shared/ui/btn";
import HeroTitle from "@/shared/ui/titles/heroTitle";

const CoverageSection = () => {
  return (
    <div className="w-full lg:h-[400px] xl:h-[500px] 2xl:h-[590px] 3xl:h-[770px] bg-bright flex items-center justify-center py-11 px-6 lg:py-0 lg:px-0">
      <div className="w-full lg:w-[86%] mx-auto flex flex-col lg:flex-row lg:gap-[30px] lg:justify-around lg:items-center">
        {/* <div className="hidden lg:flex">
          <HeroTitle
            regularText="If your policy does not provide the right protection, you could be left paying"
            italicText="thousands to cover the damage."
            regularWidth="lg:w-[400px] xl:w-[580px] 2xl:w-[600px] 3xl:w-[600px]"
            italicWidth={""}
            italicColor={"text-primary"}
            regularColor={"text-foreground"}
            subTitle="Rental property owners can face costly events such as tenant lawsuits, significant water damage, vandalism, or other unexpected losses."
            extraClassName={true}
            coverageSubTitleWidth={true}
          />
        </div> */}

        <div className=" flex flex-col gap-4 ">
          <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[28px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px] lg:w-[400px] xl:w-[580px] 2xl:w-[600px] 3xl:w-[600px]">
            If your policy does not provide the right protection, you could be
            left paying{" "}
            <span
              className="text-primary text-[22px] xl:text-[28px] 2xl:text-[33px] 3xl:text-[43px] leading-[28px] xl:leading-[33px] 2xl:leading-[39px] 3xl:leading-[50px] italic"
              style={{ fontFamily: "var(--font-taviraj)" }}
            >
              thousands to cover the damage.
            </span>
          </p>

          <p className=" w-full pr-6 lg:pr-0 lg:w-[480px] xl:w-[600px] 2xl:w-[700px] xl:mx-auto text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] ">
            Rental property owners can face costly events such as tenant
            lawsuits, significant water damage, vandalism, or other unexpected
            losses.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-[25px] mt-6">
          <p className="text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px] font-semibold">
            Coverage may include protection for:
          </p>

          <ul className="list-disc list-inside flex flex-col gap-[6px] lg:gap-2">
            <li className="text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Property damage caused by fire, wind, or water
            </li>
            <li className="text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Liability claims involving tenants or guests
            </li>
            <li className="text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Sewer or drain backup damage
            </li>
            <li className="text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Vandalism or theft at the property
            </li>
            <li className="text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Losses that could impact your rental investment
            </li>
          </ul>

          <Button
            title="Check My Property Coverage"
            className="text-white bg-primary w-fit mt-6 border border-primary hover:bg-secondary hover:text-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverageSection;
