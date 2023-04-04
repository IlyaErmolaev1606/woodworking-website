// Здесь можно добавить JavaScript код, если он понадобится в дальнейшем.
document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("myModal");
  let images = document.querySelectorAll(".product img");
  let modalImg = document.getElementById("modalImage");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  let span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  
    setInterval(nextSlide, 3000); // 5000ms = 5 секунд между слайдами
  });
    const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  
  function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  
  setInterval(changeSlide, 3000);
// Получаем элементы модального окна, крестика и контейнера для изображений
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];
const images = document.querySelectorAll(".product img");

// Открываем модальное окно при клике на изображение
images.forEach(image => {
    image.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src;
        caption.innerHTML = this.alt;
    }
});

// Закрываем модальное окно при клике на крестик
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне области изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// ...предыдущий код...

// Индекс текущего слайда
let slideIndex;

// Открыть модальное окно с определенным слайдом
function openModal(n) {
  slideIndex = n;
  modal.style.display = "block";
  modalImage.src = images[slideIndex].src;
  caption.innerHTML = images[slideIndex].alt;
  document.body.classList.add("modal-open");
}

// Изменить текущий слайд
function plusSlides(n) {
  const newIndex = slideIndex + n;
  if (newIndex >= 0 && newIndex < images.length) {
    openModal(newIndex);
  }
}

// Открыть модальное окно при клике на изображение
images.forEach((image, index) => {
  image.onclick = function () {
    openModal(index);
  };
});

// ...остальной код...
  