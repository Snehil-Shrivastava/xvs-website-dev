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
      <div className="w-[80%] mx-auto">
        <div className="client-banner pb-[88px] select-none max-[769px]:pb-[48px]  max-[769px]:gap-[32px] max-[426px]:pb-[32px]">
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />

          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
          <Image src={logo1} alt="" className="mx-auto w-auto" />
        </div>
        <div className="mt-[48px] max-[769px]:mt-[32px] max-[426px]:mt-[22px]">
          <div className="flex gap-[22px] justify-center select-none">
            <Image className="max-[769px]:w-[37px] max-[426px]:w-[32px]" src={logo2} alt="" />
            <Image className="max-[769px]:w-[37px] max-[426px]:w-[32px]" src={logo2} alt="" />
          </div>
          <div className="flex mt-[88px] text-left gap-[32px] justify-between max-[769px]:mt-[32px] max-[426px]:gap-[12px]">
            {clientReviews.map((item, index) => (
              <div key={index} className="w-[320px]">
                <h3 className="font-bold tracking-wider max-[1025px]:text-[0.875rem] max-[769px]:text-[0.5rem]">
                  {item.name}
                </h3>
                <p className="text-[#ffffff66] max-[1025px]:text-[0.75rem] max-[769px]:text-[0.4rem]">
                  {item.designation}
                </p>
                <div className="mt-[16px]">
                  <h1 className="font-bold text-[2.25rem] max-[1025px]:text-[1.75rem] max-[769px]:text-[1rem]">
                    {item.rating}
                  </h1>
                </div>
                <p className="font-light text-[14px] max-[1025px]:text-[0.75rem] max-[769px]:text-[0.5rem]">
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
