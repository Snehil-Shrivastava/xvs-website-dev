import './AutoScrollStrip.css'

import Image from "next/image";

import Logo1 from "../../../public/assests/Layer_1 (2).png"
import Logo2 from "../../../public/assests/logo_paytm.svg";

const AutoScrollStrip = () => {

    const ClientReviews = [
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 1",
      logo: Logo1,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 2",
      logo: Logo2,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 3",
      logo: Logo1,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 4",
      logo: Logo2,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 5",
      logo: Logo1,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 6",
      logo: Logo2,
    },
  ];

  const allLogos = [...ClientReviews, ...ClientReviews]
  return (
    <div className="pb-[30px] whitespace-nowrap overflow-hidden max-[426px]:pb-0">
        <div className='marquee-container'>
          {allLogos.map((item, index) => (
            <Image key={index} src={item.logo} alt="image1" className="inline-block mx-[40px] max-[1024px]:w-[90px] max-[426px]:w-[40px]" />
          ))}
        </div>
    </div>
  );
};

export default AutoScrollStrip;
