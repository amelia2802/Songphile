import { musicData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getSongBtn = document.getElementById('play-song-btn')
const songModalInner = document.getElementById('song-modal-inner')
const songModal = document.getElementById('song-modal')
const songModalCloseBtn = document.getElementById('song-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)

songModalCloseBtn.addEventListener('click', closeModal)

getSongBtn.addEventListener('click', renderSong)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal(){
    songModal.style.display = 'none'
}

function renderSong(){
    const songObject = getSingleSongObject()
    songModalInner.innerHTML =  `
        <iframe class="mood-song" src="${songObject.url}" allow="autoplay;encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        `
        
    songModal.style.display = 'flex'
    console.log(songObject.url)
}

function getSingleSongObject(){
    const songsArray = getMatchingSongsArray()
    
    if(songsArray.length === 1){
        return songsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random() * songsArray.length)
        return songsArray[randomNumber]
    }
}

function getMatchingSongsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        
        const matchingSongsArray = musicData.filter(function(song){
                return song.genre.includes(selectedEmotion)          
        })
        return matchingSongsArray 
    }  
}

function getEmotionsArray(songs){
    const emotionsArray = []    
    for (let song of songs){
        for (let emotion of song.genre){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(songs){
        
    let radioItems = ``
    const emotions = getEmotionsArray(songs)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(musicData)




