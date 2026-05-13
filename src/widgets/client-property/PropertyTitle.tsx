const PropertyTitle = () => {
  return (
    <div className="flex flex-col  gap-[45px] lg:w-[407px] xl:w-[513px] 2xl:w-[605px] 3xl:w-[790px]">
      <h1 className="text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[62px] leading-[44px] xl:leading-[55px] 2xl:leading-[65px] 3xl:leading-[55px]">
        To get started, we just need a few details about you and your property.
      </h1>

      <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px]">
        It’s quick and easy to fill out, <br />{" "}
        <span
          className="text-[22px] xl:text-[28px] 2xl:text-[33px] 3xl:text-[43px] leading-[26px] xl:leading-[33px] 2xl:leading-[39px] 3xl:leading-[50px] italic text-primary"
          style={{ fontFamily: "var(--font-taviraj)" }}
        >
          just a simple 1-2-3.
        </span>
      </p>
    </div>
  );
};

export default PropertyTitle;
