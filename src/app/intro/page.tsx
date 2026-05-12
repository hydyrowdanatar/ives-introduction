import heroBackImage from "@/shared/assets/mainPhoto.png";
import IntroHero from "@/widgets/intor-page/IntroHero";

export default function IntroPage() {
  return (
    <div className="">
      <IntroHero
        bgImage={heroBackImage}
        regularText="Protect your rental property with "
        italicText="smart, fast, and reliable insurance coverage."
        regularWidth={"lg:w-[380px] lg:w-[318px] xl:w-[408px] 2xl:w-[500px]"}
        italicWidth={"w-full"}
        regularColor="text-foreground"
        italicColor="text-primary"
        isBrHave={false}
        subTitle="Easily compare coverage options and pricing designed for your rental property."
      />
    </div>
  );
}
