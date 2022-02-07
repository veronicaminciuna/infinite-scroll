// Unsplash API
const count = 10;
const apiKey = 'wSjR-G0YCs0FtAVt--AIw389L0-Que9X6Xs1ks8UdkE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//Get photos from Unsplash API
async function getPhotos() {
    try {
       const response = await fetch(apiUrl);
       const data = await response.json();
       console.log(data) 
    } catch(error) {
    }
}

getPhotos()