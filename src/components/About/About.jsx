import React from "react";
import CarPng from "../../assets/car1.png";

const stats = [
  { value: "100+", label: "Vehicles Sold" },
  { value: "6+", label: "EV Brands" },
  { value: "10+", label: "Years in Market" },
  { value: "500+", label: "Happy Clients" },
];
// About Section with enhanced styling and AOS animations

const About = () => {
  return (
    <section id="about" className="dark:bg-dark-card bg-gray-50 py-20 sm:py-28 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            </div>
            {/* Decorative border frame */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/40 rounded-2xl" />
              <div className="relative bg-white dark:bg-dark rounded-2xl p-6 shadow-card-hover">
                <img
                  src={CarPng}
                  alt="About Moges Motors"
                  className="w-full max-h-72 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div data-aos="fade-up">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                Who We Are
              </span>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              YOUR TRUSTED CAR
              <span className="text-primary"> CONSULTANT</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-500 dark:text-gray-400 leading-relaxed text-base"
            >
              Welcome to Moges Motors — Addis Ababa's leading destination for premium electric 
              and conventional vehicles. We are dedicated to providing expert guidance and 
              personalized assistance to help you navigate the car buying and selling journey.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-500 dark:text-gray-400 leading-relaxed text-base"
            >
              Located in Bole, Atlas, we offer a curated selection of top global brands including 
              Volkswagen, Mercedes-Benz, Toyota, and more — all at transparent, competitive prices.
            </p>

            {/* Stats grid */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-dark border border-gray-100 dark:border-dark-border rounded-xl p-4 hover:border-primary transition-colors duration-300"
                >
                  <div
                    className="text-3xl font-extrabold text-primary"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <a
                href="/#contact"
                className="inline-block button-outline mt-2"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
