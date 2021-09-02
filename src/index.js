import '@pnotify/core/dist/BrightTheme.css'
import { error } from '../node_modules/@pnotify/core/dist/PNotify.js'
import fetchImg from './js/apiService.js'
import templateMarkup from './templates/templateMarkup.hbs'
import * as basicLightbox from 'basiclightbox'



export const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more-btn'),
    conteiner: document.querySelector('.largeImage-conteiner'),
    largeImg: document.querySelector('.largeImage-img'),
    closeBtn: document.querySelector('.close-btn')
}

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMoreBtnClick);
refs.gallery.addEventListener('click', onImgClick)

    
export let page = 1;
        let searchQuery

function onSearch(e) {
    e.preventDefault()
    searchQuery = e.currentTarget.elements.query.value;
    resetPage()
    clearGallery()
    e.currentTarget.elements.query.value = ''
    

    renderCollection()

}

function renderCollection() {
    fetchImg(searchQuery).then(data => {
        incrementPage()
        appendMarkup(data)
    }).catch(err => {
      error({ text: err })
    })
}

function incrementPage() {
        page += 1;
    }

function resetPage() {
        page = 1;
    }

function appendMarkup(data) {
    refs.gallery.insertAdjacentHTML('beforeend', templateMarkup(data))
}

function onLoadMoreBtnClick() {
    renderCollection()
    }

function clearGallery() {
    refs.gallery.innerHTML = ''
}

function onImgClick(e) {
    const url = e.target.dataset.img

    console.log(url)

    refs.conteiner.classList.add('is-open')
    refs.largeImg.setAttribute('src', url)
    
   
}

refs.closeBtn.addEventListener('click', onCloseBtnClick)

function onCloseBtnClick() {
    refs.conteiner.classList.remove('is-open')
        refs.largeImg.src = ''


}














