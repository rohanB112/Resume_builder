import {
  addAcademicField,
  addExpField,
  addProjectField,
  generateResume,
} from "../assets/helper.js";

const ResumeForm = () => {
  return (
    <div id="resume_form" className="m-2">
      <div className="grid grid-cols-2 m-3 py-5 px-9 gap-6">
        <div className="mx-7 text-lg space-y-4">
          <p className="text-3xl text-center font-bold">Personal Details</p>
          <div className="formGroup ">
            <label for="nameField">
              Your Name <br />
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="nameField"
              className=" form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            />
          </div>

          <div className="formGroup">
            <label for="contactField">
              Your Contact Number <br />
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              id="contactField"
              className="form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            />
          </div>

          <div className="formGroup">
            <label for="emailField">
              Your email address <br />
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              id="emailField"
              className="form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            />
          </div>

          <div className="formGroup">
            <label for="summaryField">
              Summary about yourself <br />
            </label>
            <textarea
              type="text"
              placeholder="Describe yourself in short"
              id="summaryField"
              className="form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div className="formGroup">
            <label for="githubField">
              GitHub <br />
            </label>
            <input
              type="text"
              placeholder="Github profile link"
              id="githubField"
              className="form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            />
          </div>

          <div className="formGroup">
            <label for="linkedinField">
              LinkedIn <br />
            </label>
            <input
              type="text"
              placeholder="LinkedIn profile link"
              id="linkedinField"
              className="form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mx-7 text-lg space-y-4">
          <p className="text-3xl text-center font-bold ">
            Professional Details
          </p>

          <div className="formGroup" id="we">
            <label for="workExpField">
              Work Experience <br />
            </label>
            <textarea
              type="text"
              placeholder="Enter details"
              className="workExpField form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            ></textarea>
            <div id="btnAddExp">
              <button
                onClick={addExpField}
                className="px-5 py-1 my-2 bg-blue-400 rounded-md text-white"
              >
                Add
              </button>
            </div>
          </div>

          <div className="formGroup" id="aq">
            <label for="academicField">
              Academic Qualifications <br />
            </label>
            <textarea
              type="text"
              placeholder="Enter details"
              className="academicField form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            ></textarea>
            <div id="btnAddAcademic">
              <button
                onClick={addAcademicField}
                className="px-5 py-1 my-2 bg-blue-400 rounded-md text-white"
              >
                Add
              </button>
            </div>
          </div>

          <div className="formGroup" id="projects">
            <label for="academicField">
              Projects <br />
            </label>
            <textarea
              type="text"
              placeholder="Project details"
              className="projectsField form-control p-2 w-full text-gray-500 border border-gray-300 rounded-md"
            ></textarea>
            <div id="btnAddProjects">
              <button
                onClick={addProjectField}
                className="px-5 py-1 my-2 bg-blue-400 rounded-md text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex m-2 text-xl">
        <button
          onClick={() => {
            generateResume();
            document.getElementById("resume_form").classList.add("hidden");
            document
              .getElementById("resume_template")
              .classList.remove("hidden");
          }}
          className=" bg-blue-400 py-3 px-4 rounded-md text-white m-auto items-center"
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
