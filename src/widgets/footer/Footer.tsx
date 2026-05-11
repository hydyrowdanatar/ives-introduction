import curve from "@/shared/assets/footerCurveBG.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#002B47] relative">
      <div
        className="w-full absolute left-0 right-0 bottom-[62px] xl:bottom-[78px] 2xl:bottom-[95px] 3xl:bottom-[124px] h-[29px] xl:h-[36px] 2xl:h-[42px] 3xl:h-[56px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${curve.src})` }}
      ></div>
      <div className="w-[92%] mx-auto h-[64px] xl:h-[80px] 2xl:h-[95px] 3xl:h-[124px] text-white flex items-center justify-start">
        <div className="flex items-end gap-3">
          <p className="text-[14px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] font-semibold">
            Frequently Asked Questions
          </p>
          <p className="text-[14px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] font-semibold">
            |
          </p>
          <p>
            <span className="text-[14px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] font-semibold">
              Contact Us
            </span>
            <span className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] font-semibold">
              (Speak to an Agent)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
