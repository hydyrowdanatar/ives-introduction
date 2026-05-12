import navbarBG from "@/shared/assets/navbarBG.png";
import logo from "@/shared/assets/logoIcon.svg";
import Image from "next/image";
import useGetIcons from "@/shared/icons/getIcons";

const Navbar = () => {
  const { closeIcon } = useGetIcons();
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat flex items-center  fixed z-20"
      style={{
        backgroundImage: `url(${navbarBG.src})`,
        height: "var(--navbar-height)",
      }}
    >
      <div className="flex items-center justify-between w-[92%] mx-auto">
        <Image src={logo} alt="logo" />
        <div>{closeIcon}</div>
      </div>
    </div>
  );
};

export default Navbar;
