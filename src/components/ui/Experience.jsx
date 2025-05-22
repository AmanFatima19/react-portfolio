import React from "react";

const Experience = () => {
  return (
    <div>
      <p className="text-sm text-gray-400 uppercase tracking-wide mb-1 text-center my-10">
        What I HAVE DONE
      </p>
      <h1 className="text-4xl font-extrabold mb-12 text-center">Experience</h1>

      <div className="relative max-w-6xl mx-auto py-12 px-4">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-gray-300"></div>

        <div className="mb-12 flex flex-col lg:flex-row justify-between items-center w-full gap-8">
          <div className="lg:w-5/12 w-full">
            <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">MERN Internee</h3>
              <p className="text-sm text-[#F59E0B]">
                <a
                  href="https://ideoversity.com/"
                  target="_blank"
                  rel="noreferrer"
                >
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
                  Built scalable RESTful APIs and handled server-side logic.
                </li>
                <li>
                  Used Git and GitHub for version control and collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col lg:flex-row-reverse justify-between items-center w-full gap-8">
          <div className="lg:w-5/12 w-full">
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

        <div className="mb-12 flex flex-col lg:flex-row justify-between items-center w-full gap-8">
          <div className="lg:w-5/12 w-full">
            <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">Graphic Designer Intern</h3>
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
