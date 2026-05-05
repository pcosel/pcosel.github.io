function initGallery(screenshots, placeholder) {
  if (!screenshots.length) return;

  var currentIndex = 0;
  var mainImage = document.getElementById("mainImage");
  var arrowLeft = document.getElementById("arrowLeft");
  var arrowRight = document.getElementById("arrowRight");
  var thumbs = document.querySelectorAll(".thumb");

  function update() {
    if (mainImage) mainImage.src = screenshots[currentIndex];
    if (arrowLeft) arrowLeft.style.display = currentIndex === 0 ? "none" : "";
    if (arrowRight) arrowRight.style.display = currentIndex === screenshots.length - 1 ? "none" : "";
    thumbs.forEach(function (t, i) {
      t.classList.toggle("thumb--active", i === currentIndex);
    });
  }

  if (arrowLeft) {
    arrowLeft.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        update();
      }
    });
  }

  if (arrowRight) {
    arrowRight.addEventListener("click", function () {
      if (currentIndex < screenshots.length - 1) {
        currentIndex++;
        update();
      }
    });
  }

  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      currentIndex = parseInt(thumb.getAttribute("data-index"), 10);
      update();
    });
  });

  if (screenshots.length === 1) {
    if (arrowLeft) arrowLeft.style.display = "none";
    if (arrowRight) arrowRight.style.display = "none";
  }

  update();
}
