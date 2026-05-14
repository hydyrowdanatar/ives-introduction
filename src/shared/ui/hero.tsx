import type { StaticImageData } from "next/image";
import HeroTitle from "./titles/heroTitle";
import { FC } from "react";

interface IProps {
  bgImage: StaticImageData;
  bgTitleImage?: StaticImageData;
  regularText: string;
  italicText: string;
  italicColor: string;
  regularColor: string;
  regularWidth: string;
  italicWidth: string;
  subTitle: string;
  subTitle_2?: string;
  subTitle_3?: string;
  subTitle_4?: string;
  isBrHave?: boolean;
  firstHero?: boolean;
}

const Hero: FC<IProps> = ({
  bgImage,
  bgTitleImage,
  regularText,
  italicText,
  regularWidth,
  italicWidth,
  italicColor,
  regularColor,
  subTitle,
  subTitle_2,
  subTitle_3,
  subTitle_4,
  isBrHave,
  firstHero = false,
}) => {
  return (
    <div
      className="w-full flex flex-col-reverse lg:flex-row "
      style={{
        height: "var(--hero-height)",
      }}
    >
      <div
        className="w-full lg:w-1/2 h-[330px] sm:h-[360px]  lg:h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      />
      <div
        className={`w-full lg:w-1/2 flex  items-center justify-center bg-cover bg-center bg-no-repeat py-11  ${firstHero ? "pb-3" : "pb-6"} px-6 xl:py-0 xl:px-0`}
        style={{ backgroundImage: bgTitleImage && `url(${bgTitleImage.src})` }}
      >
        <HeroTitle
          regularText={regularText}
          italicText={italicText}
          regularWidth={regularWidth}
          italicWidth={italicWidth}
          italicColor={italicColor}
          regularColor={regularColor}
          subTitle={subTitle}
          subTitle_2={subTitle_2}
          subTitle_3={subTitle_3}
          subTitle_4={subTitle_4}
          isBrHave={isBrHave}
        />
      </div>
    </div>
  );
};

export default Hero;
