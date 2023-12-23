const images = [
    "whiteChapel3.jfif",
    "whiteChapel4.jfif",
    "venice2.jfif",
    "venice3.jfif",
    "venice4.jfif",
]
let imgIndex = 0
document.getElementById('blendImage').addEventListener('click', function () {
    var image = this;
    var currentImage = image.src;

    // URL of the second image
    var newImageURL = `images/${images[imgIndex]}`;
    imgIndex++
    if (imgIndex >= images.length) { imgIndex = 0 }

    // Change the opacity to 0
    image.style.opacity = 0.2;

    // After a short delay, change the image source and reset opacity to 1
    setTimeout(function () {
        image.src = newImageURL;
        image.style.opacity = 1;
    }, 500); // 500ms delay matches the transition time
});


function createRaindrop(iconClass) {
    const raindrop = document.createElement('li');
    raindrop.style.width = "40px";
    raindrop.style.height = "40px";
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.innerHTML = `<i class="fa-solid lead text-light fs-1 img-fluid shadow ${iconClass}" style='scale="2"'></i>`;
    document.querySelector('.rain-list').appendChild(raindrop);
}

// Function to create multiple raindrops
function createRain() {
    // Adjust the number of raindrops as needed
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            // Specify the icon class for each raindrop
            const iconClasses = ['fa-bitcoin-sign', 'fa-coins', 'fa-heart-pulse'];
            const randomIcon = iconClasses[Math.floor(Math.random() * iconClasses.length)];
            createRaindrop(randomIcon);
        }, i * 100); // Adjust the delay between raindrops
    }
}

// Call the function to start the rain animation
createRain();
musicArray = ["break-the-fall.mp3", "woodkid-iron.mp3", "murdered-dancer.mp3"]
musicIndex = 0
function Music(next = true) {
    if (next) {
        imgIndex++
        musicIndex++
        if (musicIndex >= musicArray.length) { musicIndex = 0 }
        if (imgIndex >= images.length) { imgIndex = 0 }
    } else {
        imgIndex--
        musicIndex--
        if (imgIndex<0){imgIndex=images.length-1}
        if (musicIndex<0){musicIndex=musicArray.length-1}
    }
    document.querySelector('audio').src = `assets/${musicArray[musicIndex]}`;
    document.getElementById('music-downloader').setAttribute('href', `assets/${musicArray[musicIndex]}`);
    document.getElementById('music-title').innerHTML = `${musicArray[musicIndex]}`;
    document.getElementById('music-cover').src = `images/${images[imgIndex]}`;
}