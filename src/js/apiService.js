import { page } from '../index.js'


export default function fetchImg(searchQuery) {
        const API_KEY = `23195442-5432850696f797ca09021b772`;
 return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`)
    .then(r => r.json()).then(promise => promise.hits)
}



