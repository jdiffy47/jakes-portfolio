// IMPORT DATA 
import { projectData } from "./project-data.js"
import { resumeData } from "./project-data.js"



// CACHED ELEMENT REFERENCES
const homeBtn = document.getElementById('home-section')
const projectBtn = document.getElementById('project-section')
const resumeBtn = document.getElementById('resume-section')
const aboutBtn = document.getElementById('about-section')
const contactBtn = document.getElementById('contact-section')
const projectContainer = document.getElementById('project-container')
const resumeContainer = document.getElementById('resume-container')



// APPEND TO HTML
let projectMarkup = projectData.map(project =>
  `
      <img id="project-img" src="${project.image}" alt="">
      <p id="project-description">${project.desciption}</p>
      <div id="projects-btn">
        <a id="project-github" href="${project.github}" target ="_blank">GitHub</a>
        <a id="project-deploy" href="${project.deployment}" target ="_blank">Deployment</a>
  `
  ).join('')

  projectContainer.innerHTML = projectMarkup


