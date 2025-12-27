function playChannel(url) {
    const player = document.getElementById("videoPlayer");
    player.src = url;
    player.play();
}