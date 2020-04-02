
function setup() {
  let canvas = createCanvas(windowWidth-windowWidth/9, windowHeight/2); 

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

function startClick(){
  
  removeStart(); //removes start button

  let buttonA = document.createElement("button"); // create button
  buttonA.innerHTML = "A"; // add text inside button
  document.body.appendChild(buttonA); // add to html body

}