let current = 0;
let intervalId;

function change(click) {
  current = current + click;
  slideshow(current);
  stopAutoChange(); // Stop auto change when manually changing slides
  startAutoChange(); // Restart auto change after a delay
}

function startAutoChange() {
  intervalId = setInterval(function () {
    change(1);
  }, 5000); // Change slides automatically every 5 seconds
}

function stopAutoChange() {
  clearInterval(intervalId);
}

function slideshow(number) {
  let slides = document.getElementsByClassName('slide');
  number = (number + slides.length) % slides.length;

  for (let i of slides) {
    i.classList.remove('active');
  }

  slides[number].classList.add('active');
}

startAutoChange();


const items = document.getElementsByClassName('accordian-name');
const titles = document.getElementsByClassName('accordian-title');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function () {
    this.classList.toggle('active');
    titles[i].classList.toggle('active');
  });
}