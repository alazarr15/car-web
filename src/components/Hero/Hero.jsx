import React, { useEffect } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-dark bg-white min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 dark:bg-primary/5 skew-x-6 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[80vh]">
          {/* Text */}
          <div className="space-y-6 order-2 md:order-1">
            <div data-aos="fade-up">
              <span className="inline-block bg-primary/15 dark:bg-primary/20 text-primary text-sm font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
                Ethiopia's Premier Car Dealer
              </span>
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              DRIVE YOUR{" "}
              <span className="text-primary relative">
                DREAM
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6 Q50 0 100 4 Q150 8 200 2" stroke="#ffc727" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              <br />CAR TODAY
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md"
            >
              Discover premium electric vehicles and top-tier automobiles. 
              Expert guidance, unbeatable prices, and trusted service in Addis Ababa.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+251909262626"
                className="bg-primary hover:bg-primary-dark text-black font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-yellow-glow text-base tracking-wide"
              >
                CALL US NOW
              </a>
              <a
                href="/#cars"
                className="border-2 border-current dark:text-white text-black hover:border-primary hover:text-primary font-semibold py-3.5 px-8 rounded-full transition-all duration-300 text-base tracking-wide"
              >
                VIEW CARS
              </a>
            </div>
            {/* Stats */}
            <div data-aos="fade-up" data-aos-delay="450" className="flex gap-8 pt-4">
              {[["100+", "Cars Sold"], ["5★", "Rated Service"], ["10+", "Years Experience"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{num}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="order-1 md:order-2 flex justify-center items-center relative"
          >
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Featured Car"
              className="relative z-10 w-full max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
