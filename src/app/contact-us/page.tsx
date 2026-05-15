import Hero from "@/shared/ui/hero";
import teamBackImage from "@/shared/assets/landing/teamBG.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ives",
};

export default function ContactUsPage() {
  return (
    <div>
      <Hero
        bgImage={teamBackImage}
        regularText="Contact Us"
        italicText=""
        regularWidth={"lg:w-[368px] xl:w-[468px] 2xl:w-[580px]"}
        italicWidth={""}
        regularColor="text-foreground"
        italicColor=""
        subTitle="Whether you're getting a quote or managing your policy, out team is here to help."
        subTitle_2="If you have any questions or need assistance, please fell free to reach out anytime"
        contact={true}
      />
    </div>
  );
}
