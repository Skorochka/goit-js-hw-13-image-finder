import NewApi from './js/apiService.js'
import templateMarkup from './templates/templateMarkup.hbs'

const newApi = new NewApi()

const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more-btn'),

}

refs.form.addEventListener('submit', onSearch),
refs.loadMore.addEventListener('click', onLoadMoreBtnClick)


function onSearch(e) {
    e.preventDefault()
    newApi.query = e.currentTarget.elements.query.value
    newApi.resetPage()
    newApi.fetchImg().then(data =>
    {
        clearGallery()
        appendMarkup(data)
        })
    
}


function appendMarkup(data) {
    refs.gallery.insertAdjacentHTML('beforeend', templateMarkup(data))
    
}

function onLoadMoreBtnClick() {
    newApi.fetchImg().then(data => {
        scroll();
        appendMarkup(data)
        })
    }



function clearGallery() {
    refs.gallery.innerHTML = ''
}

function scroll() {
    refs.gallery.scrollIntoView(
    {
        behavior: 'smooth',
        block: 'end',
    }
)
}








