const openModalButton = document.getElementById("openModalButton");
const modalSpace = document.getElementById("modalSpace");
const selectedAchievement = document.getElementById("selectAchievement");
const academicFields = document.getElementById("academicFields");
const startupFields = document.getElementById("startupFields");
const closeModalButton = document.getElementById("closeModalButton");
const saveModalButton = document.getElementById("saveModalButton");
const closeModalSpace = document.getElementById("closeModal");

selectedAchievement.addEventListener("change", function () {
  if (selectedAchievement.value === "academic") {
    academicFields.classList.remove("hidden");
    startupFields.classList.add("hidden");
  } else if (selectedAchievement.value === "startup") {
    academicFields.classList.add("hidden");
    startupFields.classList.remove("hidden");
  } else {
    academicFields.classList.add("hidden");
    startupFields.classList.add("hidden");
  }
});

openModalButton.addEventListener("click", openModal);
closeModalSpace.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);
saveModalButton.addEventListener("click", closeModal);

function openModal() {
  modalSpace.style.display = "block";
}

function closeModal() {
  modalSpace.style.display = "none";
}
