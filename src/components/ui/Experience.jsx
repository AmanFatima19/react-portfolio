import React from "react";

const Experience = () => {
  return (
    <div>
      <p className="text-sm text-gray-400 uppercase tracking-wide mb-1 text-center my-10">
        What Others Say
      </p>
      <h1 className="text-4xl font-extrabold mb-12 text-center">
        Testimonials.
      </h1>
      <div className="relative max-w-6xl mx-auto py-12 px-4">
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-gray-300"></div>

        <div className="mb-12 flex justify-between items-center w-full">
          <div className="w-5/12 text-start">
            <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">MERN Internee</h3>
              <p className="text-sm text-[#F59E0B]">
                {" "}
                <a href="https://ideoversity.com/ " target="_blank">
                  Ideoversity, ARFA TOWER
                </a>
              </p>
              <p className="text-xs text-gray-400 mb-3">
                March 2025 – <span className="text-[#F59E0B]">Present</span>
              </p>
              <ul className="list-disc list-outside pl-4 text-sm text-gray-200">
                <li>Responsive UI/UX with modern React frameworks</li>
                <li>
                  Integrated frontend and backend seamlessly using React.js and
                  Axios.
                </li>
                <li>
                  Build scalable RESTful APIs and handle server-side logic.
                </li>
                <li>
                  Used Git and GitHub for version control, code collaboration,
                  and project management.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/12" />
        </div>

        <div className="mb-12 flex justify-between items-center w-full">
          <div className="w-2/12" />
          <div className="w-5/12 text-left">
            <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">Frontend Developer Intern</h3>
              <p className="text-sm text-[#F59E0B]">CodeLab</p>
              <p className="text-xs text-gray-400 mb-3">
                August 2024 – December 2024
              </p>
              <ul className="list-disc list-outside pl-4 text-sm text-gray-200">
                <li>Built responsive UI with React.js.</li>
                <li>Wrote reusable components and fixed issues.</li>
                <li>Participated in code reviews and planning.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12 flex justify-between items-center w-full">
          <div className="w-5/12 text-start">
            <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">Graphic Designer Intern</h3>
              <p className="text-sm text-[#F59E0B]">
                {" "}
                <a href="https://hadielearning.com/">Hadi-e-learning</a>
              </p>
              <p className="text-xs text-gray-400 mb-3">
                April 2024 – June 2024
              </p>
              <ul className="list-disc list-outside pl-4 text-sm text-gray-200">
                <li>
                  Created digital designs for social media, websites, and
                  marketing campaigns
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
                  Worked closely with clients and teams to deliver creative
                  solutions on time.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/12" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
