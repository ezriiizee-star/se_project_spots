const openModal = (modal) => {
  modal.classList.add("modal_is-opened");
};

const closeModal = (modal) => {
  modal.classList.remove("modal_is-opened");
};

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#edit-profile-modal");
const profileCloseBtn = profileModal.querySelector(".modal__close-button");
const profileFormElement = profileModal.querySelector(".modal__form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description",
);
const profileNameInput = profileModal.querySelector("#input-profile-name");
const profileDescriptionInput = profileModal.querySelector(
  "#input-profile-description",
);

const postNewBtn = document.querySelector(".profile__add-button");
const postModal = document.querySelector("#new-post-modal");
const postCloseBtn = postModal.querySelector(".modal__close-button");
const postFormElement = postModal.querySelector(".modal__form");
const postCaptionInput = postModal.querySelector("#input-image-caption");
const postLinkInput = postModal.querySelector("#input-image-link");

profileEditBtn.addEventListener("click", function () {
  profileNameInput.value = profileNameElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(profileModal);
});

profileCloseBtn.addEventListener("click", function () {
  closeModal(profileModal);
});

postNewBtn.addEventListener("click", function () {
  openModal(postModal);
});

postCloseBtn.addEventListener("click", function () {
  closeModal(postModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = profileNameInput.value;
  profileDescriptionElement.textContent = profileDescriptionInput.value;

  profileModal.classList.remove("modal_is-opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(postCaptionInput.value);
  console.log(postLinkInput.value);

  postModal.classList.remove("modal_is-opened");
}

postFormElement.addEventListener("submit", handleAddCardSubmit);
