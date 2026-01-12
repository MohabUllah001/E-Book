import { useState } from "react";
import { FaHeart, FaFistRaised, FaPenFancy, FaFlask, FaThLarge } from "react-icons/fa";
import NavImg from "../../../../Pictures/AdobeStock_295454197_bw_cropped_blue_v_narrow.png";

const mainCategories = [
  { name: "Love", icon: <FaHeart /> },
  { name: "War", icon: <FaFistRaised /> },
  { name: "Poems", icon: <FaPenFancy /> },
  { name: "Science", icon: <FaFlask /> },
];

const allCategories = [
  "Love","War","Sport","Poems","Science","Regional",
  "Philosophy","History","Politics","Religion",
  "Kids","Fantasy","Thriller","Romance"
];

export default function BookCategoryBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Main Section ===== */}
      <div className="relative max-w-7xl mx-auto mt-20 rounded-2xl overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={NavImg}
            alt="background"
            className="w-full h-full object-cover scale-110"
          />
          {/* lighter overlay so image is visible */}
          <div className="absolute inset-0 bg-[#eef7fc]/80"></div>
        </div>

        {/* Content */}
        <div className="relative px-10 py-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
              📚 Browse by Category
            </h2>

            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-3 bg-[#0047AB] 
                         text-white px-7 py-2.5 rounded-full 
                         hover:bg-[#000080] transition"
            >
              <FaThLarge /> View All
            </button>
          </div>

          {/* Categories */}
          <div className="flex justify-between items-center">
            {mainCategories.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div
                  className="bg-[#0047AB] w-16 h-16 rounded-xl 
                             flex items-center justify-center 
                             text-white text-2xl shadow-md 
                             group-hover:bg-[#000080] transition"
                >
                  {cat.icon}
                </div>
                <p className="font-semibold text-[#000080] text-sm">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== Modal ===== */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white max-w-4xl w-full rounded-2xl p-10 relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-2xl text-[#000080]"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#000080] mb-8">
              All Categories
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {allCategories.map((cat, i) => (
                <div
                  key={i}
                  className="bg-[#f2f7fb] rounded-xl p-6 text-center
                             font-semibold text-[#0047AB]
                             hover:bg-[#0047AB] hover:text-white
                             cursor-pointer transition"
                >
                  {cat}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
