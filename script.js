document.addEventListener('DOMContentLoaded', function() {
    const videos = [
      "//www.youtube.com/embed/1TYl3jhfEDA?rel=0",
      "//www.youtube.com/embed/xFa2_PVMeDQ?rel=0",
      "//www.youtube.com/embed/hSrOpTYKNMw?rel=0",
      "//www.youtube.com/embed/WFhzzJjRncI?rel=0"
    ];
    let currentVideoIndex = 0;

    const iframe = document.querySelector('.slider iframe');
    const leftButton = document.querySelector('.nav-button.left');
    const rightButton = document.querySelector('.nav-button.right');

    leftButton.addEventListener('click', () => {
      currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
      iframe.src = videos[currentVideoIndex];
    });

    rightButton.addEventListener('click', () => {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      iframe.src = videos[currentVideoIndex];
    });

    document.querySelectorAll('.slider a').forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentVideoIndex = index;
        iframe.src = videos[currentVideoIndex];
      });
    });
  });





//------------   Customer reviws -----------------
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// cust 
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}

// navbar
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar');
window.onscroll =()=>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height= sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a [href*= '+ id +']').classList.add('active')
      })
    }
  })
}
let menuIcon  = document.querySelector('#menu-icon');
menuIcon.onclick =()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
