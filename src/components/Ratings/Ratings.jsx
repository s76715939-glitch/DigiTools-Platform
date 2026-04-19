const Ratings = () => {
  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full text-white py-8 rounded-none">
        <div className="stat place-items-center border-r-2 border-white/20">
          <div className="stat-value text-5xl font-bold">50K+</div>
          <div className="stat-desc text-white/80 text-lg mt-2">
            Active Users
          </div>
        </div>

        <div className="stat place-items-center border-r-2 border-white/20">
          <div className="stat-value text-5xl font-bold">200+</div>
          <div className="stat-desc text-white/80 text-lg mt-2">
            Premium Tools
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-5xl font-bold">4.9</div>
          <div className="stat-desc text-white/80 text-lg mt-2">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
