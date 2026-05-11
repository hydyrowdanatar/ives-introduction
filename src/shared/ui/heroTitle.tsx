import { FC } from "react";

interface IProps {
  regularText: string;
  italicText: string;
  regularColor: string;
  italicColor: string;
  regularWidth: string;
  italicWidth: string;
  subTitle: string;
  subTitle_2?: string;
  isBrHave?: boolean;
  extraClassName?: boolean;
  extraSubTitleClassName?: boolean;
  coverageSubTitleWidth?: boolean;
  inLine?: boolean;
}
const HeroTitle: FC<IProps> = ({
  regularText,
  italicText,
  regularWidth,
  italicWidth,
  regularColor,
  italicColor,
  subTitle,
  subTitle_2,
  isBrHave = true,
  extraClassName = false,
  extraSubTitleClassName = false,
  coverageSubTitleWidth = false,
  inLine = false,
}) => {
  return (
    <div className="flex flex-col">
      {isBrHave ? (
        <div>
          <span
            className={`inline-block ${regularColor} ${regularWidth} ${extraClassName ? "text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px]" : "text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] leading-[44px] xl:leading-[55px] 2xl:leading-[65px] 3xl:leading-[84px]"}  font-normal`}
          >
            {regularText}
          </span>
          <br />

          <span
            className={`inline-block  ${italicColor} ${italicWidth} ${extraClassName ? "text-[22px] xl:text-[28px] 2xl:text-[33px] 3xl:text-[43px] leading-[26px] xl:leading-[33px] 2xl:leading-[39px] 3xl:leading-[50px] " : "text-[33px] xl:text-[42px] 2xl:text-[49px] 3xl:text-[64px] leading-[40px] xl:leading-[51px] 2xl:leading-[50px] 3xl:leading-[78px] "}  font-normal italic`}
            style={{ fontFamily: "var(--font-taviraj)" }}
          >
            {italicText}
          </span>
        </div>
      ) : (
        <p
          className={`inline-block ${regularColor} ${regularWidth} text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] leading-[44px] xl:leading-[55px] 2xl:leading-[65px] 3xl:leading-[84px] font-normal`}
        >
          <span>{regularText}</span>
          <span
            className={`${italicColor} text-[33px] xl:text-[42px] 2xl:text-[49px] 3xl:text-[64px] leading-[40px] xl:leading-[51px] 2xl:leading-[50px] 3xl:leading-[78px] font-normal italic`}
            style={{ fontFamily: "var(--font-taviraj)" }}
          >
            {italicText}
          </span>
        </p>
      )}

      <div className="mt-[30px]">
        {coverageSubTitleWidth ? (
          <span
            className={`block ${regularColor} w-[480px] xl:w-[600px] 2xl:w-[700px] mx-auto text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]  font-normal`}
          >
            {subTitle}
          </span>
        ) : (
          <span
            className={`block ${regularColor} ${extraClassName ? "w-[530px] xl:w-[630px] 2xl:w-[700px] mx-auto" : regularWidth} text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]  font-normal`}
          >
            {subTitle}
          </span>
        )}

        <span
          className={`block ${regularColor} ${regularWidth} text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] font-normal mt-7`}
        >
          {subTitle_2}
        </span>
      </div>
    </div>
  );
};

export default HeroTitle;
