let w; 
let h;

let buttonACount = 0; 

function setup() {
  let canvas = createCanvas(windowWidth-windowWidth/9, windowHeight/2); 

  w = width; //width of sketch canv
  h = height; //height of sketch canv

  // link canvas to container in HTML 
  canvas.parent('sketch-container'); // allows css edits

  background(0); 

}

function draw() {
  // put drawing code here
  
}

// remove start button function
function removeStart(){
  let startButton = document.getElementById("start-button"); //assign button to var
  startButton.parentNode.removeChild(startButton); //identify the parent of startButton and delete child = startButton
}


function addText() {
  let msg = "Hey there!";
  textSize(50); 
  fill(255);
  text(msg, w/3, h/2);


}

function startClick(){
  
  removeStart(); //removes start button

  addText();

  let buttonA = document.createElement("button"); // create button
  buttonA.innerHTML = "A"; // add text inside button
  document.getElementById("decision-container").appendChild(buttonA); // add to html body

  buttonA.className = "decision-button";
  buttonA.id = "button-A";

  buttonA.addEventListener("click", clickBtnA);

  // buttonB
  let buttonB = document.createElement("button"); // create button
  buttonB.innerHTML = "B"; // add text inside button
  document.getElementById("decision-container").appendChild(buttonB); // add to html body

  buttonB.className = "decision-button";
  buttonB.id = "button-B";

  buttonB.addEventListener("click", clickBtnB);

}

function clickBtnA() {
  console.log("A"); 

  buttonACount += 1; 
}

function clickBtnB() {
  console.log("B");
}




// testing array - pls don't delete - incomplete
let buttonText = []; 

for (let index = 0; index < 4; index++) {
  buttonText.push([]);
  let x = Math.pow(2, index);
  for (let innerIndex = 0; innerIndex < x; innerIndex++) {
    buttonText[index].push(["A", "B"]);
  }
  
}
console.log(buttonText);
