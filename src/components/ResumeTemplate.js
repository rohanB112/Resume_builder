const ResumeTemplate = () => {
  return (
    <div
      className="hidden w-[21cm] min-h-[29.7cm] p-[2cm] m-auto bg-slate-100 font-lato"
      id="resume_template"
    >
      <div className="my-6 flex justify-between">
        <div>
          <h1 className="text-5xl  font-bold" id="name_T">
            Rohan Barman
          </h1>
        </div>
        <div className="text-right">
          <p id="contact_T">+91 7001004302</p>
          <p id="email_T">rohanbarman100@gmail.com</p>
          <p id="linkedin_T">www.linkedin.com/in/rohan-barman-7a70521b0/</p>
          <p id="github_T">www.github.com/rohanB112/</p>
        </div>
      </div>

      <p className="text-2xl font-medium mt-8">Professional Summary</p>
      <hr className=" border border-t-1 border-black" />

      <div className="my-3">
        <p id="summary_T">
          lorem frgtrshh esfewsgbdvs efsgvSgsgSGV sgssfsfA afvasfsfcas afasvdvf
          asfa
        </p>
      </div>

      <p className="text-2xl font-medium mt-8">Education</p>
      <hr className=" border border-t-1 border-black" />

      <div>
        <ul className="list-disc my-3" id="academic_T">
          <li className="my-3 mx-8">
            B.E in Computer Science Engineering -University Institute Of
            Technology, Burdwan University 2020-2024
          </li>
          <li className="my-3 mx-8">
            Higher Secondary- Tufanganj N.N.M High School 2020 87%
          </li>
          <li className="my-3 mx-8">
            Secondary- Tufanganj N.N.M High School 2018 90.71%
          </li>
        </ul>
      </div>

      <p className="text-2xl font-medium mt-8">Work Experience</p>
      <hr className=" border border-t-1 border-black" />

      <div>
        <ul className="list-disc" id="workExp_T">
          <li className="my-3 mx-8">
            Sync Intern's Internship August-September 2023
          </li>
          <li className="my-3 mx-8">XYZ Company 2023</li>
          <li className="my-3 mx-8">ABC 2023</li>
        </ul>
      </div>

      <p className="text-2xl font-medium mt-8">Projects</p>
      <hr className=" border border-t-1 border-black" />

      <div>
        <ul className="list-disc " id="projects_T">
          <li className="my-3 mx-8">
            Swiggy clone using React, redux, tailwindcss{" "}
          </li>
          <li className="my-3 mx-8">Resume Builder</li>
          <li className="my-3 mx-8">Youtube Clone</li>
        </ul>
      </div>

      <div className="flex m-2">
        <button
          onClick={() => {
            document.getElementById("btn-download").classList.add("hidden");
            window.print();
          }}
          id="btn-download"
          className="bg-blue-400 py-2 px-3 rounded-md text-white m-auto items-center"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeTemplate;
