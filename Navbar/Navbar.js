
function adjustMenu() {
    const windowWidth = window.innerWidth;
    const navElement = document.querySelector('.nav');
    const navHeight = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Fixed navbar height
  
    if (windowWidth < 1200 && !document.querySelector('.menu')) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('menu');
      newDiv.innerHTML = `
        <div class="list">
          <ul>
            <li><a href="#section2"><span
              class="material-symbols-outlined"
              
              >person</span>ABOUT</a></li>
            <li><a href="#section3"><span
              class="material-symbols-outlined"
              
              >work</span>PROJECT</a></li>
            <li><a href="#section4"><span
              class="material-symbols-outlined"
             
              >task</span>EXPERIENCE</a></li>
            <li><a href="#section5"><span
              class="material-symbols-outlined"
              
              >Call</span>CONTACT</a></li>
          </ul>
        </div>
      `;
  
      if (navElement.nextSibling) {
        navElement.parentNode.insertBefore(newDiv, navElement.nextSibling);
      } else {
        navElement.parentNode.appendChild(newDiv);
      }
  
      newDiv.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
  
          if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    } else if (windowWidth >= 1200 && document.querySelector('.menu')) {
      document.querySelector('.menu').remove();
    }
  }
  
  adjustMenu();
  window.addEventListener('resize', adjustMenu);
  
  const links = document.querySelectorAll('.nav a[href^="#"], .menu a[href^="#"]');

const navbarHeight = window.innerHeight * 0.2;

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const targetSection = document.querySelector(href);

    if (targetSection) {
      const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});





