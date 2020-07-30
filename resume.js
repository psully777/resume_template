const data = {
  name: `Patrick O'Sullivan`
  mainEmoji: {
    character: `👋`
    arialLabel: `wave`,
  }
  phoneNumber: `325-232-3509`
  email: `posullivan@rbi.com`
  githubHandle: `psully777`
  linkedInHandle: `posullivan`
}
document.title = data.name;

const name = document.querySelector(`#name`);

name.textContent = data.name;

const. emojiContainer = document.querySelector(`h1 span[role="img"]`)

emojiContainer.tectContent = data.mainEmoji.character;
emojiContainer.setAttribute("aria-label", data.mainEmoji.ariaLabel);