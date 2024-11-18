let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  }

  )};

document.addEventListener("keypress", function(event){
 makeSound(event.key)
 buttonAnimation(event.key)
  
  
});
function makeSound (key) {
  switch (key) {
    case "w":
      let crash = new Audio ('sounds/crash.mp3');
      crash.play();
    break;

    case "a":
      let kickBass = new Audio ('sounds/kick-bass.mp3');
      kickBass.play();
     break;

    case "s":
      let snare = new Audio ('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      let tom = new Audio ('sounds/tom-1.mp3');
      tom.play();
      break;

    case "j":
      let tom2 = new Audio ('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      let tom3= new Audio ('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio ('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      
}
} 
function buttonAnimation (currentkey){

  let activebutton = document.querySelector("."+ currentkey)
  activebutton.classList.add("pressed")
  setTimeout(function() {
    activebutton.classList.remove("pressed")
  }, 250);
}