export const HeroSlide = ({ badge, title, highlight, description, image }) => {
  return (
    <div className="relative h-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#130749] via-[#1b2476] to-[#3460c7] opacity-95"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="text-white space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-[#e53232] font-semibold">
              Editor Choice Best Books
            </span>
            <span className="bg-black/40 px-4 py-1 rounded-full text-sm">
              {badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            {title} <br />
            Is Just A{" "}
            <span className="text-[#e53232] relative">
              {highlight}
              <span className="absolute left-0 -bottom-3 w-full h-2 bg-[#e53232] rounded-full"></span>
            </span>
          </h1>

          <p className="text-gray-200 max-w-xl">
            {description}
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop Now →
            </button>
            <button className="bg-[#5078d6] px-6 py-3 rounded-full font-semibold hover:bg-[#07051d] transition">
              View All Books →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">
          <img
            src={image}
            alt="Hero"
            className="max-h-[60vh] object-contain rounded-xl drop-shadow-2xl"
          />

          <img
            src={image}
            alt="Book"
            className="absolute -right-6 top-20 w-28 rotate-6 hidden lg:block shadow-xl"
          />
        </div>

      </div>
    </div>
  );
};

