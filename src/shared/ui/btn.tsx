const Button = ({
  title,
  className,
  onClick,
  disabled,
}: {
  title: string;
  className: string;
  onClick?: () => void | Promise<unknown>;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-[8px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[16px] px-[16px] xl:px-[20px] 2xl:px-[24px] 3xl:px-[30px] text-[15px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[24px] font-semibold tracking-widest cursor-pointer transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-95 active:brightness-90 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:brightness-100 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
