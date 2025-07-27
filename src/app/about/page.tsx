import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-[60vh] p-12">
      <h1 className="text-center mt-[50px] text-[45px] font-bold">About me</h1>
      <div className="grid grid-cols-2 mt-[50px]">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src="/images/aboutMe.png"
            height={600}
            width={600}
            alt="about me"
          />
        </div>
        <div className="col-span-1 text-[20px] flex justify-center items-center">
          <p>
            I'm a <span className="text-green-700">Full-Stack Developer</span>{" "}
            with a strong passion for backend development, API design, and
            building scalable, efficient systems.
            <br />
            <br /> I enjoy solving real-world problems through clean,
            maintainable code and robust, logical architecture. My core strength
            lies in backend systems, working extensively with Node.js, Express,
            and MongoDB. At the same time, I leverage modern UI libraries to
            deliver smooth and responsive frontend experiences. <br />
            <br />
            I'm always exploring ways to optimize performance, integrate tools,
            and create reliable, maintainable system architectures. I thrive on
            contributing to meaningful projects—especially those that push me to
            learn, collaborate, and make a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
