import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

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
    window.addEventListener('click', e => {
        if(content.classList.contains('active')){
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