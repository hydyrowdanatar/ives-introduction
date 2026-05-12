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
      className={`py-[8px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[16px] px-[16px] xl:px-[20px] 2xl:px-[24px] 3xl:px-[30px] text-[15px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[24px] font-semibold tracking-widest transition-opacity disabled:opacity-30 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
