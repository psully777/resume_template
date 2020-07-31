const data = {
  name: `Patrick O'Sullivan`,
  mainEmoji: {
    character: '👋',
    ariaLabel: 'wave',
  },
  phoneNumber: '325-232-3509',
  email: 'posullivan@rbi.com',
  githubHandle: 'psully777',
  linkedInHandle: 'posullivan',

  workExperiences: [
    {
      emoji: '💻',
      ariaLabel: `laptop`,
      jobTitle: 'Sr. Analyst - Tech',
      institution: 'RBI',
      dates: 'July 2020 - Present',
      details: ['HTML', 'CSS', 'Javascript'],
    },
    {
      emoji: '👨',
      ariaLabel: `man`,
      jobTitle: 'Sr. Analyst - Professional Recruitment',
      institution: 'RBI',
      dates: 'October 2019 - July 2020',
      details: [
        'Extensive interpersonal communication',
        'Prioritized recruitment efforts',
        'Helped develop a standardized process',
        'Managed the department budget',
      ],
    },
    {
      emoji: '🛍',
      ariaLabel: `shopping-bag`,
      jobTitle: 'Sr. Analyst - Global Procurement',
      institution: 'RBI',
      dates: 'May 2019 - October 2019',
      details: [
        'Facilitated negotiations',
        'Oversaw the QA testing for the new BK Flaming Heart broiler',
        'Created a PBI database',
      ],
    },
    {
      emoji: '🍗',
      ariaLabel: `chicken-wing`,
      jobTitle: 'Analyst - PLK Company Operations',
      institution: 'RBI',
      dates: 'August 2018 - May 2019',
      details: [
        'Reported on weekly, monthly, and yearly restaurant performance',
        'Created a new pricing scheme for all PLK company restaurants',
        'Calculated bonus payouts for all restaurant employees and DMs',
      ],
    },
  ],
  educationalExperiences: [
    {
      emoji: '🐊',
      ariaLabel: `gator`,
      university: 'University of Florida',
      school: 'College of Agriculture',
      dates: '2014-2018',
      details: [
        'I graduated with a degree in International Food and Resource Economics',
        'Coolest Dude: 2018',
      ],
    },
    {
      emoji: '🏊‍♂️',
      ariaLabel: `swimmer`,
      school: 'Union Pines High School',
      dates: '2010-2014',
      details: [
        'I graduated in 2010',
        '2nd in the state in the 100yd breast stroke',
      ],
    },
  ],
};

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

const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperiencesHTML;

const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${workExperience.ariaLabel}">${
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

const educationContainer = document.querySelector('#education');
const eachEducationalExperienceHTML = data.educationalExperiences.map(
  renderEducationalExperience
);
const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperiencesHTML;
