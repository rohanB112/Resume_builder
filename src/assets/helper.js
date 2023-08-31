export function addExpField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("workExpField");
  newNode.classList.add("form-control");
  newNode.classList.add("p-2");
  newNode.classList.add("w-full");
  newNode.classList.add("text-gray-500");
  newNode.classList.add("border");
  newNode.classList.add("border-gray-300");
  newNode.classList.add("rounded-md");
  newNode.setAttribute("placeholder", "Enter details");

  let btnAddExp = document.getElementById("btnAddExp");
  let workExp = document.getElementById("we");

  workExp.insertBefore(newNode, btnAddExp);
}

export function addAcademicField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("academicField");
  newNode.classList.add("form-control");
  newNode.classList.add("p-2");
  newNode.classList.add("w-full");
  newNode.classList.add("text-gray-500");
  newNode.classList.add("border");
  newNode.classList.add("border-gray-300");
  newNode.classList.add("rounded-md");
  newNode.setAttribute("placeholder", "Enter details");

  let btnAddAcademic = document.getElementById("btnAddAcademic");
  let academicExp = document.getElementById("aq");

  academicExp.insertBefore(newNode, btnAddAcademic);
}

export function addProjectField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("projectsField");
  newNode.classList.add("form-control");
  newNode.classList.add("p-2");
  newNode.classList.add("w-full");
  newNode.classList.add("text-gray-500");
  newNode.classList.add("border");
  newNode.classList.add("border-gray-300");
  newNode.classList.add("rounded-md");
  newNode.setAttribute("placeholder", "Project details");

  let btnAddProjects = document.getElementById("btnAddProjects");
  let projects = document.getElementById("projects");

  projects.insertBefore(newNode, btnAddProjects);
}

export function generateResume() {
  document.getElementById("name_T").innerHTML =
    document.getElementById("nameField").value;

  document.getElementById("contact_T").innerHTML =
    document.getElementById("contactField").value;

  document.getElementById("email_T").innerHTML =
    document.getElementById("emailField").value;

  document.getElementById("summary_T").innerHTML =
    document.getElementById("summaryField").value;

  document.getElementById("github_T").innerHTML =
    document.getElementById("githubField").value;

  document.getElementById("linkedin_T").innerHTML =
    document.getElementById("linkedinField").value;

  //PROJECTS
  let projects = document.getElementsByClassName("projectsField");
  let str1 = "";
  for (let e of projects) {
    console.log(e);
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("projects_T").innerHTML = str1;

  //ACADEMIC QUALIFICATIONS
  let aq = document.getElementsByClassName("academicField");
  let str2 = "";
  for (let e of aq) {
    console.log(e);
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("academic_T").innerHTML = str2;

  //WORK EXPERIENCE
  let workExp = document.getElementsByClassName("workExpField");
  let str3 = "";
  for (let e of workExp) {
    str3 = str3 + `<li> ${e.value} </li>`;
  }
  document.getElementById("workExp_T").innerHTML = str3;

  //   window.print();
}
