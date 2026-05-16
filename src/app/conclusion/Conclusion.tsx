import Hero from "@/shared/ui/hero";
import heroBackImage from "@/shared/assets/landing/heroBG.png";
import Button from "@/shared/ui/btn";

const Conclusion = () => {
  return (
    <div className="w-full">
      <Hero
        bgImage={heroBackImage}
        regularText="Congratulation And"
        italicText="Thank You For Your Trust"
        regularWidth={
          "w-full lg:w-[318px] xl:w-[408px] 2xl:w-[500px] 3xl:w-[630px]"
        }
        italicWidth={"w-full"}
        regularColor="text-foreground"
        italicColor="text-primary"
        subTitle="Congratulations! Your policy is active."
        subTitle_2="You've taken advantage of an exclusive benefit available to Mynd-managed property owners."
        subTitle_3="This program was designed to help ensure Mynd clients have strong, comprehensive protection for their rental properties."
        subTitle_4="Thank you for trusting us with your insurance coverage we're excited to serve as your insurance partner."
      />

      <div className="w-full lg:h-[450px] xl:h-[500px] 2xl:h-[590px] 3xl:h-[770px] bg-bright flex flex-col items-center justify-center gap-7 lg:gap-[45px] py-11 px-6 lg:py-0 lg:px-0 text-center">
        {/* <h2 className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[28px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px] font-semibold">
          Set up your Insurance Account
        </h2>

        <p className="text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] font-normal w-full lg:w-[575px] xl:w-[650px] 2xl:w-[750px] 3xl:w-[750px]">
          Your policy is now active please create your <span>Tokio Marine</span>{" "}
          account to securely view your policy documents and manage your
          coverage online anytime
        </p> */}

        <span className="font-semibold text-primary text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
          LT000004963
        </span>

        <div className="flex items-center gap-[45px]">
          <Button
            title="DOWNLOAD EVIDENCE"
            className="text-white bg-primary hover:bg-secondary hover:text-primary"
          />
          {/* <Button
            title="DOWNLOAD INVOICE"
            className="text-white bg-primary hover:bg-secondary hover:text-primary"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
