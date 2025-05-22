import React from "react";

const testimonials = [
  {
    quote:
      "Working with Aman was an absolute delight. She not only understood our business requirements quickly but delivered a fully responsive and modern UI using React and Tailwind CSS.",
    name: "Ahmad Raza",
    position: "Co-Founder of PakLogix",
    avatar: "img-3.jpeg",
    username: "@AhmadRaza",
  },
  {
    quote:
      "From clean code to excellent communication and fast delivery, everything was top-notch. She’s a rare combination of technical skills and design thinking.",
    name: "Maria Sheikh",
    position: "Product Manager at EduSmart",
    avatar: "img-2.jpeg",
    username: "@MariaSheikh",
  },
  {
    quote:
      "I hired Aman to create my portfolio. She delivered it in just a week, and it looked stunning on all devices. The animations and layout made it feel premium. Highly recommended!",
    name: "Sarah Malik",
    position: "Freelance Client",
    avatar: "img-1.jpeg",
    username: "@SarahMalik",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
          What Others Say
        </p>
        <h1 className="text-4xl font-extrabold mb-12">Testimonials.</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg flex flex-col justify-between text-left hover:scale-105 transition duration-300 ease-in-out"
            >
              <div>
                <p className="text-4xl text-white font-bold mb-4">“</p>
                <p className="text-gray-300 text-sm mb-6">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-amber-500">
                    {testimonial.username}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
