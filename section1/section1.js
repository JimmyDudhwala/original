const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Function to update canvas size
function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;
}

updateCanvasSize(); // Initial canvas size setup
window.addEventListener('resize', updateCanvasSize); // Update on window resize

const radius = 500; // Size of the circle

// Initial circle position
let circle = { x: canvas.width / 2, y: canvas.height / 2 };

function drawCircle(x, y) {
    // Create a radial gradient
    const radialGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    radialGradient.addColorStop(0, 'rgba(231, 76, 60, 0.5)'); // Red color with transparency
    radialGradient.addColorStop(1, 'rgba(231, 76, 60, 0)'); // Transparent red
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the circle with the gradient
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = radialGradient;
    ctx.fill();
}
 
// Draw the initial circle
drawCircle(circle.x, circle.y);

// Update circle position on mouse move
document.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const targetX = event.clientX - rect.left;
    const targetY = event.clientY - rect.top;

    // Animate the circle's position using GSAP
    gsap.to(circle, {
        duration: 0.5, // Animation duration
        x: targetX,
        y: targetY,
        onUpdate: function() {
            drawCircle(circle.x, circle.y);
        }
    });
});

// Music box canvas setup
const musicCanvas = document.querySelector('.musicCanvas');
const music = document.querySelector('.audio');

let opt = {
    width: musicCanvas.offsetWidth,
    height: musicCanvas.offsetHeight,
    midY: musicCanvas.offsetHeight / 2,
    points: 80,
    stretch: 10,
    sinHeigth: 0,
    speed: -0.1,
    strokecolor: "black",
    strokeWidth: 1.5,
    power: 1.5,
    startX: 150,
    endX: musicCanvas.offsetWidth - 150
};

musicCanvas.width = opt.width * 2;
musicCanvas.height = opt.height * 2;
musicCanvas.style.width = opt.width;
musicCanvas.style.height = opt.height;

const ctx1 = musicCanvas.getContext('2d');
ctx1.scale(2, 2);

ctx1.strokeStyle = opt.strokecolor;
ctx1.lineWidth = opt.strokeWidth;
ctx1.lineCap = "round";
ctx1.lineJoin = "round";

let time = 0;

const render = () => {
    window.requestAnimationFrame(render);
    ctx1.clearRect(0, 0, opt.width, opt.height);
    time += 1;
    ctx1.beginPath();
    let strokeLength = opt.endX - opt.startX;

    for (let i = 0; i <= opt.points; i++) {
        let progress = i / opt.points;
        let increment = Math.sin(progress * Math.PI);

        const x = opt.startX + (strokeLength / opt.points) * i;
        const y = opt.midY + Math.sin((time * opt.speed + i) / opt.stretch) * opt.sinHeigth * increment;
        ctx1.lineTo(x, y);
    }

    ctx1.stroke();
};

render();

musicCanvas.addEventListener("click", () => {
    opt.power = !opt.power; // Toggle the power state

    if (opt.power) {
        music.play(); // Play the music if power is on
        TweenMax.to(opt, 1, { sinHeigth: 30, stretch: 2, ease: Power2.easeInOut });
    } else {
        music.pause(); // Pause the music if power is off
        TweenMax.to(opt, 1, { sinHeigth: 0, stretch: 10, ease: Power3.easeOut });
    }
});

