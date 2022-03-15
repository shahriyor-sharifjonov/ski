import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
  if(menuOpened){
    document.body.style.overflowY = "hidden"
  }else{
    document.body.style.overflowY = "auto"
  }
};

headerButton.onclick = menuToggle;

window.addEventListener('click', e => {
    if (
      menuOpened &&
      !e.composedPath().includes(headerButton) &&
      !e.composedPath().includes(headerMenu)
    )
      menuToggle();
})

document.querySelectorAll('.search').forEach(el => {
    // variables
    const button = el.querySelector('.search__toggle');
    const content = el.querySelector('.search__content');
    const list = el.querySelector('.search__list');
    const input = el.querySelector('.search__content input');
    const results = list.querySelectorAll('.search__list-item');

    // open content
    button.addEventListener('click', el => {
      content.classList.add('active');
    })

    // open list
    input.addEventListener('click', el => {
      list.classList.add('active');
    })

    // change input value
    results.forEach(el => {
      el.addEventListener('click', e => {
        const result = el.querySelector('.search__list-name').innerHTML;
        input.value = result;
        list.classList.remove('active');
      })
    })

    // keydown action
    document.addEventListener('keydown', function(e){
        if(list.classList.contains('active')){
            if(e.code == 'ArrowDown'){
                for(let i = 0; i < results.length; i++){
                    if(i !== results.length - 1){
                        if(results[i].classList.contains('active')){
                            results[i].classList.remove('active');
                            results[i += 1].classList.add('active');
                            const result = results[i].querySelector('.search__list-name').innerHTML;
                            input.value = result;
                        }
                    }
                }
            }
            if(e.code == 'ArrowUp'){
                for(let i = 0; i < results.length; i++){
                    if(i !== 0){
                        if(results[i].classList.contains('active')){
                            results[i].classList.remove('active');
                            results[i -= 1].classList.add('active');
                            const result = results[i].querySelector('.search__list-name').innerHTML;
                            input.value = result;
                        }
                    }
                }
            }
        }
    })

    // search disappears 
    document.addEventListener('click', e => {
        if(list.classList.contains('active') || content.classList.contains('active')){
            if(!e.composedPath().includes(el)){
                list.classList.remove('active');
                content.classList.remove('active');
            }
        }
    })
})


document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
    const span = dropdownBtn.querySelector('span');
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
    const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');
    const dropdownInput = dropdownWrapper.querySelector('.dropdown__input_hidden')
    
    dropdownBtn.addEventListener('click', function () {
      dropdownList.classList.toggle('dropdown__list_visible');
      this.classList.toggle('dropdown__button_active');
    });
    
    dropdownItems.forEach(function(listItem) {
      listItem.addEventListener('click', function (e) {
        dropdownItems.forEach(function(el) {
          el.classList.remove('dropdown__list-item_active');
        })
        e.target.classList.add('dropdown__list-item_active');
        span.innerText = this.innerText;
        dropdownInput.value = this.dataset.value;
        dropdownList.classList.remove('dropdown__list_visible');
      })
    })
    
    document.addEventListener('click', function (e) {
      if ( e.target !== dropdownBtn ){
        dropdownBtn.classList.remove('dropdown__button_active');
        dropdownList.classList.remove('dropdown__list_visible');
      }
    })
    
    document.addEventListener('keydown', function (e) {
      if( e.key === 'Tab' || e.key === 'Escape' ) {
        dropdownBtn.classList.remove('dropdown__button_active');
        dropdownList.classList.remove('dropdown__list_visible');
      }
    }) 
})





  

const breakpoint = window.matchMedia( '(min-width:993px)' );
let mySwiper;
const breakpointChecker = function() {
  if ( breakpoint.matches === true ) {
    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
    return;
  } 
  else if ( breakpoint.matches === false ) {
    return enableSwiper();
  }

};
const enableSwiper = function() {
  mySwiper = new Swiper(".intro__items-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Navigation],
    navigation: {
      nextEl: '.intro__items-next',
      prevEl: '.intro__items-prev'
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      }
    },
  });
}
breakpoint.addListener(breakpointChecker);
breakpointChecker();


document.querySelectorAll('.card').forEach(el => {
  const add = el.querySelector('.card__button-favorite');
  const remove = el.querySelector('.card__button-delete');
  add.addEventListener('click', e => {
    add.classList.remove('active');
    remove.classList.add('active');
  })
  remove.addEventListener('click', e => {
    remove.classList.remove('active');
    add.classList.add('active');
  })
})


let blog = new Swiper(".blog__carousel", {
  slidesPerView: 1,
  spaceBetween: 15,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.blog__next',
    prevEl: '.blog__prev'
  },
  pagination: {
    el: '.blog__pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },
});


let reviews = new Swiper(".reviews__carousel", {
  slidesPerView: 1,
  spaceBetween: 15,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev'
  },
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 32
    },
  },
});

$(document).ready(function() {
  $(".accordion-container > .accordion2 > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion2 > .accordion__content")
        .slideUp(200);
    } else {
      // $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      // $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});

$(document).ready(function() {
  $(".accordion-container > .accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion-container > .accordion > .accordion__content")
        .slideUp(200);
    } else {
      $(".accordion-container > .accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion-container > .accordion > .accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion-container > .accordion > .accordion__content")
        .slideDown(200);
    }
  });
});

document.querySelectorAll('.menu__md').forEach(el=>{
  const btn = el.querySelector('.menu__md-button');
  btn.addEventListener('click', click=>{
    btn.classList.toggle('active');
  })
})