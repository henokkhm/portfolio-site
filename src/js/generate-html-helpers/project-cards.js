const generateTechItems = (techStack) => {
  const generatedHTML = techStack
    .map(
      (tech) => `<li class="works__project-card__tech-stack-item">${tech}</li>`,
    )
    .join('\n');
  return generatedHTML;
};

const generateSingleProjectCardHTML = (projectDetails) => {
  const {
    id,
    name,
    featuredImage,
    client,
    role,
    year,
    description,
    techStack,
  } = projectDetails;

  return `
    <li class="works__project-card">
  <!-- Project Screenshot -->
  <div class="works__project-card__screenshot-wrapper">
    <img
      class="works__project-card__screenshot"
      srcset="${featuredImage.srcset}"
      sizes="${featuredImage.sizes}"
      src="${featuredImage.src}"
      alt="${featuredImage.alt}"
    />
  </div>

  <div class="works__project-card__body">
    <!-- Project Title -->
    <h3 class="works__project-card__title">${name}</h3>
    <!-- Project Summary -->
    <div class="works__project-card__summary">
      <span class="works__project-card__client">${client}</span>
      <img src="assets/separator.svg" alt="" />
      <span class="works__project-card__role">${role}</span>
      <img src="assets/separator.svg" alt="" />
      <span class="works__project-card__year">${year}</span>
    </div>
    <!-- Project Intro -->
    <p class="works__project-card__intro">
      ${description}
    </p>
    <!-- Project Tech Stack -->
    <ul class="works__project-card__tech-stack-list">
      ${generateTechItems(techStack)}
    </ul>
    <!-- See Project Details Button -->
    <button data-id="${id}" type="button" class="primary-button see-project-details-button">See project</button>
  </div>
</li>
    `;
};

const generateProjectCardsHTML = (projectsData) => {
  const generatedHTML = projectsData
    .map((project) => generateSingleProjectCardHTML(project))
    .join('\n');
  return generatedHTML;
};

export default generateProjectCardsHTML;
