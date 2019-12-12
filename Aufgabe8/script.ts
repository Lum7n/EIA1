var beat: string[] = ["kick", "snare", "kick", "kick", "hihat"];
var index: number = 0;
var record: boolean = false;
var time: number;

window.addEventListener("load", function (): void {
    document.querySelector("#btn1").addEventListener("mousedown", function (): void { playSound("kick"); });
    document.querySelector("#btn2").addEventListener("mousedown", function (): void { playSound("snare"); });
    document.querySelector("#btn3").addEventListener("mousedown", function (): void { playSound("hihat"); });

    document.querySelector("#btn4").addEventListener("mousedown", function (): void { playSound("F"); });
    document.querySelector("#btn5").addEventListener("mousedown", function (): void { playSound("G"); });
    document.querySelector("#btn6").addEventListener("mousedown", function (): void { playSound("A"); });

    document.querySelector("#btn7").addEventListener("mousedown", function (): void { playSound("C"); });
    document.querySelector("#btn8").addEventListener("mousedown", function (): void { playSound("laugh-1"); });
    document.querySelector("#btn9").addEventListener("mousedown", function (): void { playSound("laugh-2"); });

    document.querySelector("#play").addEventListener("click", playBeat);
    document.querySelector("#mic").addEventListener("click", recordBeat);
    document.querySelector("#trash").addEventListener("click", deleteBeat);
});

function playSound(file: string): void {
    var sound: HTMLAudioElement = new Audio("sounds/" + file + ".mp3");
    sound.play();
    if (record == true) {
        beat.push(file);
    }
}

function playBeat(): void {
    if (document.querySelector("#play").classList.contains("fa-play")) {
        document.querySelector("#play").classList.remove("fa-play");
        document.querySelector("#play").classList.add("fa-pause");
        time = setInterval(y_beat, 400);
    } else {
        document.querySelector("#play").classList.remove("fa-pause");
        document.querySelector("#play").classList.add("fa-play");
        clearInterval(time);
    }
    function y_beat(): void {
        playSound(beat[index]);
        index++;
        if (index > (beat.length - 1)) //damit mehr als die unrsprünglischen 5 files in den Beat können
            index = 0;
    }
}

function recordBeat(): void {
    record = true;
}

function deleteBeat(): void {
    beat.length = 0;
}