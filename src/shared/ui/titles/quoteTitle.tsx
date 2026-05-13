import { FC } from "react";

interface IProp {
  titleWidth: string;
  subTitleWidth: string;
  title: string;
  subTitle_1: string;
  subTitle_2?: string;
}

const QuoteTitle: FC<IProp> = ({
  titleWidth,
  subTitleWidth,
  title,
  subTitle_1,
  subTitle_2,
}) => {
  return (
    <div className="flex flex-col gap-3 lg:gap-8">
      <h1
        className={`text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[62px] leading-[37px] lg:leading-[44px] xl:leading-[55px] 2xl:leading-[65px] 3xl:leading-[55px] ${titleWidth}`}
      >
        {title}
      </h1>

      <div className="flex flex-col gap-4">
        <p
          className={`text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] ${subTitleWidth}`}
        >
          {subTitle_1}
        </p>

        <p
          className={`text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] ${subTitleWidth}`}
        >
          {subTitle_2}
        </p>
      </div>
    </div>
  );
};

export default QuoteTitle;
