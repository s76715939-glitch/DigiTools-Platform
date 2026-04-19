import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#10141e] border-t-[3px] border-[#8424ff] font-sans">
      <div className="w-full lg:w-8/12 mx-auto px-6 py-16 grid place-items-center">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-[26px] font-bold text-white mb-4 tracking-wide">
              DigiTools
            </h2>
            <p className="text-[13.5px] text-[#8c96a9] leading-[1.7] max-w-70">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[15px] font-medium text-white mb-5">Product</h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Templates
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Integrations
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[15px] font-medium text-white mb-5">Company</h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Press
              </a>
            </div>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[15px] font-medium text-white mb-5">
              Resources
            </h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Community
              </a>
              <a
                href="#"
                className="text-[13.5px] text-[#8c96a9] hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[15px] font-medium text-white mb-5">
              Social Links
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-white text-[#10141e] rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-white text-[#10141e] rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaFacebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-white text-[#10141e] rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#1e2536] gap-4">
          <p className="text-[13px] text-[#5e6982]">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[13px] text-[#5e6982] hover:text-[#8c96a9] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-[#5e6982] hover:text-[#8c96a9] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[13px] text-[#5e6982] hover:text-[#8c96a9] transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
