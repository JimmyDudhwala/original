// window.addEventListener('load', function() {
//     if ('scrollRestoration' in history) {
//         history.scrollRestoration = 'manual';
//     }
//     window.scrollTo(0, 0);

    
// });


const customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (event) => {
  customCursor.style.left = event.clientX + 'px';
  customCursor.style.top = event.clientY + 'px';
});

// document.body.style.overflow = 'hidden';

// var t0 = gsap.timeline();
  
//    const counter = document.querySelector('.counter');

//    // Use GSAP to animate the counter from 0 to 99
//    t0.to(counter, {
//      duration: 3, // Animation duration in seconds
//      innerHTML: 100, // Final value of the counter
//      roundProps: 'innerHTML', // Round the innerHTML property to the nearest whole number
//      "left":"12.5%" ,
//       // Easing function to use
//      onUpdate: function() {
//        counter.textContent = Math.round(counter.innerHTML); // Update the displayed counter value
       
//      },
     
//    });

//    t0.to(".line",{
//     duration: 3,
//     "--afterline": "100%",
//    }, "-=2.8")

//    t0.to(".counter",{
//     opacity: 0,
//     duration:0.5,
//    })

//    t0.to(".line div",{
//     opacity: 0,
//     duration:0.5,
//    }, "-=0.5")
   


// t0.to(".window1",{
//     y: -1000,
//     height:"0px",
//     duration: 3,
//     dispaly: "none",
    
//     onComplete: function() {
//         document.body.style.overflow = 'auto'; // Enable scrolling
//     }
// })

// t0.to(".window2",{
//     y: -1000,
//     height:"0px",
//     duration: 3,
//     dispaly: "none"
// }, "-=3")

// t0.to(".window3",{
//     y: -1000,
//     height:"0px",
//     duration: 3,
//     dispaly: "none"
// }, "-=3.0")

