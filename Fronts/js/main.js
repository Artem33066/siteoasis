document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      // Если нужно, чтобы открывался только один блок — закрываем остальные
      cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
      });

      // Переключаем текущий
      card.classList.toggle("active");
    });
  });

});
