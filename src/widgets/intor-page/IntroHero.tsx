// "use client";
// import Button from "@/shared/ui/btn";
// import HeroTitle from "@/shared/ui/titles/heroTitle";
// import type { StaticImageData } from "next/image";
// import { useRouter } from "next/navigation";
// import { FC } from "react";

// interface IProps {
//   bgImage: StaticImageData;
//   bgTitleImage?: StaticImageData;
//   regularText: string;
//   italicText: string;
//   italicColor: string;
//   regularColor: string;
//   regularWidth: string;
//   italicWidth: string;
//   subTitle: string;
//   subTitle_2?: string;
//   isBrHave?: boolean;
// }

// const IntroHero: FC<IProps> = ({
//   bgImage,
//   bgTitleImage,
//   regularText,
//   italicText,
//   regularWidth,
//   italicWidth,
//   italicColor,
//   regularColor,
//   subTitle,
//   subTitle_2,
//   isBrHave,
// }) => {
//   const router = useRouter();
//   return (
//     <div className="w-full h-[580px] xl:h-[714px] 2xl:h-[820px] 3xl:h-[1000px] flex">
//       <div
//         className="w-1/2 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage.src})` }}
//       />
//       <div
//         className="w-1/2 flex  items-center justify-center bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: bgTitleImage && `url(${bgTitleImage.src})` }}
//       >
//         <div className="flex flex-col gap-[45px]">
//           <HeroTitle
//             regularText={regularText}
//             italicText={italicText}
//             regularWidth={regularWidth}
//             italicWidth={italicWidth}
//             italicColor={italicColor}
//             regularColor={regularColor}
//             subTitle={subTitle}
//             subTitle_2={subTitle_2}
//             isBrHave={isBrHave}
//           />
//           <div>
//             <span className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px] mr-2">
//               See coverage options
//             </span>
//             <span
//               className="text-[22px] xl:text-[28px] 2xl:text-[33px] 3xl:text-[43px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px] text-primary italic"
//               style={{ fontFamily: "var(--font-taviraj)" }}
//             >
//               in minutes
//             </span>
//           </div>
//           <div className="flex flex-col gap-4 -mt-4">
//             <div className="flex items-center gap-2">
//               <span>{greenCheckIcon}</span>
//               <span className="font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
//                 Coverage designed specifically for rental properties.
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>{greenCheckIcon}</span>
//               <span className="font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
//                 Choose from 3 options to match your risk strategy.
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>{greenCheckIcon}</span>
//               <span className="font-semibold text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
//                 Competitive pricing available nationwide.
//               </span>
//             </div>
//           </div>
//           <div className="flex items-center  gap-3 -mt-4">
//             <Button
//               title="GET QUOTE"
//               className="text-white bg-primary hover:bg-secondary cursor-pointer hover:text-primary"
//             />
//             <Button
//               title="LEARN MORE"
//               //   className="text-primary bg-transparent border border-primary hover:bg-primary-secondary cursor-pointer transition-all duration-200"
//               className="text-primary bg-transparent border border-primary hover:bg-secondary cursor-pointer hover:border-secondary"
//               onClick={() => router.push("/")}
//             />
//           </div>

//           <span className="italic text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] -mt-4">
//             Takes less than 2 minutes!
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroHero;

// const greenCheckIcon = (
//   <svg
//     width="22"
//     height="16"
//     viewBox="0 0 22 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M0.875 8.75L7 14.875L21 0.875"
//       stroke="#00785E"
//       strokeWidth="1.75"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

"use client";
import Button from "@/shared/ui/btn";
import HeroTitle from "@/shared/ui/titles/heroTitle";
import type { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface IProps {
  bgImage: StaticImageData;
  bgTitleImage?: StaticImageData;
  regularText: string;
  italicText: string;
  italicColor: string;
  regularColor: string;
  regularWidth: string;
  italicWidth: string;
  subTitle: string;
  subTitle_2?: string;
  isBrHave?: boolean;
}

const IntroHero: FC<IProps> = ({
  bgImage,
  bgTitleImage,
  regularText,
  italicText,
  regularWidth,
  italicWidth,
  italicColor,
  regularColor,
  subTitle,
  subTitle_2,
  isBrHave,
}) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row lg:h-[580px] xl:h-[714px] 2xl:h-[820px] 3xl:h-[1000px]">
      {/* Image: bottom on mobile, left half on desktop */}
      <div
        className="w-full h-[280px] sm:h-[360px] lg:w-1/2 lg:h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      />

      {/* Content: top on mobile, right half on desktop */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center bg-no-repeat py-10 px-6 sm:px-10 xl:py-0 xl:px-0"
        style={{ backgroundImage: bgTitleImage && `url(${bgTitleImage.src})` }}
      >
        <div className="flex flex-col gap-[28px] xl:gap-[45px] ">
          <HeroTitle
            regularText={regularText}
            italicText={italicText}
            regularWidth={regularWidth}
            italicWidth={italicWidth}
            italicColor={italicColor}
            regularColor={regularColor}
            subTitle={subTitle}
            subTitle_2={subTitle_2}
            isBrHave={isBrHave}
          />

          <div>
            <span className="text-[18px] sm:text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px] mr-2">
              See coverage options
            </span>
            <span
              className="text-[20px] sm:text-[22px] xl:text-[28px] 2xl:text-[33px] 3xl:text-[43px] leading-[25px] xl:leading-[32px] 2xl:leading-[38px] 3xl:leading-[50px] text-primary italic"
              style={{ fontFamily: "var(--font-taviraj)" }}
            >
              in minutes.
            </span>
          </div>

          <div className="flex flex-col gap-3 xl:gap-4 -mt-2 xl:-mt-4">
            <div className="flex items-center gap-2">
              <span className="shrink-0">{greenCheckIcon}</span>
              <span className="font-semibold text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
                Coverage designed specifically for rental properties.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="shrink-0">{greenCheckIcon}</span>
              <span className="font-semibold text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
                Choose from 3 options to match your risk strategy.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="shrink-0">{greenCheckIcon}</span>
              <span className="font-semibold text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
                Competitive pricing available nationwide.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:gap-3 -mt-2 xl:-mt-4">
            <Button
              title="GET QUOTE"
              className="text-white bg-primary hover:bg-secondary cursor-pointer hover:text-primary w-1/2 lg:w-fit"
            />
            <Button
              title="LEARN MORE"
              className="text-primary bg-transparent border border-primary hover:bg-secondary cursor-pointer hover:border-secondary w-1/2 lg:w-fit"
              // onClick={() => router.push("/landing")}
            />
          </div>

          <span className="italic text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] -mt-2 xl:-mt-4">
            Takes less than 2 minutes!
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroHero;

const greenCheckIcon = (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.875 8.75L7 14.875L21 0.875"
      stroke="#00785E"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
