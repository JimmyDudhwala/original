
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper2", {
        effect: "cards",
        grabCursor: true,
    });
});


var cursor = document.querySelector(".expCurs");
var shouldFollow = false;

function moveCircle(e) {
    if (shouldFollow) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            scale: 1,
            autoAlpha: 1,
            duration: 0.3
        });

    }
}
function enableFollow(imageUrl) {
    return function (e) {
        cursor.style.backgroundImage = `url('${imageUrl}')`;
        shouldFollow = true;
        moveCircle(e);
    };
}

function disableFollow() {
    shouldFollow = false;
    cursor.style.backgroundImage = '';
    gsap.to(cursor, { scale: 0.1, autoAlpha: 0, duration: 0.3 });

}

document.querySelectorAll(".e1, .e2").forEach(function (element) {
    element.addEventListener("mouseenter", enableFollow(element.classList.contains('e1') ? 'INSERT_URL_FOR_E1_HERE' : 'INSERT_URL_FOR_E2_HERE'));
    element.addEventListener("mousemove", moveCircle);
    element.addEventListener("mouseleave", disableFollow);
});


const expE1 = document.querySelector('.exp.e1');

expE1.addEventListener('mouseenter', () => {
    gsap.to(expE1, {
        '--beforhigth': '15vh',
        duration: 0.5,
    });
});

expE1.addEventListener('mouseleave', () => {
    gsap.to(expE1, {
        '--beforhigth': '0vh',
        duration: 0.5,
    });
});

const expE2 = document.querySelector('.exp.e2');

expE2.addEventListener('mouseenter', () => {
    gsap.to(expE2, {
        '--beforhigth': '15vh',
        duration: 0.5,
    });
});

expE2.addEventListener('mouseleave', () => {
    gsap.to(expE2, {
        '--beforhigth': '0vh',
        duration: 0.5,
    });
});


gsap.to(".section4 .part2 .expContainer .exp", {
    "--afterwidth": "200%",
    scrollTrigger: {
        trigger: ".section4 .part2 .expContainer .exp",
        start: "top 80%", // Adjust as needed
        end: "top 20%", // Adjust as needed


    },
    duration: 1, // Duration of the animation
    ease: "power1.inOut",
    stagger: 0.5
});

gsap.from(".section4 .part2 .expContainer .exp", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".section4 .part2 .expContainer .exp",
        start: "top 80%", // Adjust as needed
        end: "top 20%", // Adjust as needed


    },
    duration: 1, // Duration of the animation
    ease: "power1.inOut",
    stagger: 0.5
});
gsap.from(".section4 .certificationContainer", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".section4 .certificationContainer",
        start: "top 80%", // Adjust as needed
        end: "top 20%", // Adjust as needed


    },
    duration: 1, // Duration of the animation
    ease: "power1.inOut",
});

gsap.from(".certificationTitle", {
    opacity: 0,
    x: 500,
    duration: 1,
    scrollTrigger: {
        trigger: ".certificationTitle",
        start: "top 80%", // Adjust as needed
        end: "top 20%", // Adjust as needed


    },
});

gsap.from(".section4 .title h1", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".section4 .title h1",
        start: "top 95%", // Adjust as needed
    },
});

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const splitText = new SplitText(".AnimatedText h1", { type: "chars" });
    const chars = splitText.chars;

    console.log(chars);

    gsap.from(chars, {
        scrollTrigger: {
            trigger: ".section4 .subsec4",
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            scrub: true, // Smooth scrubbing
            markers: true // Remove this line in production
        },
        duration: 1, // Duration of the animation
        opacity: 0,
        y: 50,
        stagger: 0.05, // Stagger the animation for each character
        ease: "power1.inOut"
    });
});