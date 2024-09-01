"use client";

import emailjs from "@emailjs/browser";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";

const Contact = () => {
  // Specify the type of the ref
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Type the event for handleChange
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Type the event for handleSubmit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_w7egec4", // your service ID
        "template_u6o3elb", // your template ID
        {
          from_name: form.name,
          to_name: "Shoaib Ahamed Shafi", // your name
          from_email: form.email,
          to_email: "shoaibahamedshafi@gmail.com", // your email
          message: form.message,
        },
        "DCmKSAsbzlE42gQpd" // your public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-900 p-8">
      <div className="w-[70vw] md:p-20 md:w-1/2">
        <h2 className="text-white text-4xl mb-6">Get in Touch</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 bg-gray-800 text-white rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 bg-gray-800 text-white rounded-md"
            required
          />
          <textarea
            rows={5} // Ensure rows is a number
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 bg-gray-800 text-white rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-md mt-4"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
