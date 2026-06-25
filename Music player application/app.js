const PlayIcon = document.getElementById("play")
const AudioFile = document.getElementById("audio")
let isAudioPlaying = false
function play()
{
    AudioFile.play() // play the audio
    // change play to pause
    PlayIcon.classList.replace("fa-play", "fa-pause")
}
function pause()
{
    AudioFile.pause() // play the audio
    // change pause to play
    PlayIcon.classList.replace("fa-pause", "fa-play")
}
PlayIcon.addEventListener("click", function()
{
   if(isAudioPlaying)
   {
        pause()
        isAudioPlaying = false
   }
   else
   {
        play()
        isAudioPlaying = true
   }
})


const songsDetails = [ 
    {
        image: "./IMAGES/image-2.jpg",
        songName: "DEF Song",
        singerName: "DEF Singer",
        audio: "./AUDIOS/music-2.mp3"
    },
    {
        image: "./IMAGES/image-3.jpg",
        songName: "PQR Song",
        singerName: "PQR Singer",
        audio: "./AUDIOS/music-3.mp3"
    },
    {
        image: "./IMAGES/image-4.jpg",
        songName: "XYZ Song",
        singerName: "XYZ Singer",
        audio: "./AUDIOS/music-4.mp3"
    }

]

// songsDetails[0] ==> {
//         image: "/IMAGES/image-2.jpg",
//         songName: "DEF Song",
//         singerName: "DEF Singer",
//         audio: "/AUDIOS/music-2.mp3"
// }

const SongH2 = document.getElementById("songname")
const SingerH3 = document.getElementById("singername")
const SongIMG = document.getElementById("songimage")

const ForwardButton = document.getElementById("forward")


let songIndex = 0

ForwardButton.addEventListener("click", function()
{
    SongIMG.src = songsDetails[songIndex].image
    SongH2.textContent = songsDetails[songIndex].songName
    SingerH3.textContent = songsDetails[songIndex].singerName
    AudioFile.src = songsDetails[songIndex].audio

    songIndex++

    // If the last song is completed ==> go to 0th song
    if(songIndex > songsDetails.length - 1)
    {
        songIndex = 0
    }

    
})
const BackwardButton = document.getElementById("backward");
BackwardButton.addEventListener("click", function()
{
    songIndex--

    // If the last song is completed ==> go to 0th song
    if(songIndex <0)
    {
         songIndex = songsDetails.length - 1
    }
    SongIMG.src = songsDetails[songIndex].image
    SongH2.textContent = songsDetails[songIndex].songName
    SingerH3.textContent = songsDetails[songIndex].singerName
    AudioFile.src = songsDetails[songIndex].audio
    
})


const DurationEle = document.getElementById("duration")
const CurrentTimeEle = document.getElementById("currentTime")
const MovableEle = document.getElementById("movable")


AudioFile.addEventListener("timeupdate", function(details)
{
    const audioCurrentTime = details.srcElement.currentTime
    const audioDuration = details.srcElement.duration

    // audioDuration ==> 125.05
    const audioDurationInMinutes = Math.floor(audioDuration / 60)
    
    let audioDurationInSeconds = Math.floor(audioDuration % 60)

    if(audioDurationInSeconds < 10)
    {
        audioDurationInSeconds = `0${audioDurationInSeconds}`
    }

    DurationEle.textContent = `${audioDurationInMinutes}:${audioDurationInSeconds}`

    const audioCurrentTimeInMinutes = Math.floor(audioCurrentTime / 60)
    
    let audioCurrentTimeInSeconds = Math.floor(audioCurrentTime % 60)

    if(audioCurrentTimeInSeconds < 10)
    {
        audioCurrentTimeInSeconds = `0${audioCurrentTimeInSeconds}`
    }

    console.log(audioCurrentTimeInMinutes, audioCurrentTimeInSeconds)

    CurrentTimeEle.textContent = `${audioCurrentTimeInMinutes}:${audioCurrentTimeInSeconds}`

    let audioPlayedPercentage = audioCurrentTime / audioDuration * 100

    MovableEle.style.width = `${audioPlayedPercentage}%`
    

})

const HeartEle=document.getElementById("heart")
HeartEle.addEventListener("click",function()
{
    HeartEle.style.color="red"


    localStorage.setItem(SongH2.textContent,SingerH3.textContent)
})

const ShuffleEle=document.getElementById("shuffle")
ShuffleEle.addEventListener("click",function()
{
    let songIndex=Math.floor(Math.random()*3)
    
    SongIMG.src = songsDetails[songIndex].image
    SongH2.textContent = songsDetails[songIndex].songName
    SingerH3.textContent = songsDetails[songIndex].singerName
    AudioFile.src = songsDetails[songIndex].audio

})