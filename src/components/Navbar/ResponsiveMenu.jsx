import React from "react";
import { Navlinks } from "./Navbar";
import { HiX } from "react-icons/hi";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-40 h-screen w-4/5 max-w-xs bg-white dark:bg-dark-card text-black dark:text-white flex flex-col transition-transform duration-300 shadow-2xl md:hidden`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 dark:border-dark-border">
        <img src="images/mogess.png" alt="Moges" className="h-10 w-auto" />
        <HiX onClick={() => setShowMenu(false)} className="cursor-pointer text-2xl hover:text-primary" />
      </div>

      {/* Links */}
      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-2">
          {Navlinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => setShowMenu(false)}
                className="block py-3 px-4 text-lg font-semibold tracking-wider hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <a
            href="tel:+251909262626"
            className="block text-center bg-primary text-black font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition-all"
          >
            CALL US NOW
          </a>
        </div>
      </nav>

      {/* Social */}
      <div className="px-6 py-6 border-t border-gray-100 dark:border-dark-border">
        <div className="flex gap-4">
          <a href="https://t.me/mogesmotor" className="hover:text-primary transition-colors">
            <FaTelegram size={22} />
          </a>
          <a href="https://www.facebook.com/mogesmotors/" className="hover:text-primary transition-colors">
            <FaFacebook size={22} />
          </a>
          <a href="https://www.instagram.com/moges_motors" className="hover:text-primary transition-colors">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
