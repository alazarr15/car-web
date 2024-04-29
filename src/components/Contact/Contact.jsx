import "./Contact.scss"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {FaInstagram} from "react-icons/fa";

const Contact = ({ theme }) => {
  const telegramUserName = '@mogesmotor';
  const phoneNumber = '+251909262626';

  const handleDial = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const telegramLink = `https://t.me/${telegramUserName}`;

  const letters = ['C', 'o', 'n', 't ', 'a', 'c','t','','U','s'];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uk7hzdl', 'template_0fnzi45', form.current, {
        publicKey: 're8UOJpBf_mKVPA23',
      })
      .then(
        () => {
          alert('SUCCESSFULLY SENT!');
          form.current.reset();
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="contact" className="containerC flex justify-between contact-page">
      <div className="text-zone">
        <h1 className="h1 text-white" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
          {letters.map((i, index) => {
            return (
              <span key={index} className="father">
                {i}
              </span>
            );
          })}
        </h1>
        <p className="text-white" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
          IF YOU WANT TO CONTACT US. USE THE FOLLOWING ADDRESSES
        </p>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="flex-2">
            <ul>
              <li className="half text-white">
                <input
                  type="text"
                  className="text"
                  name="from_name"
                  id="sendername"
                  placeholder="Name"
                />
              </li>
              <li className="half text-white">
                <input
                  type="text"
                  className="text"
                  name="from_email"
                  id="replyto"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="text-white"
                />
                <input type="submit" value="Send" className="flat" />
              </li>
            </ul>
          </form>

          <section className="additional flex-1 text-white">
            <div className="call-us">
              <a
                href={`tel:${phoneNumber}`}
                className="phone"
                onClick={handleDial}
              >
                <FontAwesomeIcon
                  className="anchor"
                  icon={faPhone}
                  color="#4d4d4e"
                />{' '}
                <strong>
                  PHONES<br></br>
                  <span> +251909262626<br></br>+251911019995 </span>{' '}
                </strong>
              </a>
              <a className="phone">
                <FontAwesomeIcon
                  className="anchor"
                  icon={faAddressCard}
                  color="#4d4d4e"
                />{' '}
                <strong>
                  ADDRESS<br></br>
                  <span>Bole,Atlas </span>
                </strong>
              </a>
            </div>

            <div className="social-link">
              <a href="https://t.me/mogesmotor" className="social">
                <FontAwesomeIcon className="linkt" icon={faTelegram} color="#" />
              </a>
              <a href="https://www.facebook.com/mogesmotors/" className="social">
                <FontAwesomeIcon className="linkf" icon={faFacebook} color="#"/>
              </a>
              <a href="https://www.instagram.com/moges_motors?igsh=Z2FkMThyMHRhYTlv" className="social">
                <FaInstagram className="linkv" icon={FaInstagram}color="#"/>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;