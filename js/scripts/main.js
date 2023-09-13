var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction:'vertical',
  spaceBetweem: 20,
  watchSlidesProgress: true,
  breakpoints:{
    320:{
      direction:'horizontal',
      spaceBetweem: 20,
    },
    992:{
      direction:'vertical',
    }
  }
});

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
      swiper: slide_thumbnail,
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    }
  });

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');



allFilters.forEach((filter, index) => {
  filter.addEventListener('click', (event) =>{
    event.preventDefault();

    allFilters.forEach(item => {
      item.classList.remove('active');
    })
    tabPane.forEach(tab => {
      tab.classList.remove('active');
    })

    tabPane[index].classList.add('active')
    filter.classList.add('active');
  })
});

const buttonLogar =  document.querySelectorAll('.js-show-modal');
const buttonClose = document.querySelector('.js-btn-close');
const overlay = document.querySelector('.js-overlay');

buttonLogar[1].addEventListener('click', (event) =>{
  event.preventDefault();
  let html = document.documentElement;
  html.classList.add('show-modal');
}) 

buttonClose.addEventListener('click', (event) =>{
  event.preventDefault();
  let html = document.documentElement;
  html.classList.remove('show-modal');
})

overlay.addEventListener('click', (event) =>{
  event.preventDefault();
  let html = document.documentElement;
  html.classList.remove('show-modal');
}) 


const btnMenu = document.querySelectorAll('.js-btn-menu');
const MenuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) =>{
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    MenuSite.forEach(itemMenu =>{
      itemMenu.classList.remove('active')
      itemMenu.addEventListener('mouseleave', ()=>{
      itemMenu.classList.remove('active')
      btnMenu.forEach(itemBtn =>{
      itemBtn.classList.remove('active')
  
      })
      
      
      })
    })

    btnMenu.forEach(itemBtn =>{
      itemBtn.classList.remove('active')

    })

    btn.classList.add('active')
    MenuSite[index].classList.add('active');
  })
})




const btnMobile = document.getElementById('js-btn-mobile');
const overlayMenu = document.querySelector('.js-overlay');


function ShowMenuMobile(){
  document.documentElement.classList.add('show-menumobile');
}

function CloseMenuMobile(){
  document.documentElement.classList.remove('show-menumobile');
}

btnMobile.addEventListener('click', ShowMenuMobile);
overlayMenu.addEventListener('click', CloseMenuMobile);

const btnMenuMobile = document.querySelectorAll('.js-btn-menu-mobile');
const MenuSiteMobile = document.querySelectorAll('.js-menu');

btnMenuMobile.forEach((btn, index) =>{
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    MenuSiteMobile.forEach(itemMenu =>{
      itemMenu.classList.remove('active')
      itemMenu.addEventListener('mouseleave', ()=>{
      itemMenu.classList.remove('active')
      btnMenuMobile.forEach(itemBtn =>{
      itemBtn.classList.remove('active')
  
      })
      
      
      })
    })

    btnMenuMobile.forEach(itemBtn =>{
      itemBtn.classList.remove('active')

    })

    btn.classList.add('active')
    MenuSiteMobile[index].classList.add('active');
  })
})

btnMenuMobile[0].addEventListener('click', CloseMenuMobile)
btnMenuMobile[1].addEventListener('click', CloseMenuMobile)