// === Selección de elementos del DOM ===

// Botones
const editButton = document.querySelector('.main__button_edit');
const closeButton = document.querySelector('.popup__button_close');

// Popup y formulario
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');

// Inputs del formulario
const nameInput = document.querySelector('.popup__input_name');
const aboutInput = document.querySelector('.popup__input_about');

// Texto visible en el perfil
const profileName = document.querySelector('.main__content_name');
const profileJob = document.querySelector('.main__content_job');

// === Funciones ===

// Abrir popup y rellenar los campos con los datos actuales del perfil
function openPopup() {
  nameInput.value = profileName.textContent.trim();
  aboutInput.value = profileJob.textContent.trim();
  popup.classList.add('popup_opened');
}

// Cerrar popup
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Guardar los datos del formulario en el perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Evita el comportamiento por defecto del formulario
  profileName.textContent = nameInput.value;
  profileJob.textContent = aboutInput.value;
  closePopup(); // Cierra el popup después de guardar
}

// === Event Listeners ===

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', handleProfileFormSubmit);
