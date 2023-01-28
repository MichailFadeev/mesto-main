const popupBtnOpen = document.querySelector(".profile__edit-button");
const popupBtnClose = document.querySelector(".popup__form-close");
const popup = document.querySelector(".popup");
const formName = document.querySelector(".popup__form-name");
const formSubname = document.querySelector(".popup__form-subname");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");
const btnSave = document.querySelector(".popup__form-save");
const popupForm = document.querySelector(".popup__form");


popupBtnOpen.addEventListener("click", openPopup);
popupBtnClose.addEventListener("click", closePopup);
popupForm.addEventListener("submit", savePopup);


function openPopup() {
    popup.classList.add("popup__opened");
    formName.value = profileName.textContent;
    formSubname.value = profileCaption.textContent;
}


function closePopup() {
    popup.classList.remove("popup__opened");
}


function savePopup(event) {
    event.preventDefault();
    profileName.textContent = formName.value;
    profileCaption.textContent = formSubname.value;
    closePopup();
}