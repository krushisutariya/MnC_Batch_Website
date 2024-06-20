// Image Slider JS
let current = 0;
let intervalId;

function change(click) {
  current = current + click;
  slideshow(current);
  stopAutoChange(); 
  startAutoChange(); 
}

function startAutoChange() {
  intervalId = setInterval(function () {
    change(1);
  }, 5000);
}

function stopAutoChange() {
  clearInterval(intervalId);
}

function slideshow(number) {
  let slides = document.getElementsByClassName('slide');
  number = (number) % slides.length;

  for (let i of slides) {
    i.classList.remove('active');
  }

  slides[number].classList.add('active');
}
setTimeout(() => {
  startAutoChange();
}, 5000);


// Bar over title JS
document.addEventListener("DOMContentLoaded", function() {
  var titleMains = document.querySelectorAll(".inner-main h1");

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed

  titleMains.forEach(function(titleMain) {
    observer.observe(titleMain);
  });
});

// AnimateOnScroll JS
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  document.querySelectorAll('.animate-on-scroll').forEach(entry => {
    observer.observe(entry);
  });
});

// Accordian for Key-Features and Strengths
document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.querySelectorAll('main .inner-main .box');

  boxes.forEach(function (box) {
    box.addEventListener('click', function () {
      if (box.classList.contains('active')) {
        box.classList.remove('active');
      } else {
        closeAllBoxes();
        box.classList.add('active');
      }
    });
  });

  function closeAllBoxes() {
    boxes.forEach(function (box) {
      box.classList.remove('active');
    });
  }
});