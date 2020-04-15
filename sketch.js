let w; //sketch width
let h; //sketch height

let buttonA; //startButton converted
let buttonB;
let buttonC; 

let currentNode = 0; //index within narrative array currently at

let narrative; //stores array from JSON

let backImg; //background image
let character; //assigned based on user choice
let charImg1; //image path
let charImg2; //image path
let charImg3; //image path

let backImg1; 
let backImg2;
let backImg3;

let click;
let bgm;

let size; 

function preload() {
  backImg = loadImage('assets/start.jpg');
  // !!! files used for characters are test files only now 
  charImg1 = loadImage('assets/1.png');  
  charImg2 = loadImage('assets/doctor.png');
  charImg3 = loadImage('assets/3.png');
  backImg1 = loadImage('assets/backImg1.jpg');
  backImg2 = loadImage('assets/backImg2.png');
  backImg3 = loadImage('assets/backImg3.jpg');

  loadJSON('narrative.json', function (loadedData) {
    narrative = loadedData;
  })

  bgm = loadSound('assets/love.mp3');
  click = loadSound('assets/Mouse-Click-02-c-FesliyanStudios.com.mp3');
}

function setup() {
  console.log(narrative);
  console.log(currentNode);
  let canvas = createCanvas(windowWidth, windowHeight*0.995);

  w = width; //width of sketch canv
  h = height; //height of sketch canv

  // link canvas to container in HTML 
  canvas.parent('sketch-container'); // allows css edits

  background(backImg);

  addText();

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
  background(backImg);
  character.resize(size[0], size[1]);
  image(character, w/4.5, h*0.3); //character image
  
}

function startClick() { 
  currentNode ++;
  addText();// update scene Text

  let title = document.getElementById('title');
  title.remove();

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

  if (currentNode == 1) { 
    character = charImg1; // assign character image 
    size = [350, 0];
    backImg = backImg1;
  }
  currentNode = narrative[currentNode].buttonRoute[0];
  updateSketch();
  addText();
  inputOption(currentNode);
}

function clickBtnB() {
  if (currentNode == 1) { 
    character = charImg2; // assign character image 
    size = [350, 0];
    backImg = backImg2;
  }
  currentNode = narrative[currentNode].buttonRoute[1];
  updateSketch();
  inputOption(currentNode);
  addText();
}

function clickBtnC() {
  if (currentNode == 1) { 
    character = charImg3; // assign character image 
    size = [400, 0];
    backImg = backImg3;
  }
  currentNode = narrative[currentNode].buttonRoute[2];
  updateSketch();
  inputOption(currentNode);
  addText();
}
