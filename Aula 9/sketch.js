var box;

function setup() {
  createCanvas(500, 500);

  box = createSprite(200,200,20,20)

  background('#082640');
}

function draw() {
  
  if (keyDown('up')) {
    box.velocityY = -5
  }

  if (keyDown('space')) {
    background(rgb(random(0,255),random(0,255),random(0,255)));
  }

  drawSprites()
}

