import curve from "@/shared/assets/greenCurve.png";
import Button from "@/shared/ui/btn";

const SeeRentalSection = () => {
  return (
    <div className="w-full bg-primary-dark h-[302px] xl:h-[380px] 2xl:h-[448px] 3xl:h-[585px] flex items-center">
      <div className="w-[86%] mx-auto flex items-center justify-around ">
        {/* left side */}
        <div className="w-[55%] flex flex-col gap-12 items-start justify-center">
          <p className="w-full 2xl:w-[90%] 3xl:pr-[350px]  text-white text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px]">
            It only takes a few minutes to see if your rental property has the
            protection it deserves.
          </p>

          <div className="flex flex-col gap-6 text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white">
            <span>
              Compare your current coverage to our policies comprehensive
              features.
            </span>
            <span className="w-[475px] xl:w-[600px] 2xl:w-[710px]">
              Provide a few basic details about your property and see insurance
              options designed specifically for rental property owners.
            </span>
          </div>
        </div>

        <div className="w-[45%] flex flex-col items-center justify-end gap-3">
          <Button
            title="SEE MY COVERAGE"
            className="text-primary bg-white hover:bg-primary hover:text-white border border-white cursor-pointer"
          />

          <span className=" xl:text-[13px] 2xl:text-[15px] 3xl-text-[18px] text-white italic">
            Takes less than 2 minutes!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeeRentalSection;
