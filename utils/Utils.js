// returns the occupation on the profile

// closes modal div that contains form
export function closeModal(modal) {
  modal.classList.remove("modal-box_visible");
  document.removeEventListener("keydown", closeByEscape);
}
// opens modal div that contains form
export const openModal = (modal) => {
  modal.classList.add("modal-box_visible");
  // fillprofileForm(getName(), getOccupation());
  document.addEventListener("keydown", closeByEscape);
};

export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal-box_visible");
    closeModal(openedPopup);
  }
}
