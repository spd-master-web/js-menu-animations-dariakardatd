document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');

  hamburger.addEventListener('click', (e) => {
// animate here when open the menu
gsap.to(".hamburger ", {
  y:-100,
});


gsap.to("aside", {
  x: 0,
});

gsap.to("li", {
  opacity: 1,
  delay: .5,
  stagger: 0.1,
});

gsap.to(".copy", {
  opacity: 1,
  x: 0,
  duration: 2,
  ease: 'back'
});

gsap.to(".close", {
  y:0,
});

})

close.addEventListener('click', () => {
// animate here when close the menu

gsap.to("aside", {
  x: -600,
  delay: 1,
});

gsap.to(".close", {
  y:-200,
});

gsap.to("li", {
  opacity: 0,
  stagger: 0.1,  
});

gsap.to(".copy", {
  opacity: 0,
  x: -70,
  });

gsap.to(".hamburger ", {
  y:0,
  delay: 1.2,
});
})
})