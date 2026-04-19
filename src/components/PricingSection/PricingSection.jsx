import { MdCheck } from "react-icons/md";

const PricingSection = () => {
  return (
    <section className="w-full mx-auto py-20 bg-white flex justify-center font-sans">
      <div className="w-full px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1f2e] mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[15px] text-[#7a849a] font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="cardGrid">
          {/* Starter Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
            <h3 className="text-[20px] font-bold text-[#1a1f2e] mb-1">
              Starter
            </h3>
            <p className="text-[13px] text-[#7a849a] mb-6">
              Perfect for getting started
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[44px] font-extrabold text-[#1a1f2e] leading-none">
                $0
              </span>
              <span className="text-[14px] font-medium text-[#7a849a]">
                /Month
              </span>
            </div>

            <ul className="flex flex-col gap-3.5 mb-10">
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Basic templates
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Community support
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />1 project
                per month
              </li>
            </ul>

            <button className="w-full py-3.5 text-[14px] font-semibold text-white transition-all bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full active:scale-[0.98]">
              Get Started Free
            </button>
          </div>

          {/* Pro Card (Highlighted) */}
          <div className="relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl p-8 shadow-[0_8px_30px_rgba(132,36,255,0.25)] flex flex-col lg:scale-105 z-10 border border-[#9d4dff]">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 text-[11px] font-bold text-[#c78531] bg-[#fdf3e1] rounded-full whitespace-nowrap shadow-sm">
              Most Popular
            </div>

            <h3 className="text-[20px] font-bold text-white mb-1">Pro</h3>
            <p className="text-[13px] text-white/80 mb-6">
              Best for professionals
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[44px] font-extrabold text-white leading-none">
                $29
              </span>
              <span className="text-[14px] font-medium text-white/80">
                /Month
              </span>
            </div>

            <ul className="flex flex-col gap-3.5 mb-10">
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-white">
                <MdCheck className="w-4 h-4 text-white shrink-0" />
                Access to all premium tools
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-white">
                <MdCheck className="w-4 h-4 text-white shrink-0" />
                Unlimited templates
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-white">
                <MdCheck className="w-4 h-4 text-white shrink-0" />
                Priority support
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-white">
                <MdCheck className="w-4 h-4 text-white shrink-0" />
                Unlimited projects
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-white">
                <MdCheck className="w-4 h-4 text-white shrink-0" />
                Cloud sync
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-white">
                <MdCheck className="w-4 h-4 text-white shrink-0" />
                Advanced analytics
              </li>
            </ul>

            <button className="w-full py-3.5 text-[14px] font-semibold text-[#8424ff] transition-all bg-white rounded-full hover:bg-gray-50 active:scale-[0.98]">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
            <h3 className="text-[20px] font-bold text-[#1a1f2e] mb-1">
              Enterprise
            </h3>
            <p className="text-[13px] text-[#7a849a] mb-6">
              For teams and businesses
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[44px] font-extrabold text-[#1a1f2e] leading-none">
                $99
              </span>
              <span className="text-[14px] font-medium text-[#7a849a]">
                /Month
              </span>
            </div>

            <ul className="flex flex-col gap-3.5 mb-10">
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Team collaboration
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Custom integrations
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Dedicated support
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                SLA guarantee
              </li>
              <li className="flex items-center gap-3 text-[13.5px] font-medium text-[#5c657a]">
                <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                Custom branding
              </li>
            </ul>

            <button className="w-full py-3.5 text-[14px] font-semibold text-white transition-all bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full active:scale-[0.98]">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
