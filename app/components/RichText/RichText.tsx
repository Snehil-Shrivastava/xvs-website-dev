import React from "react";
import RichTxtSVG from "../SVGs/RichTxtSVG";

const RichText = () => {
  return (
    <>
      <RichTxtSVG />
      <p
        // @ts-ignore
        className="font-light text-center w-4/5 mx-auto text-[#F3EDDE] text-[0.5rem]/[1rem] sm:max-lg:text-[1rem]/[2rem] lg:max-xl:text-[1rem]/[2rem] lg:max-xl:w-7/10 lg:max-xl:mt-15 xl:max-2xl:text-[1.25rem]/[2.5rem] xl:max-2xl:mt-20 xl:max-2xl:w-3/5 min-[1536px]:max-[1906px]:text-[1.75rem]/[3rem] min-[1536px]:max-[1906px]:w-3/5 min-[1536px]:max-[1906px]:mt-20 min-[1906px]:text-[2rem]/[3.5rem] min-[1906px]:w-3/5 min-[1906px]:mt-25 mt-[22px]"
      >
        With the inspiration of designing we started back in 2014 and bringing
        them to reality since then. From cosmetic startups to big automotive
        companies we had fun working at different scales and industries. We also
        picked a couple of awards along the way but customer satisfaction is
        what really mattered.
      </p>
    </>
  );
};

export default RichText;
