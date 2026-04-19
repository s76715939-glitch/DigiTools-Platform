const GetStarted = () => {
  return (
    <div className="w-full bg-[#f8f9fa] py-25 px-4 flex justify-center items-center font-sans">
      <div className="w-full lg:w-8/12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-[36px] md:text-[42px] font-bold text-[#1a1f2e] mb-4 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-[15px] text-[#7a849a] font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="relative bg-white rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-7 h-7 bg-[#8424ff] text-white text-[11px] font-bold flex items-center justify-center rounded-full">
              01
            </div>
            <div className="w-20 h-20 bg-[#f3e8ff] rounded-full flex items-center justify-center mb-6">
              <img src="./assets/images/user.png" alt="User" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1f2e] mb-3">
              Create Account
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[#7a849a]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-7 h-7 bg-[#8424ff] text-white text-[11px] font-bold flex items-center justify-center rounded-full">
              02
            </div>
            <div className="w-20 h-20 bg-[#f3e8ff] rounded-full flex items-center justify-center mb-6">
              <img src="./assets/images/package.png" alt="Package" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1f2e] mb-3">
              Choose Products
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[#7a849a]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-7 h-7 bg-[#8424ff] text-white text-[11px] font-bold flex items-center justify-center rounded-full">
              03
            </div>
            <div className="w-20 h-20 bg-[#f3e8ff] rounded-full flex items-center justify-center mb-6">
              <img src="./assets/images/rocket.png" alt="Rocket" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1f2e] mb-3">
              Start Creating
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[#7a849a]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
