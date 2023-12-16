
/*====DISABLE HOVER ON TOUCH DEVICES=============
function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
  }
  
  if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;
  
        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;
  
          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) {}
  }
==================================================*/



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

const nav = document.querySelector(".Nav");
const navToggle = document.querySelector(".nav-toggle");
const navToggleClose = document.querySelector(".nav-toggle-close")

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        document.querySelector('#nav-toggle-close').style.display = 'block';
        document.querySelector('#nav-toggle').style.display = 'none';
    }

})


navToggleClose.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === 'true') {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        document.querySelector('#nav-toggle-close').style.display = 'none';
        document.querySelector('#nav-toggle').style.display = 'block';
    }    
})
const span = document.querySelectorAll('.span');
const tab = document.querySelectorAll('.tab');

/*DROPDOWN TAB*/
function dropdown(){
    document.querySelector('.tab1').classList.toggle('dropdown')
}
function dropdown2(){
    document.querySelector('.tab2').classList.toggle('dropdown')
}
function dropdown3(){
    document.querySelector('.tab3').classList.toggle('dropdown')
}

/*INNER-TAB DROPDOWN*/
function innerTabDropdown(){
    document.querySelector('.inner-tab-1').classList.toggle('inner-tab-active')
}
function innerTabDropdown2(){
    document.querySelector('.inner-tab-2').classList.toggle('inner-tab-active')
}
function innerTabDropdown3(){
    document.querySelector('.inner-tab-3').classList.toggle('inner-tab-active')
}
function innerTabDropdown4(){
    document.querySelector('.inner-tab-4').classList.toggle('inner-tab-active')
}

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