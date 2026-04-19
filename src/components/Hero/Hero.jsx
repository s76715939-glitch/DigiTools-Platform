import { CiPlay1 } from "react-icons/ci";
const Hero = () => {
  return (
    <section className="bg-white w-8/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10 lg:gap-16">
        {/* Image */}
        <img
          src="./assets/images/banner.png"
          alt="Banner"
          className="w-full max-w-xs sm:max-w-sm shadow-2xl"
        />

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Supercharge Your <br />{" "}
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="max-w-fit sm:w-auto rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 text-sm font-semibold transition-transform hover:scale-105">
              Explore Products
            </button>
            <button className="max-w-fit sm:w-auto rounded-full border-2 border-[#9514FA] text-[#9514FA] px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-[#9514FA] hover:text-white transition-colors">
              <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
