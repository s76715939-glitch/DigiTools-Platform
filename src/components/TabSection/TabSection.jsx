const TabSection = ({ activeTab, setActiveTab, cartProducts }) => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-center text-[#001931] mt-10">
        Premium Digital Tools
      </h2>
      <p className="text-lg text-[#627382] text-center leading-5 mt-3.5">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>
      <div className="w-full flex items-center justify-center p-1 mt-5">
        <div className="flex items-center justify-center shadow-[0_10px_30px_rgb(0,0,0,0.2)] p-2 rounded-full">
          <button
            className={`px-7 py-3 text-[15px] font-semibold ${activeTab === "product" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "text-[#3b1771] bg-transparent cursor-pointer"} rounded-full transition-all`}
            onClick={() => setActiveTab("product")}
          >
            Products
          </button>
          <button
            className={`px-7 py-3 text-[15px] font-medium ${activeTab === "cart" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "text-[#3b1771] bg-transparent cursor-pointer"} rounded-full transition-all`}
            onClick={() => setActiveTab("cart")}
          >
            Cart ({cartProducts.length})
          </button>
        </div>
      </div>
    </>
  );
};

export default TabSection;
