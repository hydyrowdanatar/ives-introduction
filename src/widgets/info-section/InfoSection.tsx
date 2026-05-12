import Button from "@/shared/ui/btn";
import HeroTitle from "@/shared/ui/titles/heroTitle";
import WithCheckIcon from "@/shared/ui/withCheckIcon";
import { FC } from "react";

interface IProps {
  regularText: string;
  italicText: string;
  italicColor: string;
  regularColor: string;
  regularWidth: string;
  italicWidth: string;
  subTitle: string;
  subTitle_2?: string;
  isBrHave?: boolean;
  bottomSubTitle?: boolean;
  btnTitle: string;
  check_1: string;
  check_2: string;
  check_3: string;
  check_4?: string;
  check4?: boolean;
  inLine?: boolean;
  check?: boolean;
}
const InfoSection: FC<IProps> = ({
  regularText,
  italicText,
  regularWidth,
  italicWidth,
  italicColor,
  regularColor,
  subTitle,
  subTitle_2,
  isBrHave = false,
  bottomSubTitle = false,
  btnTitle,
  check = true,
  check4 = false,
  check_1,
  check_2,
  check_3,
  check_4,
  inLine,
}) => {
  return (
    <div className="w-full lg:h-[400px] xl:h-[500px] 2xl:h-[590px] 3xl:h-[770px] bg-bright flex items-center justify-center py-11 px-6 lg:py-0 lg:px-0">
      <div className="w-full lg:w-[86%] mx-auto flex flex-col gap-[30px] lg:items-center">
        <div className="lg:text-center">
          <div>
            <span
              className={`inline-block ${regularColor} mr-2 text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px]  font-normal`}
            >
              {regularText}
            </span>
            {isBrHave && <br />}
            <span
              className={`inline-block  ${italicColor} text-[22px] xl:text-[28px] 2xl:text-[33px] 3xl:text-[43px] leading-[26px] xl:leading-[33px] 2xl:leading-[39px] 3xl:leading-[50px]   font-normal italic`}
              style={{ fontFamily: "var(--font-taviraj)" }}
            >
              {italicText}
            </span>
          </div>

          <div className="mt-[30px]">
            <span
              className={`block ${regularColor} lg:w-[500px] xl:w-[630px] 2xl:w-[750px] mx-auto text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]  font-normal`}
            >
              {subTitle}
            </span>
          </div>
        </div>

        {check4 ? (
          <WithCheckIcon
            check_1={check_1}
            check_2={check_2}
            check_3={check_3}
            check_4={check_4}
          />
        ) : (
          <WithCheckIcon
            check_1={check_1}
            check_2={check_2}
            check_3={check_3}
          />
        )}

        {bottomSubTitle && (
          <p className="lg:mt-[30px] lg:text-center text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px]">
            Get a quote in minutes and see how your coverage compares.
          </p>
        )}

        <Button
          title={btnTitle}
          className="text-white bg-primary w-fit mt-[30px] hover:bg-secondary hover:text-primary cursor-pointer border border-primary"
        />
      </div>
    </div>
  );
};

export default InfoSection;
