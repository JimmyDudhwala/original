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