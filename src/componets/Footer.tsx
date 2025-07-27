import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-18 mb-4">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/images/code.png"
          width={40}
          height={40}
          alt="logo"
          className="cursor-pointer"
        ></Image>
        <h1 className="text-[26px]">Devendra teli</h1>
      </div>
      <div className="flex justify-center items-center gap-6 my-7">
        <Image
          src="/images/facebook.png"
          width={30}
          height={30}
          alt="facebook"
          className=" hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>
        <Image
          src="/images/social.png"
          width={30}
          height={30}
          alt="facebook"
          className="hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>
        <Image
          src="/images/twitter.png"
          width={30}
          height={30}
          alt="facebook"
          className="hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>

        <Image
          src="/images/linkedin.png"
          width={30}
          height={30}
          alt="facebook"
          className="hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>
      </div>
      <div className="flex justify-center items-center gap-10 text-gray-600">
        <div className="px-1.5 py-1 text-[15px] cursor-pointer border-b-1 border-b-transparent hover:border-b-1 hover:border-b-white">
          <p>About Me</p>
        </div>
        <div className="px-1.5 py-1 text-[15px] cursor-pointer border-b-1 border-b-transparent hover:border-b-1 hover:border-b-white">
          <p>Resume</p>
        </div>
        <div className="px-1.5 py-1 text-[15px] cursor-pointer border-b-1 border-b-transparent hover:border-b-1 hover:border-b-white">
          <p>Contacts</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
