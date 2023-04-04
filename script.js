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
  
    setInterval(nextSlide, 5000); // 5000ms = 5 секунд между слайдами
  });
    const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  
  function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  
  setInterval(changeSlide, 5000);
  