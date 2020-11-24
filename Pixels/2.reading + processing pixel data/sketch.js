let worldImg;

function preload() {
  worldImg = loadImage('../assets/world.png');
  // worldImg = loadImage('gatis.png');
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);

  for (let y = 0; y < worldImg.height; y++) {
    for (let x = 0; x < worldImg.width; x++) {
      let in_color = worldImg.get(x, y);
      let r = red(in_color);
      let g = green(in_color);
      let b = blue(in_color);

      let out_color = r ? color(255, 0, 0) : color(0,0,255);
        worldImg.set(x, y, out_color);
    }
  }

  worldImg.updatePixels();
  noSmooth();
  image(worldImg, 0, 0, width, height);
  noLoop();
}