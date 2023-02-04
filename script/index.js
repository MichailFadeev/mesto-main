const popupBtnOpen = document.querySelector(".profile__edit-button");
const popupBtnClose = document.querySelector(".popup__form-close");
const popup = document.querySelector(".popup");
const formName = document.querySelector("#NameInput");
const formSubname = document.querySelector("#CaptionInput");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");
const popupForm = document.querySelector(".popup__form");





function openPopup() {
    popup.classList.add("popup_opened");
    formName.value = profileName.textContent;
    formSubname.value = profileCaption.textContent;
}


function closePopup() {
    popup.classList.remove("popup_opened");
}


function savePopup(event) {
    event.preventDefault();
    profileName.textContent = formName.value;
    profileCaption.textContent = formSubname.value;
    closePopup();
}

popupBtnOpen.addEventListener("click", openPopup);
popupBtnClose.addEventListener("click", closePopup);
popupForm.addEventListener("submit", savePopup);