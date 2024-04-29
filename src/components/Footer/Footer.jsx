import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaTelegram,
} from "react-icons/fa";
 
const FooterLinks = [
  {
    title: "Telegram",
    link: "/#",
  },
  {
    title: "Facebook",
    link: "/#about",
  },
  {
    title: "Instagram",
    link: "/#contact",
  },
  {
    title: "Tiktok",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-8 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5 ml-20 ">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Moges Motors
            </h1>
            <p className="text-sm">
            Thriving marketplace for buying, selling, and exploring automobiles worldwide.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Bole,Atlas</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+251909262626</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://t.me/mogesmotor">
                <FaTelegram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/mogesmotors/">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.instagram.com/moges_motors?igsh=Z2FkMThyMHRhYTlv" >
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-0 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-1`}>
                  {FooterLinks.map((link,index) => (
                    <li key={index} className="cursor-pointer hover:translate-x-2 duration-300 hover:!text-primary space-x-2 text-gray-500 dark:text-gray-200">
                      <span></span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>
                      <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.7075072144294!2d38.77576707483261!3d9.005352991055018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnMTkuMyJOIDM4wrA0Nic0Mi4wIkU!5e1!3m2!1sen!2set!4v1712569402691!5m2!1sen!2set"
  title="Google Map"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-600 h-300 md:max-w-lg lg:max-w-xl xl:max-w-2xl min-w-300"
  style={{ width: '100%', height: 'auto' }}
></iframe>
                      </span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Footer;