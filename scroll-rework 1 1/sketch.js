// let worldImg;

function preload() {
  // worldImg = loadImage('../Pixels/assets/world.png');
  // worldImg = loadImage('../Pixels/assets/world_100.png');
  // worldImg = loadImage('../Pixels/assets/moz.png');

}
// let aux;
let w;

function setup() {
  // createCanvas(500, 500);
  createCanvas(300, 300);
  // createCanvas(worldImg.width, worldImg.height);
  // aux = createImage(width,height);
  pixelDensity(1);
  stroke(255);
  background(0);
  w = width;
}
let t;

function draw() {
  t = frameCount%height;
  // background(0);
  // if (t > 0) {
  // copy(0, 0, w, w, 0, 1, w, w);

  rndPix(t);
  for (let x = w; x--;) {
    stroke((x + t ^ x - t) % 9 == 0 ? 255 : 0);
    point(x, 0);
  }
}


function rndPix(i) {
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      // pixels[], al ser un array solo puede accederse usando ints como indice, o sea que si para generar los indices se usan funciones que devuelvan floats -como las trigonometricas- se debe convertir el resultado en entero con floor() o alguna funcion similar 
      // var io = (x + (y * width)) * 4;
      var io = (x + (y) * width) * 4;
      // var id = (x + y * width) * 4;
      
      // var id = (x + (y+t) * width) * 4;
      // var id = (x + (height-y-t%height) * width) * 4;
      var id = (x + ((y+t)) * width) * 4;


      pixels[id + 0] = pixels[io + 0];
      pixels[id + 1] = pixels[io + 1];
      pixels[id + 2] = pixels[io + 2];
      pixels[id + 3] = pixels[io + 3];
    }
  }
  updatePixels();
  // rndPix(i);
}