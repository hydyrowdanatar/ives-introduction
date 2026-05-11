import navbarBG from "@/shared/assets/navbarBG.png";
import logo from "@/shared/assets/logoIcon.svg";
import Image from "next/image";
import useGetIcons from "@/shared/icons/getIcons";

const Navbar = () => {
  const { closeIcon } = useGetIcons();
  return (
    <div
      className="w-full h-[100px] xl:h-[127px] 2xl:h-[160px] 3xl:h-[200px] bg-cover bg-center bg-no-repeat flex items-center  fixed z-20"
      style={{ backgroundImage: `url(${navbarBG.src})` }}
    >
      <div className="flex items-center justify-between w-[92%] mx-auto">
        <Image src={logo} alt="logo" />
        <div>{closeIcon}</div>
      </div>
    </div>
  );
};

export default Navbar;
