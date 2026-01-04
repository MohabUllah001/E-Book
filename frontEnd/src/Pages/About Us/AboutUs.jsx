import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white">
      {/* ===== Hero Section ===== */}
      <div className="bg-gradient-to-r from-[#000080] via-[#0047AB] to-[#82C8E5] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About E-Book
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            A modern eBook publishing platform empowering new authors to publish,
            share, and grow their audience worldwide.
          </p>
        </div>
      </div>

      {/* ===== About Content ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#000080]">
            Who We Are
          </h2>
          <p className="text-[#6D8196] leading-relaxed">
            e-book is a community-driven digital publishing platform designed
            especially for new and independent authors. We make it easy for
            writers to upload their books in PDF format and reach readers
            without traditional publishing barriers.
          </p>
          <p className="text-[#6D8196] leading-relaxed">
            Our platform connects authors and readers through technology,
            ensuring fair access, visibility, and creative freedom for everyone.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-[#82C8E5]/20 p-10 rounded-xl">
          <ul className="space-y-5">
            <Feature text="Simple & Secure PDF Book Upload" />
            <Feature text="Author-Friendly Publishing Platform" />
            <Feature text="Reader-Centered Book Discovery" />
            <Feature text="Powered by Modern MERN Stack" />
          </ul>
        </div>
      </div>

      {/* ===== Mission Section ===== */}
      <div className="bg-[#6D8196]/10">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-[#000080] mb-6">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-[#6D8196] text-lg">
            To empower aspiring writers by providing a reliable digital platform
            where creativity, technology, and opportunity come together.
          </p>
        </div>
      </div>

      {/* ===== Stats Section ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <Stat number="1K+" label="Books Published" />
        <Stat number="500+" label="Active Authors" />
        <Stat number="10K+" label="Readers Worldwide" />
      </div>

      {/* ===== Call to Action ===== */}
      <div className="bg-[#0047AB]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Are You an Author?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Publish your book on e-book and share your story with the world.
          </p>
          <button className="bg-white text-[#0047AB] px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
            Start Publishing
          </button>
        </div>
      </div>
    </section>
  );
};

/* ===== Reusable Components ===== */

const Feature = ({ text }) => (
  <li className="flex items-center gap-4 text-[#000080]">
    <span className="w-3 h-3 bg-[#0047AB] rounded-full"></span>
    {text}
  </li>
);

const Stat = ({ number, label }) => (
  <div>
    <h3 className="text-4xl font-extrabold text-[#0047AB]">
      {number}
    </h3>
    <p className="text-[#6D8196] mt-2">
      {label}
    </p>
  </div>
);

export default AboutUs;

