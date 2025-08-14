import SectionHeadingText from "../components/SectionHeadingText/SectionHeadingText";
import Form from "next/form";

import "./contactStyle.css";
import Image from "next/image";

import bgImg from "../../public/assests/contact-bg.png";

const Contact = () => {
  return (
    <div className="pt-[15%] relative h-[100vh]">
      <div className="absolute inset-0 radial-light z-0">
        <Image
          src={bgImg}
          alt="background"
          className="object-cover w-full h-full"
        />
        {/* <div className="absolute inset-0">
          <span className="lights"></span>
          <span className="lights"></span>
          <span className="lights"></span>
        </div> */}
      </div>
      {/* <div className="relative w-2/3 mx-auto border border-[#333] contact-form-box bg-[#333]">
        <div className="w-full h-full py-[48px] bg-[#282828] contact-form-content">
          <div className=" text-center w-[80%] mx-auto">
            <SectionHeadingText
              SectionTitle="CONNECT"
              buttonTitle="TOUCH"
              size="8rem"
            />
            <div className="p-[32px]">
              <Form action="#">
                <label className="block text-left mb-[12px]">Name*</label>
                <input
                  type="text"
                  className="border-b border-[#525151] w-full py-[8px] px-[6px] outline-none"
                  placeholder="John Doe"
                  required
                />
                <div className="flex gap-[52px] mt-[48px]">
                  <div className="flex-1">
                    <label className="block text-left mb-[12px]">Email*</label>
                    <input
                      type="text"
                      className="border-b border-[#525151] w-full py-[8px] px-[6px] outline-none"
                      placeholder="johndoe@xyz.com"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-left mb-[12px]">
                      Contact*
                    </label>
                    <input
                      type="text"
                      className="border-b border-[#525151] w-full py-[8px] px-[6px] outline-none"
                      placeholder="+91-88788-78878"
                      required
                    />
                  </div>
                </div>
                <div className="mt-[56px]">
                  <label className="block text-left mb-[12px]">Message*</label>
                  <textarea
                    className="border-b border-[#525151] w-full py-[8px] px-[6px] outline-none field-sizing-content resize-none"
                    placeholder="Drop your message..."
                    required
                  />
                </div>
                <div className=" mt-[56px] clip-path-style">
                  <button className="text-[#F39638] bg-[#282828] font-bold text-3xl w-full text-right px-[48px] py-[10px] clip-path-style2 cursor-pointer relative">
                    Send
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div> */}

      {/* contact form */}
      <div className="w-[90%] mx-auto h-[520px] main-container">
        <div className="w-full h-full relative contact-form-wrapper">
          <div className="w-full h-full relative contact-form-container">
            <div>
              <SectionHeadingText SectionTitle="CONNECT" buttonTitle="TOUCH" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
