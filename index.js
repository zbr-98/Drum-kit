
// by clicking
var numOfdrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfdrums;i++){
      document.querySelectorAll("button")[i].addEventListener("click",function (){
             var buttonInnerHtml=this.innerHTML;
            makeSound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml)
      });
}

// by pressing key
document.addEventListener("keydown",function(event){

      makeSound(event.key);
      buttonAnimation(event.key);
});


function makeSound(key){
      switch(key){
            case "w":
                  var tom1=new Audio("/sounds/tom-1.mp3");
                  tom1.play();
                  break;
            case "a":
                  var tom2=new Audio("/sounds/tom-2.mp3");
                  tom2.play();
                  break;
            case "s":
                  var tom3=new Audio("/sounds/tom-3.mp3");
                  tom3.play();
                  break;
            case "d":
                  var tom4=new Audio("/sounds/tom-4.mp3");
                  tom4.play();
                  break;
            case "j":
                  var crash=new Audio("/sounds/crash.mp3");
                  crash.play();
                  break;
            case "k":
                  var snare=new Audio("/sounds/snare.mp3");
                  snare.play();
                  break;
            case "l":
                  var kick=new Audio("/sounds/kick-bass.mp3");
                  kick.play();
                  break;

            default:
                  console.log("Wrong input!!");
       }
}
function buttonAnimation(currKey){
      
      // adding pressed class to the w,a,s.. classes on clicking these keys for 300ms
      document.querySelector("."+currKey).classList.add("pressed");

      setTimeout(function(){
            document.querySelector("."+currKey).classList.remove("pressed");},300)
}




