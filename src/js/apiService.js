export default class NewApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.API_KEY = `23195442-5432850696f797ca09021b772`;


    }

    fetchImg() {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.API_KEY}`)
    .then(r => r.json())
        .then(data => {
            this.incrementPage()
            return data.hits
        })
    .catch(err => console.log(err))
    }

    incrementPage() {
        this.page += 1;

    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
    
}






// Тебе интересны следующие свойства:

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок





// const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });