import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks} from "./Navbar";
import { HiMenuAlt1 } from "./Navbar";

const ResponsiveMenu = ({ showMenu,setShowMenu }) => {
  console.log("showMenu", showMenu ,"set" , setShowMenu);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
       <div>
       <HiMenuAlt1
        onClick={() => setShowMenu(false)}
        className=" cursor-pointer transition-all absolute right-10"
        size={30}
              />
       </div>

      <div className="card">
        
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data,index) => (
              <li key={index}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with by <a href="https://www.linkedin.com/company/100400568/admin/feed/posts/">Digital 251</a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
