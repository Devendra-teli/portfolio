import Image from "next/image";

const ServiceSection = () => {
  return (
    <div className="mt-6 bg-white rounded-lg py-12 px-40 min-h-[170px]">
      <p className="text-center text-green-700 text-[21px] mb-3">
        What do i offer
      </p>
      <h1 className="text-center text-[38px] text-gray-600">
        <span className="text-gray-800 font-bold">Development Solutions</span>
        , Scalable, and High-Performance
        <br /> Web and Mobile Applications.
      </h1>
      <div className="mt-20 grid grid-cols-12 gap-8 ">
        <div className="col-span-4  border-2 border-gray-200 rounded-2xl p-8">
          <Image
            src="/images/core.png"
            width={32}
            height={32}
            alt="logo"
            className="cursor-pointer mb-2"
          />
          <h2 className="text-[25px] mb-1 text-gray-700">Web Technologies</h2>
          <p className="text-[16px] text-gray-600">
            Building robust and accessible interfaces using semantic HTML,
            modular CSS, and clean, optimized JavaScript to form the core of
            every application.
          </p>
        </div>
        <div className="col-span-4  border-2 border-gray-200 rounded-2xl p-8">
          <Image
            src="/images/responsive.png"
            width={32}
            height={32}
            alt="logo"
            className="cursor-pointer mb-2"
          />
          <h2 className="text-[25px] mb-1 text-gray-700">
            Mobile-First & Responsive Design
          </h2>
          <p className="text-[16px] text-gray-600">
            Designing interfaces that adapt fluidly across all screen sizes and
            devices, ensuring seamless user experiences on desktops, tablets,
            and smartphones alike.
          </p>
        </div>
        <div className="col-span-4  border-2 border-gray-200 rounded-2xl p-8">
          <Image
            src="/images/framework.png"
            width={32}
            height={32}
            alt="logo"
            className="cursor-pointer mb-2"
          />
          <h2 className="text-[25px] mb-1 text-gray-700">
            Modern Front-End Frameworks
          </h2>
          <p className="text-[16px] text-gray-600">
            Leveraging advanced frameworks like React, Next.js, and Angular to
            develop dynamic, reactive UI components with scalable architecture.
          </p>
        </div>
        <div className="col-span-4  border-2 border-gray-200 rounded-2xl p-8">
          <Image
            src="/images/ui-ux.png"
            width={32}
            height={32}
            alt="logo"
            className="cursor-pointer mb-2"
          />
          <h2 className="text-[25px] mb-1 text-gray-700">
            User-Centered UI/UX Design
          </h2>
          <p className="text-[16px] text-gray-600">
            Prioritizing user behavior and accessibility while crafting
            intuitive layouts and interactions that drive engagement and reduce
            friction.
          </p>
        </div>
        <div className="col-span-4  border-2 border-gray-200 rounded-2xl p-8">
          <Image
            src="/images/architechture.png"
            width={32}
            height={32}
            alt="logo"
            className="cursor-pointer mb-2"
          />
          <h2 className="text-[25px] mb-1 text-gray-700">
            Scalable Component Architecture
          </h2>
          <p className="text-[16px] text-gray-600">
            Designing component-based systems with clean separation of concerns,
            enabling scalable application growth. Integrating reusable UI blocks
            with service-driven architecture
          </p>
        </div>
        <div className="col-span-4  border-2 border-gray-200 rounded-2xl p-8">
          <Image
            src="/images/backend.png"
            width={32}
            height={32}
            alt="logo"
            className="cursor-pointer mb-2"
          />
          <h2 className="text-[25px] mb-1 text-gray-700">
            Cross-Platform Compatibility with Backend Resilience
          </h2>
          <p className="text-[16px] text-gray-600">
            Ensuring consistent functionality and design across browsers and
            platforms, backed by resilient API integrations and backend fault
            tolerance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
