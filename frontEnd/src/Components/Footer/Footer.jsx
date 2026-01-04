import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import NavImg from "../../../Pictures/AdobeStock_295454197_bw_cropped_blue_v_narrow.png";
import BkashImg from "../../../Pictures/Bkash-Logo.jpg";
import NagadImg from "../../../Pictures/496-4962280_nagad-logo-transparent-bkash-logo-png-png-download.png";
import LogoImg from "../../../Pictures/LOGO.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white font-semibold">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src={NavImg}
          alt="footer background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#000080]/80"></div>
      </div>

      {/* ===== Footer Content ===== */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Contact */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-2xl font-bold">
            <span className="bg-[#87aee3] px-3 rounded">
              <NavLink to="/">
                <div className="flex items-center justify-between w-[5vw] cursor-pointer">
                  <img src={LogoImg} alt="Ebook Logo"/> E-Book
                </div>
              </NavLink>
            </span>
          </div>

          <p className="text-[#82C8E5]">Got Questions? Call us</p>
          <p className="text-lg font-semibold">+880 1234 567 890</p>

          <p className="text-[#82C8E5]">📧 ebook@gmail.com</p>
          <p className="text-[#82C8E5]">
            📍Uttara <br />
            Dhaka, Bangladesh
          </p>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Customer Support</h3>
          <ul className="space-y-3 text-[#82C8E5]">
            <li className="hover:text-white transition cursor-pointer">
              Store List
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Opening Hours
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Return Policy
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Categories</h3>
          <ul className="space-y-3 text-[#82C8E5]">
            <li className="hover:text-white transition cursor-pointer">
              Novel Books
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Poetry Books
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Political Books
            </li>
            <li className="hover:text-white transition cursor-pointer">
              History Books
            </li>
          </ul>
        </div>

        {/* Social Section (Replaced Subscribe) */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Follow Us On</h3>

          <div className="flex gap-4">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-[#82C8E5] text-sm">
          <p>
            © All Rights Reserved 2025 By{" "}
            <span className="text-white font-semibold">Md. Mohab Ullah</span>
          </p>

          <div className="flex gap-4 items-center">
            <img src={BkashImg} alt="Bkash" className="h-6" />
            <img src={NagadImg} alt="Nagad" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <div
    className="w-10 h-10 flex items-center justify-center rounded-md
               bg-white/20 text-white
               hover:bg-[#0047AB] transition cursor-pointer"
  >
    {icon}
  </div>
);

export default Footer;
