 //This is my drawing app

var x = 200;
var y = 200;
var redness = 0;
var greenness = 0
var blueness = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {

  fill(redness, greenness, blueness);
  noStroke();
  ellipse(x, y, 50, 50);

  if (keyIsPressed === true && keyCode === RIGHT_ARROW) {
    x += 3;
  }
  if (keyIsPressed === true && keyCode === LEFT_ARROW) {
    x -= 3;
  }

  if (keyIsPressed === true && keyCode === DOWN_ARROW) {
    y += 3;
  }
  if (keyIsPressed === true && keyCode === UP_ARROW) {
    y -= 3;
  }
   if (keyIsPressed === true && keyCode === 82) {
   redness += 3;
}
    if (keyIsPressed === true && keyCode === 71) {
   greenness += 3;
    }
        if (keyIsPressed === true && keyCode === 65) {
blueness += 3;
} 
}