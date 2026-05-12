import Button from "@/shared/ui/btn";
import HeroTitle from "@/shared/ui/titles/heroTitle";

const CoverageSection = () => {
  return (
    <div className="w-full lg:h-[400px] xl:h-[500px] 2xl:h-[590px] 3xl:h-[770px] bg-bright flex items-center justify-center">
      <div className="w-[86%] mx-auto flex gap-[30px] justify-around items-center">
        <HeroTitle
          regularText="If your policy does not provide the right protection, you could be left paying"
          italicText="thousands to cover the damage."
          regularWidth="w-[400px] xl:w-[580px] 2xl:w-[600px] 3xl:w-[600px]"
          italicWidth={""}
          italicColor={"text-primary"}
          regularColor={"text-foreground"}
          subTitle="Rental property owners can face costly events such as tenant lawsuits, significant water damage, vandalism, or other unexpected losses."
          extraClassName={true}
          coverageSubTitleWidth={true}
        />
        <div className="flex flex-col gap-[25px]">
          <p className="text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px] font-semibold">
            Coverage may include protection for:
          </p>

          <ul className="list-disc list-inside flex flex-col gap-[8px]">
            <li className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Property damage caused by fire, wind, or water
            </li>
            <li className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Liability claims involving tenants or guests
            </li>
            <li className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Sewer or drain backup damage
            </li>
            <li className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Vandalism or theft at the property
            </li>
            <li className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
              Losses that could impact your rental investment
            </li>
          </ul>

          <Button
            title="Check My Property Coverage"
            className="text-white bg-primary w-fit mt-[25px] border border-primary hover:bg-secondary hover:text-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverageSection;
