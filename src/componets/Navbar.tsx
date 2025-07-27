"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="bg-[#101929] text-white flex justify-between items-center rounded-2xl py-5 px-7 mx-[25px]">
      <div
        className="flex justify-start items-center gap-6"
        onClick={() => router.push("/")}
      >
        <Image
          src="/images/code.png"
          width={40}
          height={40}
          alt="logo"
          className="cursor-pointer"
        ></Image>
        <h1 className="text-[22px] cursor-pointer">Devendra teli</h1>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div
          className="px-1.5 py-1 text-[15px] cursor-pointer border-b-1 border-b-transparent hover:border-b-1 hover:border-b-white"
          onClick={() => router.push("/about")}
        >
          <p>About Me</p>
        </div>
        <div className="px-1.5 py-1 text-[15px] cursor-pointer border-b-1 border-b-transparent hover:border-b-1 hover:border-b-white">
          <p>Resume</p>
        </div>
        <div
          className="px-1.5 py-1 text-[15px] cursor-pointer border-b-1 border-b-transparent hover:border-b-1 hover:border-b-white"
          onClick={() => router.push("/contact")}
        >
          <p>Contacts</p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4">
        <Image
          src="/images/facebook.png"
          width={35}
          height={35}
          alt="facebook"
          className="hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>
        <Image
          src="/images/social.png"
          width={35}
          height={35}
          alt="facebook"
          className="hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>
        <Image
          src="/images/twitter.png"
          width={35}
          height={35}
          alt="facebook"
          className="hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>

        <Image
          src="/images/linkedin.png"
          width={35}
          height={35}
          alt="facebook"
          className="hover:scale-107 transition-transform duration-300 cursor-pointer"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
