import localFont from "next/font/local";
import React, { JSX } from "react";

import './RichTxtBtn.css'

type RichTxtBtnProps = {
  label: string;
  svg?: JSX.Element;
};

const apercuRegular = localFont({
  src: "../../../public/fonts/apercu-pro (1)/apercu_regular_pro.otf",
});

const RichTxtBtn = ({ label, svg }: RichTxtBtnProps) => {
  return (
    // <div
    //   className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#ffffff56] ${apercuRegular.className} text-sm font-light text-[#F79839] backdrop-blur-xs`}
    //   style={{
    //     clipPath:
    //       "polygon(0 12px, 0 100%, calc(100% - 12px) 100%, 100% calc(100% - 12px), 100% 0%, 12px 0)",
    //   }}
    // >
    //   <div
    //     className="flex gap-2 items-center bg-[#0009] px-4 py-2"
    //     style={{
    //       clipPath:
    //         "polygon(1% 12px, 1% calc(100% - 1px), calc(100% - 12px) calc(100% - 1px), calc(100% - 1px) calc(100% - 12px), calc(100% - 1px) 1%, 12px 1%)",
    //     }}
    //   >
    //     <span>{label}</span>
    //     <div>{svg}</div>
    //   </div>
    // </div>

    <div
      className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#ffffff56] max-[1349px]:text-sm max-[769px]:text-[0.625rem] max-[426px]:text-[0.4rem] font-light text-[#F79839] btn-container`}
    >
      <div
        className="flex max-[1349px]:gap-3.5 max-[769px]:gap-2 max-[426px]:gap-1.5 items-center bg-[#0009] px-4 py-2 max-[426px]:px-2 max-[426px]:py-1.5 mx-[1%] my-[0.5%] backdrop-blur-xs btn"
      >
        <span className="text-nowrap">{label}</span>
        <div>{svg}</div>
      </div>
    </div>
  );
};

export default RichTxtBtn;
