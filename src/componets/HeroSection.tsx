import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mt-10 bg-white rounded-lg py-5 px-7 min-h-[650px] flex justify-between items-center">
      <div className="w-[45%] flex justify-center">
        <div className="h-[50vh] w-[50vh] relative overflow-hidden rounded-full">
          <Image
            src="/images/devendra1.jpeg"
            fill
            className="object-cover"
            alt="devendra teli"
          />
        </div>
      </div>

      <div className="w-[65%]">
        <p className="text-[24px] mb-3">
          <span className="text-[#db7977]">&lt;span&gt;</span>
          <span className="text-gray-600"> Hey, I'm Devendra teli </span>
          <span className="text-[#db7977]">&lt;/span&gt;</span>
        </p>
        <h1 className="text-[60px] mb-7">
          <span className="text-[#026040]">&#123;</span>
          <span className="text-[#026040]"> Full Stack </span>
          <span className="text-[#026040]">&#125;</span>
          <span> Web & App Developer_</span>
        </h1>
        <p className="text-[18px]">
          <span className="text-[#db7977]">&lt;p&gt;</span>
          <span className="text-gray-600">
            With expertise in cutting-edge technologies such as
          </span>
          <span className="text-[#db7977]"> NodeJS, </span>
          <span className="text-[#db7977]">NextJS, </span>
          <span className="text-[#db7977]">Angular, </span>
          <span className="text-[#db7977]">MongoDB, </span>
          <span className="text-gray-600">
            ... i deliver web solutions that are both innovative and robust.{" "}
          </span>
          <span className="text-[#db7977]">&lt;/p&gt;</span>
        </p>
        <div className="flex justify-start items-center gap-3 mt-4">
          <Image
            src="/images/react-native.png"
            className="object-cover"
            width={35}
            height={35}
            alt="devendra teli"
          />
          <Image
            src="/images/node.webp"
            className="object-cover"
            width={35}
            height={35}
            alt="devendra teli"
          />
          <Image
            src="/images/next.jpg"
            className="object-cover"
            width={59}
            height={50}
            alt="devendra teli"
          />
          <Image
            src="/images/angular.jpg"
            className="object-cover"
            width={35}
            height={35}
            alt="devendra teli"
          />
          <p className="text-gray-600"> ... and more</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
