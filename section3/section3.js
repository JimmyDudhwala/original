



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const navbarHeight = document.querySelector('.nav').offsetHeight;
  const sections = document.querySelectorAll(".part2 .images");
  const numbers = document.querySelectorAll(".projectNumber div");
  const text = document.querySelectorAll(".projectSection .projectScroller");



  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      start: `top top+=${navbarHeight}`,
      end: `bottom-=${navbarHeight} top `,

      scrub: true,
      pin: true,

    }
  });

  tl.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: "none"
  });

  tl.to(numbers, {
    yPercent: -100 * (numbers.length - 1),
    ease: "none",
    stagger: 0,
  }, "<");

  tl.to(text, {
    yPercent: -100 * (sections.length - 1),
    ease: "none"
  }, "<");
});


document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    speed: 3000,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {

      delay: 100,
      disableOnInteraction: false,
    },

  });
});

const projects = document.querySelectorAll('.projectImage .images, .part2 .swiper-slide',);
const link = document.querySelector(".link");

projects.forEach(project => {
  project.addEventListener('mouseenter', function () {
    gsap.to(link, {
      display: "flex",
      duration: 0.5,
      opacity: 0.5,
    });
  });

  project.addEventListener('mousemove', function (e) {

    const x = e.clientX
    const y = e.clientY

    gsap.to(link, {
      duration: 0.1,
      x: x,
      y: y,
    });
  });

  project.addEventListener('mouseleave', function () {
    gsap.to(link, {
      display: "none",
      duration: 0.5,
      opacity: 0,
    });
  });
});