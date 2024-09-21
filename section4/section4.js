
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper2", {
        effect: "cards",
        grabCursor: true,
    });
});

var cursor = document.querySelector(".expCurs img");
var exp = document.querySelector(".expCurs");
var shouldFollow = false;

function moveCircle(e) {
    console.log(cursor)
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
        exp.style.display = 'block';
        cursor.src = imageUrl;
        shouldFollow = true;
        moveCircle(e);
    };
}

function disableFollow() {
    shouldFollow = false;
    cursor.src = '';
    gsap.to(cursor, { scale: 0.1, autoAlpha: 0, duration: 0.3 });
}

document.querySelectorAll(".e1, .e2").forEach(function (element) {
    element.addEventListener("mouseenter", enableFollow(element.classList.contains('e1') ? 'https://i.postimg.cc/cCcfxcym/codeSoft.jpg' : 'https://i.postimg.cc/9fqTR2Hz/hpParam.jpg'));
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


const splittypes = document.querySelectorAll(".AnimatedText h1");

splittypes.forEach((element, index) => {
    const text = new SplitType(element, {
        types: "chars", // Ensure we are splitting into characters
    });

    const t1 = gsap.timeline();

    t1.from(text.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        scrollTrigger: {
            trigger: ".subsec4",
            end: "top 20%",
            scrub: true,
            start: () => window.innerWidth < 768 ? "top 90%" : "top 80%", // Responsive start point
            end: () => window.innerWidth < 768 ? "top 30%" : "top 20%", // Responsive end point
        },
        duration: 1,
        ease: "power1.inOut"
    });

    t1.to(text.chars, {
        color: "red",
        duration: 1,
        stagger: 5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".subsec4",
            start: () => window.innerWidth < 768 ? "bottom 90%" : "bottom 100%", // Responsive start point
            end: () => window.innerWidth < 768 ? "bottom 85%" : "bottom 95%", // Responsive end point
            scrub: true,

        },
    });
});
