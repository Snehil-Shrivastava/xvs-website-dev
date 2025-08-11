import Image from "next/image";

import "./Clients.css";

import logo1 from "../../../public/assests/Layer_1 (2).png";

import logo2 from "../../../public/assests/Group.png";

const Clients = () => {
  return (
    <div className="py-[98px] bg-neutral-200 mt-[64px] review-box">
      <div className="w-[80%] mx-auto">
        <div className="client-banner pb-[88px] select-none">
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />

          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo1} alt="" className="mx-auto" />
        </div>
        <div className="mt-[48px]">
          <div className="flex gap-[22px] justify-center select-none">
            <Image src={logo2} alt="" />
            <Image src={logo2} alt="" />
          </div>
          <div className="flex mt-[88px] text-left gap-[32px] justify-between">
            <div className="w-[320px]">
              <h3 className="font-bold tracking-wider">
                Atullya Narayan Srivastava
              </h3>
              <span className="text-[#ffffff66]">Owner, Enlyt</span>
              <div className="mt-[16px]">
                <h1 className="font-bold text-[36px]">5.0</h1>
              </div>
              <p className="font-light text-[14px]">
                "My overall experience with xVS Creations was overwhelmingly
                positive."
              </p>
            </div>
            <div className="w-[320px]">
              <h3 className="font-bold tracking-wider">
                Atullya Narayan Srivastava
              </h3>
              <span className="text-[#ffffff66]">Owner, Enlyt</span>
              <div className="mt-[16px]">
                <h1 className="font-bold text-[36px]">5.0</h1>
              </div>
              <p className="font-light text-[14px]">
                "My overall experience with xVS Creations was overwhelmingly
                positive."
              </p>
            </div>
            <div className="w-[320px]">
              <h3 className="font-bold tracking-wider">
                Atullya Narayan Srivastava
              </h3>
              <span className="text-[#ffffff66]">Owner, Enlyt</span>
              <div className="mt-[16px]">
                <h1 className="font-bold text-[36px]">5.0</h1>
              </div>
              <p className="font-light text-[14px]">
                "My overall experience with xVS Creations was overwhelmingly
                positive."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
