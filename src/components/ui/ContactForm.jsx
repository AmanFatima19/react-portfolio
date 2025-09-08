import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch {
      toast.error('Error sending message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 animate-fade-in">
      <div className="bg-[#1f1f1f] text-white w-full max-w-2xl p-5 rounded-2xl shadow-xl">
        <p className="text-sm text-gray-400 mb-1 text-center">GET IN TOUCH</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">
          Contact.
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-6 lg:space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="w-full px-4 py-2 rounded-lg bg-[#3a3838] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#F59E0B] hover:bg-[#dc8c00] transition text-white px-6 py-2 rounded-lg font-medium duration-300 w-full sm:w-auto disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default ContactForm;
