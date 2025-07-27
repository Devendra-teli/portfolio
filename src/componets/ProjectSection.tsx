import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="mt-6 bg-white  rounded-lg pt-[50px] pb-[100px] px-[70px]">
      <div className="flex justify-start items-center gap-4">
        <div className="h-2 w-2 rounded-full bg-green-700"></div>
        <h1 className="text-green-700 text-[20px]">Projects</h1>
      </div>
      <h1 className="text-gray-700 text-[30px] font-bold">My Recent Works</h1>
      <div className="grid grid-cols-12 gap-20 mx-[70px] mt-[50px]">
        <div className="col-span-5 h-[500px] relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <Image
            src="/images/project-1.png"
            fill
            alt="project-1"
            className="object-cover"
          />
        </div>
        <div className="col-span-7 mr-[100px] my-auto">
          <h1 className="text-[27px] font-bold text-green-700">
            AI itegrate into the Ecommerce System
          </h1>
          <p className="text-gray-600 text-[18px]">
            Developed an online learning platform with course management,
            quizzes and progress tracking.
          </p>
          <p className="mt-[40px] mb-[20px] text-[20px] text-red-300">
            Project Info
          </p>
          <div className="flex justify-between items-center border-b-2 border-gray-200 p-1.5">
            <p className="text-[19px] text-gray-700">Client</p>
            <p className="text-[19px] text-gray-700">Conceptual JSC</p>
          </div>
          <div className="flex justify-between items-center border-b-2 border-gray-200 p-1.5 mt-5">
            <p className="text-[19px] text-gray-700">Completion Time</p>
            <p className="text-[19px] text-gray-700">6 Months</p>
          </div>
          <div className="flex justify-between items-center border-b-2 border-gray-200 p-1.5 mt-5">
            <p className="text-[19px] text-gray-700">Technologies</p>
            <p className="text-[19px] text-gray-700">
              NodeJS, React, MongoDB, Stripe
            </p>
          </div>
          <div className="flex justify-start items-center gap-10 mt-12">
            <p className="text-[19px] text-green-700 underline cursor-pointer">
              Live Demo
            </p>
            <p className="text-[19px] underline cursor-pointer">
              View on Github
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-20 mx-[70px] mt-[150px] ">
        <div className="col-span-7 mr-[100px]  my-auto">
          <h1 className="text-[27px] font-bold text-green-700">
            Full Stack Website for Solar Solutions
          </h1>
          <p className="text-gray-600 text-[18px]">
            Developed an online solar solution website with course management,
            and progress tracking.
          </p>
          <p className="mt-[40px] mb-[20px] text-[20px] text-red-300">
            Project Info
          </p>
          <div className="flex justify-between items-center border-b-2 border-gray-200 p-1.5">
            <p className="text-[19px] text-gray-700">Client</p>
            <p className="text-[19px] text-gray-700">Solar Solutions</p>
          </div>
          <div className="flex justify-between items-center border-b-2 border-gray-200 p-1.5 mt-5">
            <p className="text-[19px] text-gray-700">Completion Time</p>
            <p className="text-[19px] text-gray-700">4 Months</p>
          </div>
          <div className="flex justify-between items-center border-b-2 border-gray-200 p-1.5 mt-5">
            <p className="text-[19px] text-gray-700">Technologies</p>
            <p className="text-[19px] text-gray-700">
              NodeJS, NextJs, MongoDB, Stripe
            </p>
          </div>
          <div className="flex justify-start items-center gap-10 mt-12">
            <p className="text-[19px] text-green-700 underline cursor-pointer">
              Live Demo
            </p>
            <p className="text-[19px] underline cursor-pointer">
              View on Github
            </p>
          </div>
        </div>
        <div className="col-span-5 h-[500px] relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <Image
            src="/images/project-2.png"
            fill
            alt="project-1"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
