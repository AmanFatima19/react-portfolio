import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center bg-black px-4 py-6">
      <div className="bg-[#1f1f1f] text-white w-full max-w-2xl p-5 rounded-2xl shadow-xl">
        <p className="text-sm text-gray-400 mb-1 text-center">GET IN TOUCH</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">
          Contact.
        </h2>
        <form className="space-y-2 md:space-y-6 lg:space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="What do you want to say?"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#F59E0B] hover:bg-[#3A3838] transition text-white px-6 py-2 rounded-lg font-medium duration-300 w-full sm:w-auto"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
