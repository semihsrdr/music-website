for (var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(e){

        playChord(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(e){
    playChord(e.key);
    buttonAnimation(e.key);
});

function playChord(chord){
    
    switch (chord){
        case "a":
            var chordA=new Audio("sounds/a-chord.mp3");
            chordA.play();
        break;
        case "b":
            var chordB=new Audio("sounds/e-chord.mp3");
            chordB.play();
        break;
        case "c":
            var chordC=new Audio("sounds/c-chord.mp3");
            chordC.play();
        break;
        case "d":
            var chordD=new Audio("sounds/d-chord.mp3");
            chordD.play();
        break;
        case "e":
            var chordE=new Audio("sounds/e-chord.mp3");
            chordE.play();
        break;
        case "f":
            var chordF=new Audio("sounds/a-chord.mp3");
            chordF.play();
        break;
        case "g":
            var chordG=new Audio("sounds/g-chord.mp3");
            chordG.play();
        break;
        
        default:
    }
}
function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    },100);
}