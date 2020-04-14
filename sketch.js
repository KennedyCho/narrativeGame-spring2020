let w; 
let h;

let buttonA; 
let buttonB;
let buttonC; //startButton

let currentNode = 0; //index within narrative array currently at

let narrative; 

function preload() {
  loadJSON('narrative.json', function(loadedData){
    narrative = loadedData;
  })
}

function setup() {
  console.log(narrative);
  
  let canvas = createCanvas(windowWidth, windowHeight*0.7); 

  w = width; //width of sketch canv
  h = height; //height of sketch canv

  // link canvas to container in HTML 
  canvas.parent('sketch-container'); // allows css edits

  let padding = w*0.03
  background(0); 
  let startMsg = "The COVID-19 outbreak has forced many to adapt quickly under difficult circumstances; however, we believe this communal experience offers more than just pain and suffering. During difficult times we can also be sure to see the good in humanity as well as the bad. This project will depict the reality of some individuals (based on written first hand accounts) during the COVID-19 pandemic. By sharing these stories, we hope to encourage the public to develop a larger understanding of the current situation and their role within it."
  textSize(w/70); 
  textAlign(CENTER);
  fill(255);
  text(startMsg, padding, h*0.7, w-padding*2, h);

  document.getElementById("start-button").addEventListener("click", startClick);
}


function inputOption(currentNode) {
  console.log(currentNode);
  
  buttonA.innerHTML = narrative[currentNode].buttonText[0]; //update buttonA option
  buttonB.innerHTML = narrative[currentNode].buttonText[1]; //update buttonB option
  buttonC.innerHTML = narrative[currentNode].buttonText[2]; //update buttonC option
}

function addText() { //update scene text  
  document.getElementById("sceneText").innerHTML = narrative[currentNode].sceneText;
}

function updateSketch() {
  // @Linda add code here 
  // GOAL: update background image, character image and audio according to the currentNode
}

function startClick() { 
  addText();// update scene Text

  // buttonA
  buttonA = document.getElementById("start-button");
  buttonA.removeEventListener("click", startClick)
  buttonA.addEventListener("click", clickBtnA)

  //create choice A and B buttons
  buttonB = document.createElement("button"); // create button
  document.getElementById("decision-container").appendChild(buttonB); // add to html body
  buttonB.className = "decision-button";
  buttonB.id = "button-B";
  buttonB.addEventListener("click", clickBtnB);

  // buttonB
  buttonC = document.createElement("button"); // create button
  document.getElementById("decision-container").appendChild(buttonC); // add to html body
  buttonC.className = "decision-button";
  buttonC.id = "button-C";
  buttonC.addEventListener("click", clickBtnC);

  inputOption(currentNode); // add text inside button
}

function clickBtnA() {
  currentNode = narrative[currentNode].buttonRoute[0];
  inputOption(currentNode);
  addText();
}

function clickBtnB() {
  currentNode = narrative[currentNode].buttonRoute[1];
  inputOption(currentNode);
  addText();
}

function clickBtnC() {
  currentNode = narrative[currentNode].buttonRoute[2];
  inputOption(currentNode);
  addText();
}


