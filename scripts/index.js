const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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

  closeModal(profileModal);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(postCaptionInput.value);
  console.log(postLinkInput.value);

  closeModal(postModal);
}

postFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
