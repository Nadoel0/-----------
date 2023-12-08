$(document).ready(function () {
  const createCardButton = $("#createCardButton");
  const modalOverlay = $(".modal-overlay");
  const closeButton = $("#closeFormButton");
  const saveButton = $("#saveFormButton");
  const profileCard = $(".profile-card-container");
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
        charachterClass: characterClass,
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

        let cardData = `<h4>${response.nickname}}</h4>
        <p class="card-info">Ваша сторона: ${response.race}</p>
        <p class="card-info">Ваш класс: ${response.characterClass}</p>
        <p class="card-info">Ваш уровень: ${response.level}</p>`;

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
