
for (var i=0;i<4;i++){
    document.querySelectorAll(".musical")[i].addEventListener("click", function(){
        document.querySelector("."+this.textContent).classList.add("pressed");
        link(this.textContent);
    });
}

