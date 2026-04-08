import { useState, useEffect } from "react";
import { MdElectricBolt } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { SiAutomattic } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { SiMercedes, SiVolkswagen, SiToyota, SiAudi } from "react-icons/si";
import { TbFilterOff } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import AOS from "aos";
import carData from "./data";

const filters = [
  { label: "ALL", value: "", icon: <TbFilterOff size={18} /> },
  { label: "BYD", value: "BYD", icon: <FaCar size={18} /> },
  { label: "Volkswagen", value: "volkswagen", icon: <SiVolkswagen size={18} /> },
  { label: "Toyota", value: "toyota", icon: <SiToyota size={18} /> },
  // { label: "Audi", value: "audi", icon: <SiAudi size={18} /> },
];

function Service({ theme }) {
  useEffect(() => { AOS.refresh(); }, []);
  const [filter, setFilter] = useState("");
  const isDark = theme === "dark";

  const filtered = filter === ""
    ? carData
    : carData.filter((car) => car.vehicle === filter);

  return (
    <section id="cars" className="py-20 dark:bg-dark bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Our Fleet
          </span>
          <h2
            className="mt-2 text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            TRENDING CARS
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm">
            Browse our curated selection of premium electric vehicles available now in Addis Ababa.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                filter === f.value
                  ? "border-primary bg-primary text-black"
                  : "border-gray-200 dark:border-dark-border hover:border-primary hover:text-primary dark:text-white text-black"
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-yellow-glow transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100 dark:bg-dark h-52">
                <img
                  src={car.img}
                  alt={car.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-black text-xs font-bold px-2.5 py-1 rounded-full">
                  {car.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {car.title}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-dark-border">
                  {[
                    { icon: <IoPeopleSharp />, text: `${car.seats} Seats` },
                    { icon: <MdElectricBolt />, text: car.design },
                    { icon: <IoIosSpeedometer />, text: `${car.range} km` },
                    { icon: <SiAutomattic />, text: car.transmission },
                  ].map(({ icon, text }, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-primary text-base">{icon}</span>
                      {text}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Price</div>
                    <div className="text-lg font-extrabold text-primary" style={{ fontFamily: "'', sans-serif" }}>
                      ETB {car.price}
                    </div>
                  </div>
                  <a
                    href="tel:+251909262626"
                    className="bg-primary hover:bg-primary-dark text-black text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No vehicles found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Service;
