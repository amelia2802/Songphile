import { musicData } from './data.js';

const emotionRadios = document.getElementById('emotion-radios');
const songModalInner = document.getElementById('song-modal-inner');
const songModal = document.getElementById('song-modal');
const songModalCloseBtn = document.getElementById('song-modal-close-btn');
const toggleBtn = document.getElementById("toggle")

toggleBtn.addEventListener('click', () => {
    const menu = document.querySelector(".menu");
    const header = document.querySelector(".header");
    const radios = document.querySelectorAll(".radio");

    // Check the current background color and toggle between two states
    if (menu.style.backgroundColor === "rgb(255, 249, 238)") {
        // Reset to original colors
        menu.style.backgroundColor = "";
        document.querySelector(".logo-text").style.color = "";
        header.style.backgroundColor = "";
        radios.forEach(radio => radio.style.color = "");  // Reset each .radio element's color
        toggleBtn.innerText = "🌙";  // Dark mode icon
    } else {
        // Set to light mode colors
        menu.style.backgroundColor = "rgb(255, 249, 238)";
        document.querySelector(".logo-text").style.color = "black";
        header.style.backgroundColor = "rgb(246, 229, 215)";
        radios.forEach(radio => radio.style.color = "black");  // Apply color to each .radio element
        toggleBtn.innerText = "☀️";  // Light mode icon
    }
});





// Event listeners
emotionRadios.addEventListener('change', highlightCheckedOption);
songModalCloseBtn.addEventListener('click', closeModal);

function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName('radio');
    for (let radio of radios) {
        radio.classList.remove('highlight');
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function closeModal() {
    songModal.style.display = 'none';
}

// Make playSong a global function by attaching it to window
window.playSong = function(emotion) {
    const songsArray = musicData.filter(song => song.genre.includes(emotion));
    const songObject = songsArray.length === 1 ? songsArray[0] : songsArray[Math.floor(Math.random() * songsArray.length)];

    songModalInner.innerHTML = `
        <iframe draggable="true" class="mood-song" src="${songObject.url}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
    `;
    songModal.style.display = 'flex';
};

function getEmotionsArray(songs) {
    const emotionsArray = [];
    for (let song of songs) {
        for (let emotion of song.genre) {
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion);
            }
        }
    }
    return emotionsArray;
}

function renderEmotionsRadios(songs) {
    let radioItems = ``;
    const emotions = getEmotionsArray(songs);
    
    for (let emotion of emotions) {
        const matchingSong = songs.find(song => song.genre.includes(emotion));
        const imageUrl = matchingSong.img || 'default-image.jpg';
        
        radioItems += `
        <div class="radio" id="${emotion}-radio">
            <section class="album-img">
                <img src="${imageUrl}" alt="${emotion} image" />
            </section>
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
            <button class="play-song-btn" onclick="playSong('${emotion}')">▶</button>
        </div>`;
    }

    emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(musicData);
