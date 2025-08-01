/* ========================= Typing Animation ========================= */
let typed = new Typed(".typing", {
  strings: [
    "",
    "Front-End Developer",
    "Back-end Developer",
    "MERN STACK Developer",  
    "SEO Expert",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* ========================= Aside ========================= */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //allSection[j].classList.add("back-section")
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  //console.log(sectionIndex)
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

document.addEventListener('mousemove', function(e) {
  const cursorOuter = document.querySelector('.custom-cursor-outer');
  const cursorInner = document.querySelector('.custom-cursor-inner');
  
  cursorInner.style.left = e.clientX + 'px';
  cursorInner.style.top = e.clientY + 'px';
  
  setTimeout(() => {
      cursorOuter.style.left = e.clientX + 'px';
      cursorOuter.style.top = e.clientY + 'px';
  }, 50);
});

// Function to show the popup
function showPopup() {
const popup = document.getElementById('download-popup');
popup.classList.add('show'); 

// Automatically close after 20 seconds
setTimeout(closePopup, 20000);
}


function closePopup() {
const popup = document.getElementById('download-popup');
popup.classList.remove('show');
}


function downloadApp() {
const downloadLink = document.getElementById('downloadLink');
downloadLink.click();
}


document.addEventListener("DOMContentLoaded", function () {
const closeButton = document.querySelector(".close-btn");
if (closeButton) {
  closeButton.addEventListener("click", closePopup);
}
});


setTimeout(showPopup, 5000);

/* Under development JS onclick start */

document.querySelectorAll('.comming-soon').forEach(card => {
  const link = card.querySelector('a');

  // Disable actual navigation
  link.removeAttribute('href');

  // Handle both tap and click
  card.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.add('clicked');
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 2500);
  });
});

// Testimonial code 
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    navigation: true,
    pagination: false,
    slideSpeed: 1000,
    singleItem: true,
    transitionStyle: "goDown",
    navigationText: ["", ""],
    autoPlay: false
  });
});
/* Under development JS onclick end */
