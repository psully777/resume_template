function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${workExperience.ariaLabel}">${
    workExperience.emoji
  }</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}

const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${educationalExperience.ariaLabel}">${
  educationalExperience.emoji
}</span>
      ${educationalExperience.university}<span class="comma">,</span>
      <span class="light">${educationalExperience.school}</span>
    </h3>
    <ul>
      ${educationalExperience.details
        .map(detail => `<li>${detail}</li>`)
        .join('')}
    </ul>
  </div>`;

const fetchData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();

  document.title = data.name;

  const name = document.querySelector('#name');
  name.textContent = data.name;

  const emojiContainer = document.querySelector('h1 span[role="img"]');
  emojiContainer.textContent = data.mainEmoji.character;
  emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

  const phoneNumberContainer = document.querySelector('#phone-number');
  phoneNumberContainer.textContent = data.phoneNumber;

  const emailContainer = document.querySelector('#email');
  emailContainer.textContent = data.email;

  const githubContainer = document.querySelector('#github-link');
  githubContainer.textContent += data.githubHandle;

  const linkedInContainer = document.querySelector('#linkedin-link');
  linkedInContainer.textContent += data.linkedInHandle;

  const workExperienceHeading = document.querySelector(
    "h2:nth-of-type(1) span[role='img']"
  );
  workExperienceHeading.textContent =
    data.headingEmojis.workExperience.character;
  workExperienceHeading.setAttribute(
    'aria-label',
    data.headingEmojis.workExperience.ariaLabel
  );

  const educationalExperienceHeading = document.querySelector(
    "h2:nth-of-type(2) span[role='img']"
  );
  educationalExperienceHeading.textContent =
    data.headingEmojis.educationExperience.character;
  educationalExperienceHeading.setAttribute(
    'aria-label',
    data.headingEmojis.educationExperience.ariaLabel
  );

  const skillsExperienceHeading = document.querySelector(
    "h2:nth-of-type(3) span[role='img']"
  );
  skillsExperienceHeading.textContent =
    data.headingEmojis.skillsExperience.character;
  skillsExperienceHeading.setAttribute(
    'aria-label',
    data.headingEmojis.skillsExperience.ariaLabel
  );

  const workExperienceContainer = document.querySelector('#work-experience');
  const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
  const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
  workExperienceContainer.innerHTML = allWorkExperiencesHTML;

  const educationContainer = document.querySelector('#education');
  const eachEducationalExperienceHTML = data.educationalExperience.map(
    renderEducationalExperience
  );
  const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
  educationContainer.innerHTML = allEducationalExperiencesHTML;
};

fetchData();
