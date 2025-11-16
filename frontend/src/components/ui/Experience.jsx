import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="animate-fade-in">
      <p className="text-sm text-white uppercase tracking-wide mb-1 text-center my-10">
        What I HAVE DONE
      </p>
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">Experience</h1>

      <div className="relative max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-gray-300"></div>

        <div className="mb-12 flex flex-col lg:flex-row justify-between items-center w-full gap-8">
          <div className="lg:w-5/12 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <p className="text-sm text-[#F59E0B]">Devlox</p>
              <p className="text-xs text-gray-400 mb-3">
                October 2025 – Present
              </p>
              <ul className="list-disc list-outside pl-4 text-sm text-gray-200">
                <li>Implementing responsive designs and optimized performance</li>
                <li>Using best frameworks and libraries for a modren UI</li>
                <li>Creating backend APIs and maintaining integration.</li>
                <li>Developing full-stack applications using MERN stack</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col lg:flex-row-reverse justify-between items-center w-full gap-8">
          <div className="lg:w-5/12 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">MERN Stack Developer</h3>
              <p className="text-sm text-[#F59E0B]">
                <a
                  href="https://ideoversity.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Isttaa, ARFA TOWER
                </a>
              </p>
              <p className="text-xs text-gray-400 mb-3">
                October 2024 – <span className="text-[#F59E0B]"> July 2025 </span>
              </p>
              <ul className="list-disc list-outside pl-4 text-sm text-gray-200">
                <li>Responsive UI/UX with modern React frameworks</li>
                <li>
                  Integrated frontend and backend seamlessly using React.js and
                  Axios.
                </li>
                <li>
                  Built scalable RESTful APIs and handled server-side logic.
                </li>
                <li>
                  Used Git and GitHub for version control and collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>

       <div className="mb-12 flex flex-col lg:flex-row justify-between items-center w-full gap-8">
  <div className="lg:w-5/12 w-full">
    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold">Full Stack Developer Trainer</h3>
      <p className="text-sm text-[#F59E0B]">Online</p>
      <p className="text-xs text-gray-400 mb-3">July 2025 – Present</p>
      <ul className="list-disc list-outside pl-4 text-sm text-gray-200">
        <li>Designed and delivered engaging online lessons on Full Stack development.</li>
        <li>Guided students through hands-on projects using React.js and modern web technologies.</li>
        <li>Provided personalized code reviews and feedback to improve students' skills.</li>
        <li>Created lesson plans, assignments, and exercises to reinforce learning.</li>
        <li>Mentored students to help them build real-world applications and portfolios.</li>
      </ul>
    </div>
  </div>
</div>

        <div className="mb-12 flex flex-col lg:flex-row-reverse justify-between items-center w-full gap-8">
          <div className="lg:w-5/12 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 rounded-xl shadow-lg">
              <p className="text-sm text-[#F59E0B]">
                <a
                  href="https://hadielearning.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hadi-e-learning
                </a>
              </p>
              <p className="text-xs text-gray-400 mb-3">
                April 2024 – June 2024
              </p>
              <ul className="list-disc list-outside pl-4 text-sm text-gray-200">
                <li>
                  Created digital designs for social media, websites, and
                  marketing campaigns.
                </li>
                <li>
                  Designed logos, brochures, and brand materials using Adobe
                  tools.
                </li>
                <li>
                  Ensured visual consistency across all branding and design
                  assets.
                </li>
                <li>
                  Collaborated with teams to deliver creative solutions on time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
