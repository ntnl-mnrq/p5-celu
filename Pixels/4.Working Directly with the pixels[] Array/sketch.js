let worldImg;

function preload() {
  // worldImg = loadImage('../assets/world.png');
  worldImg = loadImage('../assets/world_100.png');
  // worldImg = loadImage('../assets/moz.png');

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
  worldImg.loadPixels();
  for (let y = 0; y < worldImg.height; y++) {
    for (let x = 0; x < worldImg.width; x++) {
      // let in_color = worldImg.get(x, y);
      let in_color = getQuick(worldImg, x, y);

      let dot_size = lightness(in_color)/255*spacing*2;
      ellipse(x * spacing + spacing * 0.5, y * spacing + spacing * 0.5, dot_size, dot_size);
      //worldImg.set(x, y, out_color);
    }
  }
  
  worldImg.updatePixels();
  // noSmooth();
  // image(worldImg, 0, 0, width, height);
  noLoop();
}


// returns the RGBA values of the pixel at x, y in the img's pixels[] array
// returns values as an array [r, g, b, a]
// use instead of p5s built in .get(x,y), for much better performance (more than 1000x better in many cases)
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the canvas

function getQuick(img, x, y) {
  var i = (y * img.width + x) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 2],
    img.pixels[i + 1],
    img.pixels[i + 3]
  ];
}