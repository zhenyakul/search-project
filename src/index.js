import { getPhotoData } from "./api-module";

let input = document.querySelector('input')
let form = document.querySelector('.search-form')
let divGallery = document.querySelector('.gallery')

form.addEventListener('submit', optionalSubmit)

function optionalSubmit(event){
    event.preventDefault()
    getPhotoData(input.value).then(res => photoLoader(res.data.hits)).catch(error => console.log(error))
}


function photoLoader(data){
    data.map(photo => {
      let div = document.createElement('div')
      div.className = "photo-card"
      div.classList.add("card-style")
       div.innerHTML = `<img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b><br>
        ${photo.likes}
      </p>
      <p class="info-item">
        <b>Views</b><br>
        ${photo.views}
      </p>
      <p class="info-item">
        <b>Comments</b><br>
        ${photo.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b><br>
        ${photo.downloads}
      </p>
    </div>`
    divGallery.append(div)
    })
}

