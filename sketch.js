let w; 
let h;

let buttonA; 
let buttonB;

let currentNode = 0; //index within narrative array currently at

// research - convert to JSON?
let narrative = [['There are reports of a new virus.', ['choice1', 'choice2'], [1, 2]],['nodeText1', ['choice1.1', 'choice2.1'],[3, 4]],['nodeText2', ['choice1.2', 'choice2.2'],[5, 6]],['There are reports of a new virus', ['choice1', 'choice2'], [7, 8]],['There are reports of a new virus', ['choice1', 'choice2'], [9, 10]],['There are reports of a new virus', ['choice1', 'choice2'], [11, 12]]];

function setup() {
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

}

function removeStart(){ // remove start button function
  background(0);
  let startButton = document.getElementById("start-button"); //assign button to var
  startButton.parentNode.removeChild(startButton); //identify the parent of startButton and delete child = startButton
}

function inputOption(currentNode) {
  buttonA.innerHTML = narrative[currentNode][1][0]; //update buttonA option
  buttonB.innerHTML = narrative[currentNode][1][1]; //update buttonB option
}

function addText() { //update scene text  
  document.getElementById("sceneText").innerHTML = narrative[currentNode][0];
}

function updateSketch() {
  // @Linda add code here 
  // GOAL: update background image, character image and audio according to the currentNode
}

function startClick(){ //start button
  removeStart(); //removes start button
  addText(); 
  createButtons();
}

function createButtons() { //create choice A and B buttons
  buttonA = document.createElement("button"); // create button
  document.getElementById("decision-container").appendChild(buttonA); // add to html body
  buttonA.className = "decision-button";
  buttonA.id = "button-A";
  buttonA.addEventListener("click", clickBtnA);

  // buttonB
  buttonB = document.createElement("button"); // create button
  document.getElementById("decision-container").appendChild(buttonB); // add to html body
  buttonB.className = "decision-button";
  buttonB.id = "button-B";
  buttonB.addEventListener("click", clickBtnB);

  inputOption(currentNode); // add text inside button
}

function clickBtnA() {
  currentNode = narrative[currentNode][2][0];
  background(0);
  inputOption(currentNode);
  addText();
}

function clickBtnB() {
  currentNode = narrative[currentNode][2][1];
  background(0);
  inputOption(currentNode);
  addText();
}



