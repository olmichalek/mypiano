mySounds = [
  {sound: new Audio("C4.mp3"), isQuiet: false},
  {sound: new Audio("D4.mp3"), isQuiet: false},
  {sound: new Audio("E4.mp3"), isQuiet: false},
  {sound: new Audio("F4.mp3"), isQuiet: false},
  {sound: new Audio("G4.mp3"), isQuiet: false},
  {sound: new Audio("A4.mp3"), isQuiet: false},
  {sound: new Audio("B4.mp3"), isQuiet: false},
  {sound: new Audio("C5.mp3"), isQuiet: false},
]; 


document.addEventListener("keydown", e => {

  if (e.key === "a") {
    mySounds[0].sound.currentTime = 0;
    mySounds[0].sound.play();
  
  }

  if (e.keyCode === 83) {
    mySounds[1].sound.currentTime = 0;
    mySounds[1].sound.play();
   
  }

  if (e.keyCode === 68) {
    mySounds[2].sound.currentTime = 0;
    mySounds[2].sound.play();

  }

  if (e.keyCode === 70) {
    mySounds[3].sound.currentTime = 0;
    mySounds[3].sound.play();

  }

  if (e.keyCode === 71) {
    mySounds[4].sound.currentTime = 0;
    mySounds[4].sound.play();
   
  }

  
  if (e.keyCode === 72) {
    mySounds[5].sound.currentTime = 0;
    mySounds[5].sound.play();

  }

  if (e.keyCode === 74) {
    mySounds[6].sound.currentTime = 0;
    mySounds[6].sound.play();

  }

  if (e.keyCode === 75) {
    mySounds[7].sound.currentTime = 0;
    mySounds[7].sound.play();
   
  }

  if (e.keyCode === 16) {
  for (let i = 0; i < mySounds.length; i++) {
    mySounds[i].isQuiet = !mySounds[i].isQuiet; 
    if (mySounds[i].isQuiet) {
    mySounds[i].sound.volume = 0.3; 
    }
    else {
      mySounds[i].sound.volume = 1;
    }
  }
  }

}); 