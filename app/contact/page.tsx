import SectionHeadingText from "../components/SectionHeadingText/SectionHeadingText";
import Form from "next/form";

import "./contactStyle.css";
import Image from "next/image";

import bgImg from "../../public/assests/contact-bg.png";

import sendIcon from "../../public/assests/send-icon.png";

const Contact = () => {
  const handleFormSubmit = (e: any) => {
    console.log("form submitted!", e);
  };

  return (
    <div className="pt-[15%] xl:pt-[10%] 2xl:pt-[7%] relative h-[100vh]">
      <div
        className="absolute w-[320px] h-[320px] bg-white/[0.1] rounded-full left-1/2 -translate-1/2 top-0 z-10"
        style={{
          boxShadow: "0 0 550px 250px rgba(255, 255, 255, 0.1)",
        }}
      ></div>
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage:
            "radial-gradient(920px circle at center, #000000, transparent)",
        }}
      >
        <div className="glow-dot-1 blur-xs"></div>
        <div className="glow-dot-2 blur-xs"></div>
        <div className="glow-dot-3 blur-xs"></div>
        <div className="glow-dot-4 blur-xs"></div>
        <div className="glow-dot-5 blur-xs"></div>
        <div className="glow-dot-6 blur-xs"></div>
        <div className="glow-dot-7 blur-xs"></div>
        <div className="glow-dot-8 blur-xs"></div>
        <div className="glow-dot-9 blur-xs"></div>
        <div className="glow-dot-10 blur-xs"></div>
        <Image
          src={bgImg}
          alt="background"
          className="object-cover w-full h-full"
        />
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
      <div className="w-[80%] 2xl:w-1/2 mx-auto relative">
        {/* <div
          className="absolute left-[20px] right-[20px] top-[30px] bottom-[30px] z-[1] bg-neutral-900/10 backdrop-blur-sm"
        ></div> */}
        {/* <div className="absolute inset-0 radial-light-container"></div> */}
        {/* <div className="absolute -left-1/2 -bottom-1/10 w-[100vw] h-[290px]" style={{
          background: 'linear-gradient(to bottom, transparent, #282828)',
          backgroundColor: 'rgba(40, 40, 40, 0.4)',
          filter: 'blur(2px)'
        }}></div> */}
        <div
          className="w-full h-full relative bg-neutral-50/20 backdrop-blur-xs"
          style={{
            // clipPath:
            //   "polygon(0% 15%, 0% 100%, 100% 100%, 100% 15%, 95% 0%, 5% 0%)",
            clipPath:
              "polygon(0 38px, 1px 100%, calc(100% - 1px) 100%, 100% 38px, calc(100% - 38px) 0%, 38px 0%)",
          }}
        >
          <div
            className="w-full h-full relative bg-neutral-950/70 backdrop-blur-sm"
            style={{
              clipPath:
                "polygon(calc(100% - 99.8%) 38px, 0 100%, 100% 100%, 99.8% 38px, calc(100% - 38px) calc(100% - 99.8%), 38px calc(100% - 99.8%))",
            }}
          >
            <div className="py-12 relative">
              {/* <div
              className="absolute bottom-0 left-0 right-0 h-[320px] pointer-events-none"
                style={{
                  background: "linear-gradient(to top, #282828 40%, transparent)",
                }}
              ></div> */}
              <SectionHeadingText
                SectionTitle="CONNECT"
                buttonTitle="TOUCH"
                tracking="32px"
              />
              <div className="w-3/4 mx-auto mt-16">
                <div>
                  <Form action="">
                    <div className="text-sm flex flex-col gap-12 text-[#ffffffad]">
                      <div className="flex flex-col gap-6">
                        <label htmlFor="name" className="text-neutral-50">
                          Name*
                        </label>
                        <input
                          id="name"
                          className="outline-none border-b border-[#525151] py-[8px] px-[6px]"
                          type="text"
                          placeholder="John Doe"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="flex gap-12">
                        <div className="flex flex-col gap-6 flex-1">
                          <label htmlFor="email" className="text-neutral-50">
                            Email*
                          </label>
                          <input
                            id="email"
                            className="outline-none border-b border-[#525151] py-[8px] px-[6px]"
                            type="email"
                            placeholder="johndoe@xyz.com"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                          <label htmlFor="phone" className="text-neutral-50">
                            Contact*
                          </label>
                          <input
                            id="phone"
                            className="outline-none border-b border-[#525151] py-[8px] px-[6px]"
                            type="text"
                            placeholder="+91-88788-78878"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 flex-1">
                        <label htmlFor="message" className="text-neutral-50">
                          Message*
                        </label>
                        <textarea
                          id="message"
                          className="outline-none resize-none field-sizing-content border-b border-[#525151] py-[8px] px-[6px]"
                          placeholder="Drop your message"
                          required
                        />
                      </div>
                    </div>

                    <div className="text-3xl text-[#F39638] my-16 relative send-btn-cnt">
                      <button
                        className="relative z-5 w-full p-3 flex justify-end align-center cursor-pointer send-btn"
                        type="submit"
                      >
                        <span className="">Send</span>
                        <Image
                          src={sendIcon}
                          alt="Send"
                          className="inline mx-4"
                        />
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
