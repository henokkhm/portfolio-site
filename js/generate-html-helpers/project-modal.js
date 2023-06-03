const generateTechItems = (techStack) => {
  const generatedHTML = techStack
    .map((tech) => `<li class="project__tech-stack-item">${tech}</li>`)
    .join('\n');
  return generatedHTML;
};

const generateParagraphs = (text) => {
  const paragraphsHTML = text
    .split('\n\n')
    .map(
      (paragraph) => `<p class="paragraph-text">
                ${paragraph}
              </p>`,
    )
    .join('\n');

  return paragraphsHTML;
};

const generateProjectModalHTML = (projectData) => {
  const {
    name,
    featuredImage,
    client,
    role,
    year,
    descriptionLong,
    techStack,
    linkToLiveVersion,
    linkToSource,
  } = projectData;

  return `
  <div class="project-modal">
    <div class="project-modal__header">
      <!-- Project Title -->
      <h3 class="project__title">${name}</h3>
      <img
        id="project-modal__close-icon"
        class="project-modal__close-icon"
        src="assets/icons/close-modal.svg"
        alt="Close modal button"
      />
    </div>
    <!-- Project Summary -->
    <div class="project__summary">
      <span class="project__client">${client}</span>
      <img src="assets/separator.svg" alt="" />
      <span class="project__role">${role}</span>
      <img src="assets/separator.svg" alt="" />
      <span class="project__year">${year}</span>
    </div>
    <!-- Project Screenshot -->
    <img
      class="project-modal__screenshot"
      src="${featuredImage.src}"
      alt="${featuredImage.alt}"
    />
      <!-- Project Details -->
    <div class="project-modal__body">
      <div class="project-modal__details">
      ${generateParagraphs(descriptionLong)}
      </div>
      <!-- Project Tech Stack -->
      <div>
        <ul class="project__tech-stack-list">
          ${generateTechItems(techStack)}
        </ul>
        <!-- Divider -->
        <div class="divider"></div>
        <!-- See Project Details Button -->
          <div class="project-modal__btn-wrapper">
            <a
              href="${linkToLiveVersion}"
              class="primary-button project-modal__btn"
            >
              <span>See live</span>
              <img src="assets/icons/see-live-icon.svg" alt="" />
            </a>
            <a
              href="${linkToSource}"
              class="primary-button project-modal__btn"
            >
              <span>See source</span>
              <img src="assets/icons/github-icon.svg" alt="" />
            </a>
          </div>
        </div>
    </div>
  </div>
`;
};

export default generateProjectModalHTML;
