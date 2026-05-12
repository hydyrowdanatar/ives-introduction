import curve from "@/shared/assets/footerCurveBG.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#002B47] relative">
      <div
        className="w-full absolute left-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${curve.src})`,
          bottom: "var(--absolute-bottom)",
          height: "var(--curve-height)",
        }}
      ></div>
      <div
        className="w-[92%] mx-auto text-white flex items-center justify-start"
        style={{ height: "var(--footer-height)" }}
      >
        <div className="flex flex-col-reverse lg:flex-row lg:items-end gap-3">
          <p
            className="font-semibold"
            style={{
              fontSize: "var(--eighteen-size)",
            }}
          >
            Frequently Asked Questions
          </p>
          <p
            className="hidden lg:inline-block font-semibold"
            style={{
              fontSize: "var(--eighteen-size)",
            }}
          >
            |
          </p>
          <p>
            <span
              className="font-semibold"
              style={{
                fontSize: "var(--eighteen-size)",
              }}
            >
              Contact Us
            </span>
            <span
              className="font-semibold"
              style={{
                fontSize: "var(--fourteen-size)",
              }}
            >
              (Speak to an Agent)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
