var yearInfo = document.querySelectorAll(".yearInfo");

yearInfo.forEach((year) => {
  year.addEventListener("mouseenter", () => {
    // Use `year.querySelector` to target only the `.upsider` within the hovered `.yearInfo`
    gsap.to(year.querySelector(".upsider"), {
      y: -150,
      duration: 0.3,
    });
  });

  year.addEventListener("mouseleave", () => {
    // Use `year.querySelector` to target only the `.upsider` within the hovered `.yearInfo`
    gsap.to(year.querySelector(".upsider"), {
      y: 0,
      duration: 0.5,
    });
  });
});


const container = document.querySelector('.container');
const libs = document.querySelectorAll('.lib');
const libWidth = libs[0].offsetWidth;
const totalWidth = libWidth * libs.length;
const duration = 7;

function moveFirstToLast() {
  container.appendChild(container.firstElementChild);
  gsap.set(container, { x: 0 });
}

function createAnimation() {
  gsap.to(container, {
    x: -libWidth,
    duration: duration,
    ease: 'none',
    onComplete: () => {
      moveFirstToLast();
      createAnimation();
    }
  });
}

createAnimation();

gsap.from(".timeline", {
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%",
    end: "bottom 50%",

  },
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

gsap.from(".skillTitle", {
  scrollTrigger: {
    trigger: ".skillTitle",
    start: "top 80%",
    end: "bottom 50%",

  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

gsap.from(".flipper", {
  scrollTrigger: {
    trigger: ".skillTitle",
    start: "top 80%",
    end: "bottom 50%",

  },
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".section2 .title h1", {
  scrollTrigger: {
    trigger: ".section2 .title h1",
    start: "top 95%",
    end: "bottom 100%",

  },

  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
gsap.from(".title h1 span", {
  scrollTrigger: {
    trigger: ".section2 .title h1",
    start: "top 95%",
    end: "bottom 100%",
    scrub: 5,
  },
  y: -500,
  ease: "bounce.out",
});
