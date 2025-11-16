import React from "react";
import useInView from "../../hooks/useInView";

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
  const [leftRef, leftInView] = useInView({ threshold: 0.1 });
  const [rightRef, rightInView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 text-white animate-fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
          What Others Say
        </p>
        <h1 className="text-4xl font-extrabold mb-12 text-white z-10">Testimonials.</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            let animationClass = "";
            if (index === 0) {
              animationClass = leftInView
                ? "translate-x-0 opacity-100 transition-transform duration-700"
                : "-translate-x-20 opacity-0";
            } else if (index === testimonials.length - 1) {
              animationClass = rightInView
                ? "translate-x-0 opacity-100 transition-transform duration-700"
                : "translate-x-20 opacity-0";
            } else {
              animationClass = "opacity-100";
            }

            return (
              <div
                key={index}
                ref={index === 0 ? leftRef : index === testimonials.length - 1 ? rightRef : null}
                className={`bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg flex flex-col justify-between text-left hover:scale-105 transition duration-300 ease-in-out relative z-10 ${animationClass}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
