import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-cover px-4">
      <div className="bg-[#1f1f1f] text-white w-[50%] p-8 rounded-2xl shadow-xl">
        <p className="text-sm text-gray-400 mb-1 text-center">GET IN TOUCH</p>
        <h2 className="text-4xl font-extrabold mb-6 text-center">Contact.</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your FullName"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your email
            </label>
            <input
              type="email"
              placeholder="What's your web address?"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="What you want to say?"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#F59E0B] hover:bg-[#3A3838] transition text-white px-6 py-2 rounded-lg font-medium transition-all transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
