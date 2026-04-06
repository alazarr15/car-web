import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  { id: 1, name: "HOME", link: "/#" },
  { id: 2, name: "CARS", link: "/#cars" },
  { id: 3, name: "ABOUT", link: "/#about" },
  { id: 4, name: "CONTACT", link: "/#contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container py-3 md:py-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/#">
              <img
                src="images/mogess.png"
                alt="Moges Motors"
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-sm font-semibold tracking-widest hover:text-primary transition-colors duration-300 relative group"
                    >
                      {name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="tel:+251909262626"
                    className="ml-2 bg-primary text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-primary-dark transition-all duration-300 tracking-wide"
                  >
                    CALL NOW
                  </a>
                </li>
                {theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className="text-xl cursor-pointer hover:text-primary transition-colors"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className="text-xl cursor-pointer hover:text-primary transition-colors"
                  />
                )}
              </ul>
            </nav>

            {/* Mobile */}
            <div className="flex items-center gap-4 md:hidden">
              {theme === "dark" ? (
                <BiSolidSun onClick={() => setTheme("light")} className="text-xl cursor-pointer" />
              ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className="text-xl cursor-pointer" />
              )}
              {showMenu ? (
                <HiX onClick={() => setShowMenu(false)} className="cursor-pointer" size={26} />
              ) : (
                <HiMenuAlt3 onClick={() => setShowMenu(true)} className="cursor-pointer" size={26} />
              )}
            </div>
          </div>
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
