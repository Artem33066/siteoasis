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


// ДАННЫЕ ДЛЯ ВСЕХ СЛАЙДОВ
const projects = [
  {
    number: "Проект №057",
    title: "Частная резиденция 'У озера'",
    price: "₽80.000",
    days: "18 дней",
    image: "./assets/slide1.png",
    services: [
      { name: "Газон под ключ", price: "50.000" },
      { name: "Садовые дорожки", price: "20.000" },
      { name: "Установка светильников", price: "10.000" }
    ]
  },
  {
    number: "Проект №045",
    title: "Офисный парк 'Эко-сити'",
    price: "₽150.000",
    days: "32 дня",
    image: "./assets/slide2.png",
    services: [
      { name: "Вертикальное озеленение", price: "75.000" },
      { name: "Система автополива", price: "45.000" },
      { name: "Декоративные элементы", price: "30.000" }
    ]
  },
  {
    number: "Проект №032",
    title: "Жилой комплекс 'Зеленые холмы'",
    price: "₽100.000",
    days: "24 день",
    image: "./assets/slide3.png",
    services: [
      { name: "Благоустройство участков", price: "50.000" },
      { name: "Ландшафтный дизайн", price: "25.000" },
      { name: "Посев газона", price: "20.000" },
      { name: "Уход за растениями", price: "5.000" }
    ]
  }
];

let current = 0;

// ЭЛЕМЕНТЫ
const projectNumber = document.getElementById("project-number");
const projectTitle = document.getElementById("project-title");
const projectPrice = document.getElementById("project-price");
const projectDays = document.getElementById("project-days");
const projectImage = document.getElementById("project-image");
const servicesList = document.getElementById("services-list");

// РЕНДЕР
function renderProject(i) {
  const p = projects[i];

  projectNumber.textContent = p.number;
  projectTitle.textContent = p.title;
  projectPrice.textContent = p.price;
  projectDays.textContent = p.days;
  projectImage.src = p.image;

  servicesList.innerHTML = "";
  p.services.forEach(s => {
    servicesList.innerHTML += `
      <div class="service-row">
        <span>${s.name}</span>
        <span class="service-price">${s.price}</span>
      </div>
    `;
  });
}

renderProject(current);

// Кнопки
document.getElementById("prevBtn").onclick = () => {
  current = (current - 1 + projects.length) % projects.length;
  renderProject(current);
};

document.getElementById("nextBtn").onclick = () => {
  current = (current + 1) % projects.length;
  renderProject(current);
};
