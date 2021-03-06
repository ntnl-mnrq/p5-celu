let worldImg;

function preload() {
  // worldImg = loadImage('../Pixels/assets/world.png');
  // worldImg = loadImage('../Pixels/assets/world_100.png');
  // worldImg = loadImage('../assets/moz.png');

}
let aux;
function setup() {
  // createCanvas(500, 500);
  // createCanvas(100, 300);
  createCanvas(300, 300);
  aux = createImage(width,height);
  pixelDensity(1);
  // console.log(width);
  // console.log(height);
  stroke(255);
  background(0);
}
let t;
 
function draw() {
 t = frameCount;
 background(0,5);
  // if (t > 0) {


  // noSmooth();
  // image(worldImg, 0, 0, width, height);
  // aux = copyFast(worldImg, 0, 5, 0, 0);
  // aux = copy(worldImg,0,0,worldImg.width,
  // worldImg.height,0,0,width,height);
  point(width*sin(t),0);
  rndPix();
  // image(aux, 0, 0, width, height);
  // }
  // noLoop();
}


// returns the RGBA values of the pixel at x, y in the img's pixels[] array
// returns values as an array [r, g, b, a]
// use instead of p5s built in .get(x,y), for much better performance (more than 1000x better in many cases)
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the canvas

function getPixel(img, x, y) {
  var i = (y * img.width + x) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 2],
    img.pixels[i + 1],
    img.pixels[i + 3]
  ];
}

function copyFast(img, xo, yo, xd, yd) {
  let out = createImage(img.width, img.height);
  let pixel;
  img.loadPixels();
  for (let y = yo; y < img.height; y++) {
    for (let x = xo; x < img.width; x++) {
      pixel = getPixel(img, x, y);
      for (let p = 0; p < 4; p++) {
        // let index = (x + y * width) * 4;
        let index = (x + y * img.width) * 4;
        out.pixels[index + p] = pixel[p];
      }
    }
  }
  out.updatePixels();
  return out;
}

function rndPix(img) {
  loadPixels();
  for (var y = 0; y < 1; y++) {
    for (var x = 0; x < width; x++) {
      var io = (x + y * width) * 4;
      // var id = (x + (y+t%height) * width) * 4;
      // var id = (x+t%width + (y+t%height) * width) * 4;
      var id = (x+floor(0.5*width*sin(t*0.01)) + (y+t%height) * width) * 4;
      // var id = (x + (y+floor(height*abs(sin(t*.1))) )* width) * 4;
      pixels[id+ 0] = pixels[io+0];
      pixels[id+ 1] = pixels[io+1];
      pixels[id+ 2] = pixels[io+2];
      pixels[id+ 3] = pixels[io+3];
    }
  }
  updatePixels();
}
// function rndPix() {
//   loadPixels();
//   for (var y = 0; y < height; y++) {
//     for (var x = 0; x < width; x++) {
//       var index = (x + y * width) * 4;
//       pixels[index + 0] = x;
//       pixels[index + 1] = 0;//random(255);
//       pixels[index + 2] = y;
//       pixels[index + 3] = 255;
//     }
//   }
//   updatePixels();
// }