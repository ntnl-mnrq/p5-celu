let worldImg;

function preload() {
  worldImg = loadImage('../assets/world.png');
  // worldImg = loadImage('../assets/world_100.png');
  // worldImg = loadImage('../assets/frida.jpg');
  
}

function setup() {
  createCanvas(500, 500);
  // createCanvas(300, 300);
}

function draw() {
  background(0, 50, 50);
  fill(200, 50, 50);
  noStroke();
  
  let spacing = width / worldImg.width;
  
  for (let y = 0; y < worldImg.height; y++) {
    for (let x = 0; x < worldImg.width; x++) {
      let in_color = worldImg.get(x, y);
      // let dot_size = lightness(in_color)/255*30;
      let dot_size = map(lightness(in_color),0,255,0,canvas.width/worldImg.width);
      ellipse(x*spacing+spacing*0.5, y*spacing+spacing*0.5, dot_size, dot_size);
      //worldImg.set(x, y, out_color);
    }
  }

  // worldImg.updatePixels();
  // noSmooth();
  // image(worldImg, 0, 0, width, height);
  noLoop();
}