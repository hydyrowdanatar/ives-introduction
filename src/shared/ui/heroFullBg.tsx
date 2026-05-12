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
  isBrHave?: boolean;
}

const HeroFullBg: FC<IProps> = ({
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
  isBrHave,
}) => {
  return (
    <div
      className="w-full lg:h-[580px] xl:h-[714px] 2xl:h-[820px] 3xl:h-[1000px] flex flex-col-reverse lg:flex-row bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="w-full lg:w-1/2 h-[280px] sm:h-[360px]  lg:h-full " />
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#082E26]/90 py-11 px-6 lg:py-0 lg:px-0">
        <HeroTitle
          regularText={regularText}
          italicText={italicText}
          regularWidth={regularWidth}
          italicWidth={italicWidth}
          italicColor={italicColor}
          regularColor={regularColor}
          subTitle={subTitle}
          subTitle_2={subTitle_2}
          isBrHave={isBrHave}
        />
      </div>
    </div>
  );
};

export default HeroFullBg;
