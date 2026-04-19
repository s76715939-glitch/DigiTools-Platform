const ReadySection = () => {
  return (
    <div className="w-full py-15 px-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col items-center justify-center text-center font-sans">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-[15px] md:text-[16px] text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br className="hidden sm:block" /> Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="px-8 py-3.5 text-[15px] font-semibold text-[#4F39F6] transition-all bg-white rounded-full hover:bg-gray-50 active:scale-[0.98]">
            Explore Products
          </button>
          <button className="px-8 py-3.5 text-[15px] font-semibold text-white transition-all bg-transparent border border-white rounded-full hover:bg-white/10 active:scale-[0.98]">
            View Pricing
          </button>
        </div>

        <p className="text-[13px] md:text-[14px] text-white/70 font-medium">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ReadySection;
