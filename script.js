var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  );

  var index = 0,
    time = 5000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    index++;
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
  }, time);
}

var text = document.getElementById("info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  text.innerHTML = "Lorem ipsum";
  btn.innerHTML = "RETURN";
  Toggle();
});

var btn = document.getElementById("toggleconfetti");
btn.addEventListener("click", function () {
  if (btn.innerHTML === "Confetti!") {
    btn.innerHTML = "No Confetti!";
  } else {
    btn.innerHTML = "Confetti!";
  }
});
