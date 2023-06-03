import projectsData from './data/projects-data.js';
import generateProjectModalHTML from './generate-html-helpers/project-modal.js';

// Get the parent element of all the project cards
const projectCardsWrapper = document.querySelector('#project-cards-wrapper');
// Get the parent element of the modal
const projectModalWrapper = document.querySelector('#project-modal-wrapper');

// Handle opening of modal
projectCardsWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('see-project-details-button')) {
    const { id } = e.target.dataset;
    const selectedProject = projectsData.find((project, index) => id % 4 === index);
    projectModalWrapper.innerHTML = generateProjectModalHTML(selectedProject);
    projectModalWrapper.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
});

// Handle closing of modal
projectModalWrapper.addEventListener('click', (e) => {
  const elemIds = ['project-modal-wrapper', 'project-modal__close-icon'];
  if (elemIds.includes(e.target.id)) {
    projectModalWrapper.innerHTML = '';
    projectModalWrapper.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
