function setup() {
  //create canvas
  createCanvas(800, 800);
}

function draw() {
  //set black background
  background(0);
  
  //draw red rectangle
  fill(221, 1, 0);
  rect(200, 0, 800, 600);
  
  //draw white rectangles
  fill(255, 255, 255);
  rect(0, 0, 188, 288);
  rect(0, 312, 188, 288);
  rect(200, 612, 476, 188);
  rect(688, 612, 112, 82);
  
  //draw blue rectangle
  fill(34, 80, 149);
  rect(0, 612, 188, 188);
  
  //draw yellow rectangle
  fill(250, 201, 1);
  rect(688, 718, 112, 82);
}

//Modrian Colour Palette from https://www.color-hex.com/color-palette/25374