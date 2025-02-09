 // Отримуємо кнопку
 let scrollToTopBtn = document.getElementById("scrollToTop");

 // Відстежуємо прокручування сторінки
 window.onscroll = function() {
     if (document.documentElement.scrollTop > 1500) {
         scrollToTopBtn.style.display = "block";
     } else {
         scrollToTopBtn.style.display = "none";
     }
 };

 // Функція для плавного підняття вгору
 function scrollToTop() {
     window.scrollTo({ top: 0, behavior: "smooth" });
 }