import Image from "next/image";

import "./Clients.css";

import logo1 from "../../../public/assests/Layer_1 (2).png";

import logo2 from "../../../public/assests/Group.png";

const Clients = () => {
  const clientReviews = [
    {
      id: 1,
      name: "Atullya Narayan Srivastava",
      designation: "Owner, Enlyt",
      rating: "5.0",
      review:
        '"My overall experience with xVS Creations was overwhelmingly positive."',
    },
    {
      id: 2,
      name: "Atullya Narayan Srivastava",
      designation: "Owner, Enlyt",
      rating: "5.0",
      review:
        '"My overall experience with xVS Creations was overwhelmingly positive."',
    },
    {
      id: 3,
      name: "Atullya Narayan Srivastava",
      designation: "Owner, Enlyt",
      rating: "5.0",
      review:
        '"My overall experience with xVS Creations was overwhelmingly positive."',
    },
  ];

  return (
    <div className="py-[98px] mt-[64px] review-box max-[769px]:py-[48px]">
      <div className="w-[80%] mx-auto max-[1025px]:w-[90%]">
        <div className="client-banner pb-[88px] select-none max-[769px]:pb-[48px]">
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />

          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
          <Image src={logo1} alt="" className="mx-auto max-[1025px]:w-[102px]" />
        </div>
        <div className="mt-[48px]">
          <div className="flex gap-[22px] justify-center select-none">
            <Image src={logo2} alt="" />
            <Image src={logo2} alt="" />
          </div>
          <div className="flex mt-[88px] text-left gap-[32px] justify-between max-[769px]:mt-[48px]">
            {clientReviews.map((item, index) => (
              <div key={index} className="w-[320px]">
                <h3 className="font-bold tracking-wider max-[1025px]:text-[0.875rem]">
                  {item.name}
                </h3>
                <span className="text-[#ffffff66] max-[1025px]:text-[0.75rem]">
                  {item.designation}
                </span>
                <div className="mt-[16px]">
                  <h1 className="font-bold text-[2.25rem] max-[1025px]:text-[1.75rem]">
                    {item.rating}
                  </h1>
                </div>
                <p className="font-light text-[14px] max-[1025px]:text-[0.75rem]">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
