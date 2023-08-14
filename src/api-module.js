import axios from "axios"

export async function getPhotoData(q){
    let options = {
        key : '38607129-9108439e3ea986f49405f283d',
        q : q,
        image_type : 'photo',
        orientation : 'horizontal',
        safesearch : true,
        page : 1,
        per_page : 40
    }
     return await axios.get('https://pixabay.com/api', 
    {params: options}
)
.then(response => {
    return response
})
.catch(error => {
    console.log(error)
})
}
