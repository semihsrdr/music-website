for (var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        console.log(this.innerText);
        buttonAnimation(this.innerText)
        playKey(this.innerText)
    });
}
document.addEventListener("keydown",function(e){
    console.log(e.key);
    buttonAnimation(e.key);
    playKey(e.key);
});

function playKey(key){
    
    switch (key){
        case "a":
            var keyA=new Audio("sounds/a.mp3");
            keyA.play();
        break;
        case "b":
            var keyB=new Audio("sounds/e.mp3");
            keyB.play();
        break;
        case "c":
            var keyC=new Audio("sounds/c.mp3");
            keyC.play();
        break;
        case "d":
            var keyD=new Audio("sounds/d.mp3");
            keyD.play();
        break;
        case "e":
            var keyE=new Audio("sounds/e.mp3");
            keyE.play();
        break;
        case "f":
            var keyF=new Audio("sounds/a.mp3");
            keyF.play();
        break;
        case "g":
            var keyG=new Audio("sounds/g.mp3");
            keyG.play();
        break;
        
        default:
    }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100)
}

