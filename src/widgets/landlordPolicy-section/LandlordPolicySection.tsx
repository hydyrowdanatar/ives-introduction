import curve from "@/shared/assets/greenCurve.png";
import Button from "@/shared/ui/btn";

const LandlordPolicySection = () => {
  return (
    <div className="w-full relative">
      <div className="w-full bg-primary-dark lg:h-[284px] xl:h-[358px] 2xl:h-[422px] 3xl:h-[550px] flex items-center py-11 px-6 lg:py-0 lg:px-0">
        <div className="w-full lg:w-[86%] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-around">
          {/* left side */}
          <div className="w-full lg:w-[60%] flex flex-col gap-8 items-start">
            <p className="text-white text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px]">
              Many landlords don't realize their policy restricts coverage
              during vacancy until a claim happens.
            </p>

            <ul className="ml-5 list-disc list-outside flex flex-col gap-2 lg:gap-3 ">
              <li className="text-white text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
                Renovations and repairs take time
              </li>
              <li className="text-white text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] w-[240px] xl:w-[261px] 2xl:w-[300px] 3xl:w-[337px]">
                Tenant turnover happens- typical policy 30-60 days vacancy
                exclusion
              </li>
              <li className="text-white text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px]">
                Coverage designed for real rental operations
              </li>
            </ul>
          </div>

          {/* right */}
          <div className="w-full lg:w-[40%] flex lg:items-center lg:justify-center mt-11 lg:mt-0">
            <Button
              title="SEE MY COVERAGE"
              className="text-primary bg-white hover:bg-primary hover:text-white border border-white cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full absolute left-0 right-0 xl:bottom-[-36px] h-[29px] xl:h-[36px] 2xl:h-[42px] 3xl:h-[56px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${curve.src})` }}
      ></div>
    </div>
  );
};

export default LandlordPolicySection;
