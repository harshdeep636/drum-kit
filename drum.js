var size = document.querySelectorAll(".drum").length;
for (var i = 0; i < size; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    clickHandle(key);
    animation(key);
  });
}
// Adding audio according to alphabets

function clickHandle(name) {
  switch (name) {
    case "z":
      var z = new Audio("sounds/tom-1.mp3");
      z.play();
      break;
    case "x":
      var x = new Audio("sounds/tom-2.mp3");
      x.play();
      break;
    case "c":
      var c = new Audio("sounds/tom-3.mp3");
      c.play();
      break;
    case "v":
      var v = new Audio("sounds/tom-4.mp3");
      v.play();
      break;
    case "b":
      var b = new Audio("sounds/crash.mp3");
      b.play();
      break;
    case "n":
      var n = new Audio("sounds/kick-bass.mp3");
      n.play();
      break;
    case "m":
      var m = new Audio("sounds/snare.mp3");
      m.play();
      break;
    default:
      console.log(name);

  }
}

// Add keyboard stroke

document.addEventListener("keypress",function(event){
  var keyStroke=event.key;
  clickHandle(keyStroke);
  animation(keyStroke);
});

function animation(letter){
  document.querySelector("." + letter).classList.add("pressed");

  setTimeout( function(){
  document.querySelector("." + letter).classList.remove("pressed");
  },100);
}
