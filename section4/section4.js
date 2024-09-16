
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
    return function(e) {
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

document.querySelectorAll(".e1, .e2").forEach(function(element) {
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

    