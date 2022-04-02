//global variables
var clueHoldTime = 800;
const cluePauseTime = 333;
const nextClueWaitTime = 800;

var pattern = [];
var progress = 0;
var gamePlaying = false;
var volume = 0.5;
var tonePlaying = false;

var guessCounter = 0;
var mistake = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  mistake = 0;
  gamePlaying = true;
  clueHoldTime = 800;
  pattern = randomArray(6,5);
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

const freqMap = {
  1: 273,
  2: 397,
  3: 189,
  4: 476,
  5: 568
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  pattern 
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 18;
    delay += clueHoldTime; 
    delay += cluePauseTime;
    
  }
}
  
  function loseGame(){
    stopGame();
    alert("Game Over. You Lost.");
  }

function winGame(){
  stopGame();
  alert("Game Over. You Won!!");
}



function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  
  if(pattern[guessCounter] == btn){
    if (guessCounter == progress){
      if (progress == pattern.length -1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
     guessCounter++; 
    }
  }
  else{
    if (mistake < 2){
      mistake ++;
      var choice = 3-mistake;
      confirm(`You still have ${choice} strikes left!`);
      playClueSequence();
    }
    else{
    loseGame();
    }
  }
}