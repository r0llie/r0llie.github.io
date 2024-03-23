let autoPlay = false;
myVideo.oncanplay = ()=>{
    setTimeOut(()=>{
        autoPlay = !myVideo.paused
    },1000)
}

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    video.play(); // Videoyu otomatik olarak başlat
});
