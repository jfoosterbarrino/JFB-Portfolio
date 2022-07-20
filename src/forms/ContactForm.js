import React, { useState } from "react";
import Button from '@mui/material/Button';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/7b3c56d0-0730-11ed-be50-e78da9ee852d";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch shortly.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          style={{height:"30px", width:"300px", marginTop:5, marginBottom:5}}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          style={{height:"30px", width:"300px", marginTop:5, marginBottom:5}}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your Message"
          name="message"
          style={{height:"100px", width:"300px", marginTop:5, marginBottom:5}}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <Button
          variant="contained"
          sx={{backgroundColor:"#45a29e", fontFamily: "Space Mono, monospace", marginTop:1}}
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;