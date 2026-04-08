import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = ({ theme }) => {
  const phoneNumber = "+251909262626";
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm("service_t0ktif9", "template_9nellsf", form.current, {
        publicKey: "gYRo0DJytenKU4Jco",
      })
      .then(
        () => {
          setSent(true);
          setSending(false);
          form.current.reset();
        },
        () => {
          setError(true);
          setSending(false);
        }
      );
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-dark-border focus:border-primary outline-none py-3 text-sm text-black dark:text-white placeholder-gray-400 transition-colors duration-200";

  return (
    <section id="contact" className="py-20 dark:bg-dark-card bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2
            className="mt-2 text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            CONTACT US
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm">
            Have a question or ready to buy? Reach out to us — we're happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div
            data-aos="fade-right"
            className="bg-white dark:bg-dark rounded-2xl p-8 shadow-md border border-gray-100 dark:border-dark-border"
          >
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Send a Message
            </h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-sm">We'll get back to you shortly.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-primary text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    className={inputClass}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div data-aos="fade-left" className="space-y-6">
            {/* Contact cards */}
            {[
              {
                icon: faPhone,
                title: "Call Us",
                lines: ["+251 909 262 626", "+251 911 019 995"],
                href: `tel:${phoneNumber}`,
              },
              {
                icon: faLocationDot,
                title: "Our Location",
                lines: ["Bole, Atlas", "Addis Ababa, Ethiopia"],
                href: "https://maps.google.com/?q=9.005352991055018,38.77576707483261",
              },
            ].map(({ icon, title, lines, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 bg-white dark:bg-dark p-5 rounded-xl border border-gray-100 dark:border-dark-border hover:border-primary transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shrink-0">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">{title}</div>
                  {lines.map((l) => (
                    <div key={l} className="text-gray-500 dark:text-gray-400 text-sm">{l}</div>
                  ))}
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="bg-white dark:bg-dark p-5 rounded-xl border border-gray-100 dark:border-dark-border">
              <div className="font-bold text-sm mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { icon: faTelegram, href: "https://t.me/mogesmotor", color: "#0088CC" },
                  { icon: faFacebook, href: "https://www.facebook.com/mogesmotors/", color: "#1877F2" },
                  { icon: faInstagram, href: "https://www.instagram.com/moges_motors", color: "#E1306C" },
                ].map(({ icon, href, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-gray-100 dark:border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-dark-border h-44">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.7075072144294!2d38.77576707483261!3d9.005352991055018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnMTkuMyJOIDM4wrA0Nic0Mi4wIkU!5e1!3m2!1sen!2set!4v1712569402691!5m2!1sen!2set"
                title="Moges Motors Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
