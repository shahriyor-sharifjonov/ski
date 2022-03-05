import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

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


