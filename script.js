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
  