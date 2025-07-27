import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-center text-[40px] mt-4">Contact me</h1>
      <h1 className="text-center text-[22px] mt-6">
        I&apos;m here for you, feel free to contact me{" "}
        <span className="text-green-600">anytime</span>
      </h1>
      <p className="text-center text-[16px]">
        Have any questions about my services or just want to chat? Please don’t
        hesitate to reach out.
      </p>

      <div className="flex justify-center items-center gap-10 mt-26">
        <div className="bg-white rounded-2xl p-5 h-[260px] w-[300px]">
          <div className="h-[85px] w-[85px] bg-red-200 rounded-full mx-auto flex justify-center items-center">
            <Image
              src="/images/message.png"
              height={45}
              width={45}
              alt="Email"
            />
          </div>
          <p className="text-center text-gray-600 mt-6 text-[20px]">Call Us</p>
          <hr className="text-gray-300 mt-6" />
          <h1 className="mt-6 text-center text-[18px] text-gray-600">
            +91 7976564710
          </h1>
        </div>
        <div className="bg-white rounded-2xl p-5 h-[260px] w-[300px]">
          <div className="h-[85px] w-[85px] bg-purple-200 rounded-full mx-auto flex justify-center items-center">
            <Image src="/images/email.png" height={45} width={45} alt="Email" />
          </div>
          <p className="text-center text-gray-600 mt-6 text-[20px]">Email Us</p>
          <hr className="text-gray-300 mt-6" />
          <h1 className="mt-6 text-center text-[18px] text-gray-600">
            devendrateliofficial@gmail.com
          </h1>
        </div>

        <div className="bg-white rounded-2xl p-5 h-[260px] w-[300px]">
          <div className="h-[85px] w-[85px] bg-blue-200 rounded-full mx-auto flex justify-center items-center">
            <Image
              src="/images/linkedin2.png"
              height={45}
              width={45}
              alt="Email"
            />
          </div>
          <p className="text-center text-gray-600 mt-6 text-[20px]">Connect</p>
          <hr className="text-gray-300 mt-6" />
          <h1 className="mt-6 text-center text-[18px] text-gray-600">
            devendra-teli
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
