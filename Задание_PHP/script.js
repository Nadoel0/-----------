$(document).ready(function () {
  const createCardButton = $("#createCardButton");
  const modalOverlay = $(".modal-overlay");
  const closeButton = $("#closeFormButton");
  const saveButton = $("#saveFormButton");
  const profileCard = $(".profile-cards-container");
  const nicknameInput = $("#nicknameInput");
  const raceInput = $("#raceInput");
  const characterClassInput = $("#characterClassInput");
  const levelInput = $("#levelInput");

  function openModal() {
    modalOverlay.show();
  }

  function closeModal() {
    modalOverlay.hide();
  }

  createCardButton.click(openModal);
  closeButton.click(closeModal);

  function saveFormData() {
    const nickname = nicknameInput.val();
    const race = raceInput.val();
    const characterClass = characterClassInput.val();
    const level = levelInput.val();

    let data = {
        nickname: nickname,
        race: race,
        characterClass: characterClass,
        level: level
    }

    $.ajax({
      type: 'POST',
      url: "./back.php",
      data: data,
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
      dataType: "json",
      success: function (response) {
        console.log("Данные отправлены на сервер", response);

        let cardData = `<div class="character-card-container">
            <h2>${response.data.nickname}</h2>
            <p class="card-info">Ваша сторона: ${response.data.race}</p>
            <p class="card-info">Ваш класс: ${response.data.characterClass}</p>
            <p class="card-info">Ваш уровень: ${response.data.level}</p>
            </div>`;

        profileCard.append(cardData);
        closeModal();
      },
      error: function (error) {
        console.error("Ошибка отправки на сервер", error);
        alert("Ошибка при отправке формы");
      },
    });
  }

  saveButton.click(saveFormData);
});
