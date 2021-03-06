// IMPORT DATA 
import { projectData } from "./project-data.js"



// CACHED ELEMENT REFERENCES
const homeBtn = document.getElementById('home-section')
const projectBtn = document.getElementById('project-section')
const resumeBtn = document.getElementById('resume-section')
const aboutBtn = document.getElementById('about-section')
const contactBtn = document.getElementById('contact-section')
const projectContainer = document.getElementById('project-container')
const body = document.querySelector("body")



// FUNCTIONS
function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}




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



// VARIABLES



// EVENT LISTENERS
projectBtn.addEventListener('mouseover', function() {
  projectBtn.style.border = 'solid #fca311 2px'
  projectBtn.style.padding = "8px"
  projectBtn.style.color = '#fff'
})

projectBtn.addEventListener('mouseout', function() {
  projectBtn.style.border = 'none'
  projectBtn.style.color = '#ffffff'
  projectBtn.style.padding = '0'
  })

aboutBtn.addEventListener('mouseover', function() {
  aboutBtn.style.border = 'solid #fca311 2px'
  aboutBtn.style.padding = "8px"
  aboutBtn.style.color = '#fff'
})

aboutBtn.addEventListener('mouseout', function() {
  aboutBtn.style.border = 'none'
  aboutBtn.style.color = '#ffffff'
  aboutBtn.style.padding = '0'
  })

resumeBtn.addEventListener('mouseover', function() {
  resumeBtn.style.border = 'solid #fca311 2px'
  resumeBtn.style.padding = "8px"
  resumeBtn.style.color = '#fff'
})

resumeBtn.addEventListener('mouseout', function() {
  resumeBtn.style.border = 'none'
  resumeBtn.style.color = '#ffffff'
  resumeBtn.style.padding = '0'
  })


contactBtn.addEventListener('mouseover', function() {
  contactBtn.style.border = 'solid #fca311 2px'
  contactBtn.style.padding = "8px"
  contactBtn.style.color = '#fff'
})

contactBtn.addEventListener('mouseout', function() {
  contactBtn.style.border = 'none'
  contactBtn.style.color = '#ffffff'
  contactBtn.style.padding = '0'
  })






