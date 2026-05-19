"use client";

import navbarBG from "@/shared/assets/navbarBG.png";
import logo from "@/shared/assets/logoIcon.svg";
import miniLogo from "@/shared/assets/mobileLogoIcon.svg";
import Image from "next/image";
import useGetIcons from "@/shared/icons/getIcons";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { closeIcon, miniCloseIcon } = useGetIcons();
  const router = useRouter();
  const pathname = usePathname();
  const isIntroPage = pathname === "/intro";

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat flex items-center  fixed z-20"
      style={{
        backgroundImage: `url(${navbarBG.src})`,
        height: "var(--navbar-height)",
      }}
    >
      <div className="flex items-center justify-between w-[92%] mx-auto">
        <Image
          src={logo}
          alt="logo"
          className="hidden lg:flex cursor-pointer"
          onClick={() => router.push("/intro")}
        />
        <Image
          src={miniLogo}
          alt="logo"
          className="flex lg:hidden"
          onClick={() => router.push("/intro")}
        />
        {/* {isIntroPage && <div className="hidden lg:flex">{closeIcon}</div>}
        {isIntroPage && <div className="flex lg:hidden">{miniCloseIcon}</div>} */}
      </div>
    </div>
  );
};

export default Navbar;
