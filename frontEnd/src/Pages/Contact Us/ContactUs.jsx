import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-white">
      {/* ===== Hero Section ===== */}
      <div className="bg-gradient-to-r from-[#000080] via-[#0047AB] to-[#82C8E5] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact E-Book
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            Have questions, feedback, or need support? We’d love to hear from
            you.
          </p>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ===== Contact Info ===== */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#000080]">Get In Touch</h2>
          <p className="text-[#6D8196] text-lg">
            Whether you're an author or a reader, our team is always ready to
            help. Fill out the form or reach us using the details below.
          </p>

          <div className="space-y-4 text-[#0047AB]">
            <p className="flex items-center gap-3 hover:text-[#000080] transition">
              📧 ebook@gmail.com
            </p>
            <p className="flex items-center gap-3 hover:text-[#000080] transition">
              📞 +880 1234 567 890
            </p>
            <p className="flex items-center gap-3 hover:text-[#000080] transition">
              📍 Dhaka, Bangladesh
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-[#000080] mb-3">Follow Us</p>
            <div className="flex gap-4 ">
              <SocialIcon className="" icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="bg-[#82C8E5]/20 p-10 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-[#000080] mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-5">
            <InputField placeholder="Your Name" type="text" />
            <InputField placeholder="Your Email" type="email" />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-[#82C8E5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#0047AB] text-white py-3 rounded-full font-semibold hover:bg-[#000080] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ===== Reusable Components ===== */

const InputField = ({ placeholder, type }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full border border-[#82C8E5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition"
  />
);

const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-[#0047AB] text-white cursor-pointer 
                  hover:bg-[#000080] transition">
    {icon}
  </div>
);


export default ContactUs;
