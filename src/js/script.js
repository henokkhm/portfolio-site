import generateProjectCardsHTML from './generate-html-helpers/project-cards.js';
import projectsData from './data/projects-data.js';

const projectCardsWrapper = document.querySelector('#project-cards-wrapper');

window.onload = () => {
  projectCardsWrapper.innerHTML = generateProjectCardsHTML(projectsData);
};
