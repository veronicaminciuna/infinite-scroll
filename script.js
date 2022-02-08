const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArr = [];

// Unsplash API
const count = 10;
const apiKey = 'wSjR-G0YCs0FtAVt--AIw389L0-Que9X6Xs1ks8UdkE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Create elements for links & photos, add to DOM
function displayPhotos() {
    //run function for each obj in photoArr
    photosArr.forEach((photo)=> {
        //create <a> to ink to unsplash
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        //create, <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt', photo.alt_decription);
        img.setAttribute('title', photo.alt_decription);
        //put <img> inside <a>, then put both inside imageContainer Elem
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//Get photos from Unsplash API
async function getPhotos() {
    try {
       const response = await fetch(apiUrl);
       photosArr = await response.json();
       console.log(photosArr)
       displayPhotos();
    } catch(error) {
    }
}

getPhotos()