

/*****NAVIGATION BAR*****/
/**const nav = document.querySelector(".Nav");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }

    else if (visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

    console.log(visibility);
})**/

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitionend", function() {
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > a, .dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});

// Add event listener to remove "active" class when clicking outside
document.addEventListener('click', function(e) {
    const isClickInsideMenu = menu.contains(e.target);
    if (!isClickInsideMenu) {
        const allDropdowns = menu.querySelectorAll('.dropdown');
        allDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});
/*****NAVIGATION BAR END*****/



/*****SWIPER JS*****/

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: 'true'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1, 
        },
        520:{
            slidesPerView: 2, 
        },
        920:{
            slidesPerView: 3, 
        },
    }
  });
/*****SWIPER JS*****/

/*****ABOUT-US TABS*****/
const tabBtn = document.querySelectorAll('.tab-btn');
tabBtn.forEach(tabBtn => {
    tabBtn.addEventListener('click', () =>{
        document.querySelector('.active-tab').classList.remove('active-tab');
        tabBtn.classList.add('active-tab');

        tabBtn.animate([
            {transform: 'scale(.9)'},
            {transform: 'scale(1)'}
        ], {
            duration:1000,
            easing: 'ease-out'
        });
    });
});

function tab1() {
    document.querySelector('#tab-1').style.display = 'block';
    document.querySelector('#tab-2').style.display = 'none';
    document.querySelector('#tab-3').style.display = 'none';
    
}

function tab2() {
    document.querySelector('#tab-2').style.display = 'block';
    document.querySelector('#tab-1').style.display = 'none';
    document.querySelector('#tab-3').style.display = 'none';
    
}

function tab3() {
    document.querySelector('#tab-3').style.display = 'block';
    document.querySelector('#tab-1').style.display = 'none';
    document.querySelector('#tab-2').style.display = 'none';
    
}



/*****TEAM POP-UP*****/
function toggleTmPopup(){
    document.getElementById("Tmpopup-1").classList.toggle("active-popup");
}

function toggleTmPopup2(){
    document.getElementById("Tmpopup-2").classList.toggle("active-popup");
}

function toggleTmPopup3(){
    document.getElementById("Tmpopup-3").classList.toggle("active-popup");
}

/*****ADVISORY BOARD POP-UP*****/
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active-popup");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active-popup");
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active-popup");
}