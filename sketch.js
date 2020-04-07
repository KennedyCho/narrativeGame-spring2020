let w; 
let h;

let buttonA; 
let buttonB;

let currentNode = 0; //index within narrative array currently at

let narrative = [['nodeText', ['choice1', 'choice2'], [1, 2]],['nodeText1', ['choice1.1', 'choice2.1']],['nodeText2', ['choice1.2', 'choice2.2']]]

function setup() {
  let canvas = createCanvas(windowWidth-windowWidth/9, windowHeight/2); 

  w = width; //width of sketch canv
  h = height; //height of sketch canv

  // link canvas to container in HTML 
  canvas.parent('sketch-container'); // allows css edits

  background(0); 

}

function removeStart(){ // remove start button function
  let startButton = document.getElementById("start-button"); //assign button to var
  startButton.parentNode.removeChild(startButton); //identify the parent of startButton and delete child = startButton
}

function inputOption(currentNode) {
  buttonA.innerHTML = narrative[currentNode][1][0]; //update buttonA option
  buttonB.innerHTML = narrative[currentNode][1][1]; //update buttonB option
}

function addText() { //update scene text
  let msg = narrative[currentNode][0];
  textSize(50); 
  fill(255);
  text(msg, w/3, h/2);
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
  inputOption(currentNode);
  addText();
}

function clickBtnB() {
  currentNode = narrative[currentNode][2][1];
  inputOption(currentNode);
  addText();
}



