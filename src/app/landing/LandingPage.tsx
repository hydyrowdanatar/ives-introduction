import Hero from "@/shared/ui/hero";
import heroBackImage from "@/shared/assets/landing/heroBG.png";
import insuranceBackImage from "@/shared/assets/landing/insuranceBG.png";
import insuranceTitleBackImage from "@/shared/assets/landing/bgInsurance.png";
import coverageBackImage from "@/shared/assets/landing/coverageBG.png";
import teamBackImage from "@/shared/assets/landing/teamBG.png";
import protectionBackImage from "@/shared/assets/landing/protectionBG.png";
import rentalBackImage from "@/shared/assets/landing/rentalBG.png";
import HeroFullBg from "@/shared/ui/heroFullBg";
import InfoSection from "@/widgets/info-section/InfoSection";
import CoverageSection from "@/widgets/coverage-section/CoverageSection";
import HeroTitle from "@/shared/ui/titles/heroTitle";
import LandlordSection from "@/widgets/landlord-section/LandlordSection";
import LandlordPolicySection from "@/widgets/landlordPolicy-section/LandlordPolicySection";
import SeeRentalSection from "@/widgets/seeRental-section/SeeRental";

const LandingPage = () => {
  return (
    <>
      <Hero
        bgImage={heroBackImage}
        regularText="Do you have the right insurance for "
        italicText="your rental property?"
        regularWidth={"lg:w-[318px] xl:w-[408px] 2xl:w-[500px] 3xl:w-[630px]"}
        italicWidth={"w-full"}
        regularColor="text-foreground"
        italicColor="text-primary"
        subTitle="Not all landlord insurance policies are created equal. The coverage selected and the price it is offered at are usually 
in conflict."
      />

      <InfoSection
        regularText="We’ve built a specialized insurance program exclusively"
        italicText="for Mynd partners."
        regularWidth={"w-full"}
        italicWidth={"w-full"}
        regularColor="text-foreground"
        italicColor="text-primary"
        subTitle="Our policies are designed specifically for rental property owners. The coverage is comprehensive and we are able to offer these policies at great rates."
        check_1="Protection designed for rental properties."
        check_2="Flexible coverage options for landlords."
        check_3="Competitive pricing vs. the insurance market."
        btnTitle="GET MY QUOTE"
        bottomSubTitle={true}
        isBrHave
      />
      <Hero
        bgImage={insuranceBackImage}
        bgTitleImage={insuranceTitleBackImage}
        regularText="Insurance Designed for"
        italicText="Rental Property Owners"
        regularWidth={"w-full lg:w-[388px] xl:w-[498px] 2xl:w-[560px]"}
        italicWidth={"w-full"}
        regularColor="text-white"
        italicColor="text-secondary"
        subTitle="Insurance policy limitations and exclusions are real! Homeowners insurance is not designed to cover the unique risks of rental properties."
        subTitle_2="Even some landlord policies that appear comprehensive may exclude or limit important coverage, such dog bites or pipe bursts."
      />

      <LandlordSection />

      <Hero
        bgImage={coverageBackImage}
        regularText="Coverage Built Around"
        italicText="Real Landlord Risks"
        regularWidth={"lg:w-[368px] xl:w-[468px] 2xl:w-[560px]"}
        italicWidth={"w-full"}
        regularColor="text-foreground"
        italicColor="text-primary"
        subTitle="Your rental property is more than just a building it’s an investment that generates income and builds long-term wealth."
        subTitle_2="Unfortunately, it is also exposed to risks that many standard policies fail to fully protect."
      />

      <CoverageSection />

      <HeroFullBg
        bgImage={protectionBackImage}
        regularText="Protection"
        italicText="Even During Vacancy"
        regularWidth={"w-full lg:w-[368px] xl:w-[468px] 2xl:w-[560px]"}
        italicWidth={"w-full"}
        regularColor="text-white"
        italicColor="text-secondary"
        subTitle="Many landlord policies restrict or cancel coverage if a property becomes vacant. "
        subTitle_2="Our program is designed to help protect your investment even while you are searching for the next tenant or completing repairs and renovations."
      />

      <LandlordPolicySection />

      <Hero
        bgImage={teamBackImage}
        regularText="A Team That Supports You "
        italicText="When It Matters Most"
        regularWidth={"lg:w-[368px] xl:w-[468px] 2xl:w-[560px]"}
        italicWidth={""}
        regularColor="text-foreground"
        italicColor="text-primary"
        subTitle="Our team has decades of experience working with landlords and real estate investors across the country. "
        subTitle_2="We work closely with landlords and investors every day. We understand the urgency of protecting your property and your rental income when something goes wrong."
        // isBrHave={false}
      />

      <InfoSection
        regularText="Protecting rental properties "
        italicText="requires specialized knowledge."
        regularWidth={"w-full"}
        italicWidth={"w-full"}
        regularColor="text-foreground"
        italicColor="text-primary"
        subTitle="When a claim happens, having the right insurance is very important but having the right team behind you can make all the difference."
        check_1="Dedicated Claims Support"
        check_2="Real People You Can Contact"
        check_3="Landlord Insurance Specialists"
        check_4="Landlord Insurance Specialists"
        check4={true}
        btnTitle="Get My Landlord Insurance Quote"
        inLine={true}
      />

      <Hero
        bgImage={rentalBackImage}
        bgTitleImage={insuranceTitleBackImage}
        regularText="See If Your Rental Property Is "
        italicText="Properly Protected"
        regularWidth={"lg:w-[408px] xl:w-[518px] 2xl:w-[610px]"}
        italicWidth={"w-full"}
        regularColor="text-white"
        italicColor="text-secondary"
        subTitle="Many landlords assume their current insurance policy provides the protection they need, but coverage gaps are more common than most realize."
        isBrHave={false}
      />

      <SeeRentalSection />
    </>
  );
};

export default LandingPage;
