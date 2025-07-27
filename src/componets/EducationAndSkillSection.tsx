import Image from "next/image";

const EducationAndSkillSection = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-6">
      <div className="col-span-1 bg-white rounded-2xl p-12">
        <div className="flex justify-start items-center gap-4">
          <Image
            src="/images/education.png"
            width={34}
            height={34}
            alt="logo"
            className="cursor-pointer"
          />
          <h2 className="text-[24px] text-gray-600">Education</h2>
        </div>
        <div className="mt-11">
          <div className="border-l-2 border-gray-200 relative px-3 pb-10">
            <div className="absolute top-[12px] left-[-5px] h-[8px] w-[8px] rounded-full bg-gray-700"></div>
            <h1 className="text-gray-400 text-[20px]">
              2023-2024: <span className="text-green-600 font-bold">BCA</span>
            </h1>
            <h1 className="ml-[170px] text-gray-700 text-[22px]">
              Bachelor's in Computer Application from Vidya Bhawan Rural
              Institute Udaipur, Rajasthan
            </h1>
          </div>
          <div className="border-l-2 border-gray-200 relative px-3 pb-10">
            <div className="absolute top-[12px] left-[-5px] h-[8px] w-[8px] rounded-full bg-gray-700"></div>
            <h1 className="text-gray-400 text-[20px]">
              2020-2021: <span className="text-green-600 font-bold">12th</span>
            </h1>
            <h1 className="ml-[170px] text-gray-700 text-[22px]">
              In Sciense & Mathematics from Government Guru Govind Singh Senior
              Secondary School Udaipur, Rajasthan
            </h1>
          </div>
          <div className="border-l-2 border-gray-200 relative px-3 pb-10">
            <div className="absolute top-[12px] left-[-5px] h-[8px] w-[8px] rounded-full bg-gray-700"></div>
            <h1 className="text-gray-400 text-[20px]">
              2017-2018: <span className="text-green-600 font-bold">10th</span>
            </h1>
            <h1 className="ml-[170px] text-gray-700 text-[22px]">
              Government Senior Secondary School Bujhda Udaipur, Rajasthan
            </h1>
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-white rounded-2xl p-12 ">
        <div className="flex justify-start items-center gap-4">
          <Image
            src="/images/skills.png"
            width={38}
            height={38}
            alt="logo"
            className="cursor-pointer"
          />
          <h2 className="text-[24px] text-gray-600">Skills</h2>
        </div>
        <div className="mt-10 flex justify-start items-center gap-10">
          <Image
            src="/images/react-native.png"
            width={60}
            height={60}
            alt="logo"
            className="cursor-pointer"
          />
          <Image
            src="/images/next.jpg"
            width={90}
            height={70}
            alt="logo"
            className="cursor-pointer"
          />
          <Image
            src="/images/node.webp"
            width={60}
            height={60}
            alt="logo"
            className="cursor-pointer"
          />
          <Image
            src="/images/angular.jpg"
            width={60}
            height={60}
            alt="logo"
            className="cursor-pointer"
          />
          <Image
            src="/images/mongodb.png"
            width={60}
            height={60}
            alt="logo"
            className="cursor-pointer"
          />
          <Image
            src="/images/github.png"
            width={60}
            height={60}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        <div className="text-gray-500 mt-16 text-[22px]">
          <ul>
            <li className="mb-6">
              <span className="text-[#4d4c4c]">Front-Ent:</span> HTML, CSS,
              JavaScript, React, Next, Angular
            </li>
            <li className="mb-6">
              <span className="text-[#4d4c4c]">Back-End:</span> NodeJS, Express
            </li>
            <li className="mb-6">
              <span className="text-[#4d4c4c]">Database:</span> MongoDB
            </li>
            <li className="mb-6">
              <span className="text-[#4d4c4c]">Tools:</span> Git & Github
            </li>
            <li className="mb-6">
              <span className="text-[#4d4c4c]">Other:</span> Redux, Zod, RxJS,
              REST API
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkillSection;
