var choice;
var key;

for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        choice = this.innerHTML;
        trigger(choice);
    });
}

document.addEventListener("keydown", function (event) {
    key = event.key;
    trigger(key);
});


function trigger(choice = null, key) {
    switch (choice) {
        case "w" || key == "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "a" || key == "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s" || key == "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "d" || key == "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case "j" || key == "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "k" || key == "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "l" || key == "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            break;
    }
}