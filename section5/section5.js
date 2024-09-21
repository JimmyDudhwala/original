const textElementContainer = document.querySelector('.section5 .part2 .circle-container .text');
let fullTextContent = textElementContainer.textContent.trim();
fullTextContent = fullTextContent.replace(/\s+/g, ' '); // Replace multiple spaces and newlines with a single space

const circleRadius = 100; // Adjust radius as needed

function formatTextInArc(container, text, radius) {
  let arcHTML = '';
  const characters = text.split('');
  characters.push(''); // Add an empty character at the end

  const angleIncrement = 360 / characters.length;

  for (let index = 0; index < characters.length; index++) {
    const currentAngle = angleIncrement * index - 90; // Adjust starting angle to -90 degrees
    const radians = currentAngle * Math.PI / 180;
    const xPosition = radius * Math.cos(radians); // Use radians
    const yPosition = radius * Math.sin(radians); // Use radians
    const transformStyle = `translate(${xPosition}px, ${yPosition}px) rotate(${currentAngle + 90}deg)`;
    arcHTML += `<span style="position: absolute; transform: ${transformStyle};">${characters[index]}</span>`;
  }

  container.innerHTML = arcHTML;
}

formatTextInArc(textElementContainer, fullTextContent, circleRadius);

const rotationAnimation = gsap.to(textElementContainer, {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: "linear",
});

document.querySelector('.section5 .part2 .circle').addEventListener('mouseover', () => {
  rotationAnimation.play();
  textElementContainer.style.opacity = '1';
  textElementContainer.style.visibility = 'visible';
});

document.querySelector('.section5 .part2 .circle').addEventListener('mouseout', () => {
  rotationAnimation.pause();
  textElementContainer.style.opacity = '0';
  textElementContainer.style.visibility = 'hidden';
});

var path = "m 0 10 q 0 0 1800 0";
var fpath = "m 0 10 q 0 0 1800 0";
var string = document.querySelector('.subsec5');

string.addEventListener('mousemove', (e) => {
  var rect = string.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  path = `m 0 20 q ${x} ${y} 1800 0`;

  gsap.to('.subsec5 svg path', {
    attr: {
      d: path
    },
    duration: 0.3,
    ease: "power4.out"
  });
});

string.addEventListener('mouseleave', () => {
  gsap.to('.subsec5 svg path', {
    attr: {
      d: fpath
    },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
});