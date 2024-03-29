import React from "react";
import emailjs from 'emailjs-com';

export default function ContactMe() {

    function sendEmail(e)   {
      e.preventDefault();

      emailjs.sendForm('service_ipfon8q', 'template_g3to4r7', e.target, 'vs3WXvn1h3bvzTjlA')
        .then((result) => {
            console.log(result.text);
            alert("Thank you for your enquiry, I will be in touch in the next 24hours")
        }, (error) => {
            console.log(error.text);
            alert("Message not sent")
        });
        e.target.reset();
    };

    return (
      <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Newcastle-under-Lyme&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Newcastle-under-Lyme <br />
                  Staffordshire
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a href="mailto: simon.lowe90@hotmail.co.uk" className="text-indigo-400 leading-relaxed">
                  lowe.simon90@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">07572251807</p>
              </div>
            </div>
          </div>
          <form
            id="contact-form"
            onSubmit={sendEmail}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Hire Me
            </h2>
            <p className="leading-relaxed mb-5">
              Like what you see? Why not work with me to create the website just for you.
            </p>
            <div className="relative mb-4 form-group">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-control"
                required
              />
            </div>
            <div className="relative mb-4 form-group">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-control"
                required
              />
            </div>
            <div className="relative mb-4 form-group">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out form-control"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }