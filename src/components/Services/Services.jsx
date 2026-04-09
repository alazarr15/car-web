import React from "react";
import { MdPriceCheck, MdVerified, MdSupportAgent } from "react-icons/md";
import { RiCarLine } from "react-icons/ri";

const cards = [
  {
    name: "Best Price Guarantee",
    icon: <MdPriceCheck className="text-5xl" />,
    description:
      "We offer the most competitive prices on premium EVs in Addis Ababa — no hidden fees, no surprises.",
    aosDelay: "0",
  },
  {
    name: "Quality & Safety",
    icon: <MdVerified className="text-5xl" />,
    description:
      "Every vehicle is thoroughly inspected and verified to meet the highest quality and safety standards.",
    aosDelay: "150",
  },
  {
    name: "Expert Consultation",
    icon: <MdSupportAgent className="text-5xl" />,
    description:
      "Our experienced team guides you through every step — from selection to registration and beyond.",
    aosDelay: "300",
  },
];

const Services = () => {
  return (
    <section className="dark:bg-dark bg-white py-20 sm:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Our Advantages
          </span>
          <h2
            className="mt-2 text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            WHY CHOOSE US
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm">
            Moges Motors is Addis Ababa's most trusted car consultancy. Here's what sets us apart.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.name}
              data-aos="fade-up"
              data-aos-delay={card.aosDelay}
              className="group relative bg-gray-50 dark:bg-dark-card border-2 border-gray-100 dark:border-dark-border hover:border-primary rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-yellow-glow overflow-hidden"
            >
              {/* Background accent on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 mx-auto">
                  {card.icon}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {card.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 bg-primary rounded-2xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="relative z-10">
            <RiCarLine className="text-6xl mx-auto mb-4 text-black/50" />
            <h3
              className="text-3xl md:text-4xl font-extrabold text-black mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              READY TO FIND YOUR NEXT CAR?
            </h3>
            <p className="text-black/70 mb-6 text-sm">
              Contact our team today and let us help you make the best decision.
            </p>
            <a
              href="https://zayno.io/moges_motors_251610aaa"
              target="_blank"
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-dark-card transition-colors duration-300"
            >
              SPEAK TO AN EXPERT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
