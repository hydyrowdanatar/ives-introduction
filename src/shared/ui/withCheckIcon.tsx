import { FC } from "react";
import useGetIcons from "../icons/getIcons";

interface IProps {
  check_1: string;
  check_2: string;
  check_3: string;
  check_4?: string;
}

const WithCheckIcon: FC<IProps> = ({ check_1, check_2, check_3, check_4 }) => {
  return (
    <div className="w-full flex items-center justify-around">
      <CheckLine sentence={check_1} />
      <CheckLine sentence={check_2} />
      <CheckLine sentence={check_3} />
      {check_4 && <CheckLine sentence={check_4} />}
    </div>
  );
};

export default WithCheckIcon;

const CheckLine = ({ sentence }: { sentence: string }) => {
  const { greenCheck } = useGetIcons();
  return (
    <div className="flex items-center gap-[10px]">
      {greenCheck}
      <span className="text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px] font-semibold">
        {sentence}
      </span>
    </div>
  );
};
