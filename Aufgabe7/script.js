window.addEventListener("load", function () {
    document.querySelector("#btn1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#btn2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#btn3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#btn4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#btn5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#btn6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#btn7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#btn8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#btn9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", start_beat);
});
function playSample(file) {
    var sound = new Audio("sounds/" + file);
    sound.play();
}
//function playSample(string): void {
//   var sound: HTMLAudioElement = new Audio(a"sounds/kick.mp3", b "sounds/A.mp3");
//    sound.play();}
function start_beat() {
    var beat = ["sounds/kick.mp3", "sounds/snare.mp3", "sounds/kick.mp3", "sounds/kick.mp3", "sounds/hihat.mp3"];
    var index = 0;
    var time = setInterval(play_beat, 400);
    function play_beat() {
        var sound = new Audio(beat[index]);
        sound.play();
        index++;
        if (index > 4)
            index = 0;
    }
    document.querySelector("#stop").addEventListener("mousedown", stop_beat);
    function stop_beat() {
        clearInterval(time);
    }
}
//# sourceMappingURL=script.js.map