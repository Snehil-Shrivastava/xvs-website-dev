import "./ProcessCards.css";

import * as motion from "motion/react-client";
import ProcessGlowCards from "../ProcessGlowCards/ProcessGlowCards";

const cardData = [
    {
      Id: 1,
    heading: "Ideas",
    description: "It's really that simple, most of our ideas come from knowing people who are passionately working for what they believe and trying to make it happen. So we listen.",
  },
  {
    Id: 2,
    heading: "Blending",
    description: "Matching those ideas with the tools available and even going out on a limb to find something new that fits perfectly in an ever-evolving work.",
  },
];

const ProcessCards = () => {
  return (
    <div className="flex gap-[28px] mt-[64px] card-container justify-center items-center max-[1441px]:items-stretch max-[1025px]:items-stretch max-[769px]:items-stretch max-[426px]:gap-[8px] max-[426px]:mt-[22px]">
      {/* <div className="bg-[#ffffff24] backdrop-blur-2xl w-[580px] h-[auto] card-left">
        <div className="py-[48px] bg-[#2d2e2e] card-left-inner border border-[#ffffff24] flex flex-col gap-[48px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-center w-[80%] mx-auto gap-[32px] justify-center"
          >
            <div className="flex items-center relative bg-glow">
              <span
                className="w-[78px] h-[48px] block rounded-l-[28px] rounded-br-[22px] z-[5]"
                style={{
                  backdropFilter: "blur(2px)",
                  background: "rgba(221, 221, 221, 0.8)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(138, 138, 138, 0.23)",
                  transform: "rotate(45deg)",
                }}
              ></span>
              <span
                className="w-[35px] h-[29px] block absolute left-[67%] top-[12px] z-[3]"
                style={{
                  backdropFilter: "blur(2px)",
                  background: "#F79839",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(138, 138, 138, 0.23)",
                  transform: "rotate(-45deg) skew(-40deg)",
                }}
              ></span>
            </div>
            <h1 className="text-[64px] font-semibold tracking-wide text-[#F3EDDE]">
              Ideas
            </h1>
          </motion.div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[18px]/[35px] tracking-wider w-[72%] mx-auto font-light text-left"
          >
            It's really that simple, most of our ideas come from knowing people
            who are passionately working for what they believe and trying to
            make it happen. So we listen.
          </motion.p>
        </div>
      </div> */}
      {/* <div className="bg-[#ffffff24] backdrop-blur-2xl w-[580px] h-[auto] card-right">
        <div className="py-[48px] bg-[#2d2e2e] card-right-inner border border-[#ffffff24] flex flex-col gap-[48px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-center w-[80%] mx-auto gap-[32px] justify-center"
          >
            <div className="flex items-center relative bg-glow">
              <span className="w-[45px] h-[50px] bg-[#5F5F5C] block rounded-[5px]"></span>
              <span
                className="w-[50px] h-[70px] block rounded-[5px] absolute left-1/2 -translate-x-1/2"
                style={{
                  backdropFilter: "blur(2px)",
                  background: "rgba(221, 221, 221, 0.8)",
                  borderRadius: "5px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(138, 138, 138, 0.23)",
                }}
              ></span>
              <span className="w-[45px] h-[50px] bg-[#F79839] block rounded-[5px]"></span>
            </div>
            <h1 className="text-[64px] font-semibold tracking-wide text-[#F3EDDE]">
              Blending
            </h1>
          </motion.div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[18px]/[35px] tracking-wider w-[72%] mx-auto font-light text-left"
          >
            Matching those ideas with the tools available and even going out on
            a limb to find something new that fits perfectly in an ever-evolving
            work.
          </motion.p>
        </div>
      </div> */}
      {cardData.map((data, index) => (
        <ProcessGlowCards
        key={index}
        order={data.Id}
        heading={data.heading}
        description={data.description}
        />
      ))}
    </div>
  );
};

export default ProcessCards;
