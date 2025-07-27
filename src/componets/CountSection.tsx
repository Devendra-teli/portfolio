import Image from "next/image";

const CountSection = () => {
  return (
    <div className="mt-6 bg-white rounded-lg py-5px-7 min-h-[170px] flex justify-around items-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/calendar.png"
          width={27}
          height={27}
          alt="logo"
          className="cursor-pointer"
        ></Image>
        <h1 className="text-[44px]  font-bold text-gray-700">1+</h1>
        <p className="text-[17px] text-gray-600 ">Hey, Years Experience</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/monitor.png"
          width={27}
          height={27}
          alt="logo"
          className="cursor-pointer"
        ></Image>
        <h1 className="text-[42px]  font-bold text-gray-700">15+</h1>
        <p className="text-[17px] text-gray-600">Projet Completed</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/smile.png"
          width={27}
          height={27}
          alt="logo"
          className="cursor-pointer"
        ></Image>
        <h1 className="text-[42px]  font-bold text-gray-700">4+</h1>
        <p className="text-[17px] text-gray-600">Satisfied Clients</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/award.png"
          width={27}
          height={27}
          alt="logo"
          className="cursor-pointer"
        ></Image>
        <h1 className="text-[42px]  font-bold text-gray-700">1+</h1>
        <p className="text-[17px] text-gray-600">Awards Winner</p>
      </div>
    </div>
  );
};

export default CountSection;
