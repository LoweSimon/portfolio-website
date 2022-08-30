import React from "react";
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../index.css'
import Swal from 'sweetalert2';

const SERVICE_ID = "service_ipfon8q";
const TEMPLATE_ID = "template_g3to4r7";
const USER_ID = "vs3WXvn1h3bvzTjlA";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
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
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="user_email"
              placeholder="Email…"
              required
              icon="mail"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Name"
              name="user_name"
              placeholder="Name…"
              required
              icon="user circle"
              iconPosition="left"
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="user_message"
              placeholder="Message…"
              required
            />
            <Button type="submit" color="green">Submit</Button>
          </Form>
          
        </div>
      </section>
    );
}

export default Contact;