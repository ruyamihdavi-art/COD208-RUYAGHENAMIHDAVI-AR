let numSquares;
let clBlack;
let clWhite;
let squareSize;
let arcColor;

function setup() {
  createARCanvas(240, 240, P2D, { scale: 2, markerId: 18 });
  noStroke();

  numSquares = 5;
  clBlack = color(0);
  clWhite = color(255);

  squareSize = width / numSquares;

  angleMode(DEGREES);

  arcColor = color(random(255), random(255), random(255));

  p5SimpleAREnableGesture(true);
}

function draw() {
  clear(); // keep camera visible

  // total face size
  let faceSize = squareSize * 2;

  push();

  // center drawing on marker
  translate(width / 2 - faceSize / 2, height / 2 - faceSize / 2);

  // optional small floating animation
  let bounce = sin(frameCount * 2) * 3;
  translate(0, bounce);

  // First row
  fill(clWhite);
  rect(0, 0, squareSize, squareSize);

  fill(arcColor);
  arc(0, squareSize, squareSize * 2, squareSize * 2, 270, 360);

  fill(clWhite);
  rect(squareSize, 0, squareSize, squareSize);

  fill(arcColor);
  arc(squareSize * 2, squareSize, squareSize * 2, squareSize * 2, 180, 270);

  // Second row
  fill(clWhite);
  rect(0, squareSize, squareSize, squareSize);

  fill(arcColor);
  arc(squareSize, squareSize, squareSize * 2, squareSize * 2, 90, 180);

  fill(clWhite);
  rect(squareSize, squareSize, squareSize, squareSize);

  fill(arcColor);
  arc(squareSize, squareSize, squareSize * 2, squareSize * 2, 0, 90);

  // Face details
  fill(clBlack);
  circle(squareSize, squareSize * 1.75, 12);
  circle(squareSize * 0.5, squareSize * 1.4, 12);
  circle(squareSize * 1.5, squareSize * 1.4, 12);

  pop();
}

// change color each time you press
function mouseClicked() {
  arcColor = color(random(255), random(255), random(255));
 } 
