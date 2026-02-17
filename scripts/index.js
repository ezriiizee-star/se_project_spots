const profileEditBtn = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#edit-profile-modal");
const profileCloseBtn = profileModal.querySelector(".modal__close-button");

const postNewBtn = document.querySelector(".profile__add-button");
const postModal = document.querySelector("#new-post-modal");
const postCloseBtn = postModal.querySelector(".modal__close-button");

profileEditBtn.addEventListener("click", function () {
  profileModal.classList.add("modal_is-opened");
});

profileCloseBtn.addEventListener("click", function () {
  profileModal.classList.remove("modal_is-opened");
});

postNewBtn.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});

postCloseBtn.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});
