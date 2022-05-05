

var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-10');
}

function draw() {
  rect(mouseX, mouseY, 9, 6);
  stroke('#0000FF'); 

}

function windowResized () {
	resizeCanvas(windowWidth, windowHeight); 
}





