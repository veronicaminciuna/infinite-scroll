const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArr = [];

// Unsplash API
const count = 30;
const apiKey = 'wSjR-G0YCs0FtAVt--AIw389L0-Que9X6Xs1ks8UdkE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//check if all images were loaded
function imageLoaded() {
    console.log('image loaded');
    imagesLoaded++;
    if(imagesLoaded === totalImages) {
        ready = true;
        console.log('ready=', ready);
    }
}


function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

//Create elements for links & photos, add to DOM
function displayPhotos() {
    totalImages = photosArr.length;
    console.log('total images', totalImages);
    //run function for each obj in photoArr
    photosArr.forEach((photo)=> {
        //create <a> to ink to unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        //create, <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
         img.addEventListener('load', imageLoaded);
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
       displayPhotos();
    } catch(error) {
    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
    }
})

getPhotos();