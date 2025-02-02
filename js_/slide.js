const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

// Автоматичне переключення слайдів
function autoSlide() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  updateSlide();
}

// Оновлення слайду
function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Перемикання на попередній слайд
prevButton.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateSlide();
});

// Перемикання на наступний слайд
nextButton.addEventListener('click', () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  updateSlide();
});

// Запуск автоматичного слайдера
let interval = setInterval(autoSlide, 3000);

// Зупинка автоматичного слайдера при взаємодії
document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(interval);
});

// Відновлення автоматичного слайдера
document.querySelector('.slider').addEventListener('mouseleave', () => {
  interval = setInterval(autoSlide, 3000);
});