// IMPORT DATA HERE
import { projectData } from "./project-data.js"


// CACHED ELEMENT REFERENCES
const homeBtn = document.getElementById('home-section')
const projectBtn = document.getElementById('project-section')
const resumeBtn = document.getElementById('resume-section')
const aboutBtn = document.getElementById('about-section')
const contactBtn = document.getElementById('contact-section')
const projectContainer = document.getElementById('project-container')




let projectMarkup = projectData.map(project =>
  `
      <img id="project-img" src="${project.image}" alt="">
      <h3 id="project-title">${project.title}</h3>
      <a id="project-github" href="${project.github}"></a>
      <a id="project-deploy" href="${project.deployment}"></a>
      <p id=#"project-descriptioni>${project.desciption}</p>
  `
  
  ).join('')

  projectContainer.innerHTML = projectMarkup
