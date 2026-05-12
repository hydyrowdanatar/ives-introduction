import Button from "@/shared/ui/btn";
import curve from "@/shared/assets/greenCurve.png";

const whiteCheck = (
  <svg
    width="35"
    height="26"
    viewBox="0 0 35 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.3999 13.9999L11.1999 23.7999L33.5999 1.3999"
      stroke="#DBF7A8"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LandlordSection = () => {
  return (
    <div className="w-full relative">
      <div className="w-full bg-primary-dark h-[400px] xl:h-[500px] 2xl:h-[590px] 3xl:h-[770px] flex items-center">
        <div className="w-[86%] mx-auto flex items-center justify-around">
          {/* Left */}
          <div className="w-[45%] flex flex-col gap-8">
            <p className="w-[265px] xl:w-[334px] 2xl:w-[394px] 3xl:w-[514px] text-white text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px] font-normal">
              Our landlord insurance program was created specifically
              <span
                className="ml-2 text-[#DBF7A8] text-[22px] xl:text-[28px] 2xl:text-[33px] 3xl:text-[43px] leading-[26px] xl:leading-[33px] 2xl:leading-[39px] 3xl:leading-[50px] font-normal italic"
                style={{ fontFamily: "var(--font-taviraj)" }}
              >
                for property owners who rent their homes to tenants.
              </span>
            </p>
            <p className="text-white w-[265px] xl:w-[334px] 2xl:w-[404px] 3xl:w-[514px] text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] font-normal">
              If your property is not insured correctly, a single claim or
              lawsuit could leave you paying significant out of pocket expenses.
            </p>
          </div>

          {/* Right */}
          <div className="w-[55%] flex flex-col gap-8">
            <div className="w-full flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div>{whiteCheck}</div>

                <div className="flex flex-col gap-[5px]">
                  <p className="text-secondary font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px]">
                    Property Protection
                  </p>
                  <p className="text-white font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px]">
                    Coverage designed for the types of damage rental properties
                    face.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div>{whiteCheck}</div>

                <div className="flex flex-col gap-[5px]">
                  <p className="text-secondary font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px]">
                    Liability Protection
                  </p>
                  <p className="text-white font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px]">
                    Protection against lawsuits and claims involving tenants or
                    guests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div>{whiteCheck}</div>

                <div className="flex flex-col gap-[5px]">
                  <p className="text-secondary font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px]">
                    Investment Protection
                  </p>
                  <p className="text-white font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px]">
                    Insurance designed to help safeguard the value of your
                    rental property.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-7 text-white text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] font-normal text-center">
              Get a quote in minutes and see how your coverage compares.
            </p>

            <div className="flex justify-center">
              <Button
                title="VIEW MY OPTIONS"
                className="text-primary border border-white bg-white w-fit hover:bg-primary hover:text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full absolute left-0 right-0 top-[400px] xl:top-[500px] 2xl:top-[590px] 3xl:top-[770px] h-[29px] xl:h-[36px] 2xl:h-[42px] 3xl:h-[56px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${curve.src})` }}
      ></div>
    </div>
  );
};

export default LandlordSection;
