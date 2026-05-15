import QuoteTitle from "@/shared/ui/titles/quoteTitle";
import BindForm from "@/widgets/bind-page/BindForm";

export default function Bindpage() {
  return (
    <div className="w-full lg:w-[86%] mx-auto py-[70px] xl:py-[93px] 2xl:py-[110px] 3xl:py-[140px] flex flex-col lg:flex-row gap-[45px] items-start justify-between px-6 lg:px-0">
      <div className="w-full lg:w-[408px] xl:w-[513px] 2xl:w-[625px] 3xl:w-[790px]">
        <QuoteTitle
          title="Mynd Managed Advantage"
          subTitle_1="Because your property is managed by Mynd, you have access to this specialized landlord insurance program built to provide comprehensive protection and competitive pricing for Mynd owners."
          subTitle_2="This program is not available to the general marketplace. Let’s get your policy finalized we just need a few additional details."
          subTitleWidth=""
          titleWidth=""
        />
      </div>

      {/* form div */}
      <div className="w-full lg:w-[408px] xl:w-[513px] 2xl:w-[625px] 3xl:w-[790px] flex flex-col gap-[45px] lg:gap-[30px]">
        <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px]">
          We just need a few more details to get your policy started.
        </p>
        <BindForm />
      </div>
    </div>
  );
}
