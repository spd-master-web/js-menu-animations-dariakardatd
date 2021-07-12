document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');

  hamburger.addEventListener('click', (e) => {
    // animate here when open the menu
    // gsap.to(".hamburger ", {
 


    //   rotation: 720,
    //   x: 100,
    //   duration: 3,
    //   repeat: 3,
    // }, {
    //   rotation: 0,
    //   x: -50,
    //   duration: 3,
    //   repeat: 3,
    // });


    gsap.to("aside", {
      x: 0,
    });

    gsap.to("li", {

      opacity: 100,
      delay: 1,
      stagger: 0.1,
    });

gsap.to(".copy", {
  opacity: 100,
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
    });

    gsap.to(".close", {
      y:-200,
    })
  })
})