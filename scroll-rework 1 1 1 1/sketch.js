// let worldImg;

function preload() {
  // worldImg = loadImage('../Pixels/assets/world.png');
  worldImg = loadImage('../Pixels/assets/world_100.png');
  // worldImg = loadImage('../Pixels/assets/moz.png');

}
// let aux;
let w;
let h;

function setup() {
  // createCanvas(500, 500);
  // createCanvas(300, 300);
  createCanvas(worldImg.width, worldImg.height);
  // aux = createImage(width,height);
  pixelDensity(1);
  stroke(255);
  background(0);
  w = width;
  h = height;
}
let t;

function draw() {
  t = frameCount;
  // background(0);
  // if (t > 0) {
  // copy(0, 0, w, w, 0, 1, w, w);

  // rndPix(0, 0, w, h, 0, 1, w, h);
  image(worldImg,0,0);
  rndPix(0, 0, w, h, w/2, t%h, w, h);
  // for (let x = w; x--;) {
  //   // stroke((x + t ^ x - t) % 9 == 0 ? 255 : 0);
  //   stroke((x + t ^ x - t) % x == 0 ? 255 : 0);
  //   point(x, 0);
  // }
}


function rndPix(xo0, yo0, xo1, yo1, xd0, yd0, xd1, yd1) {
  loadPixels();
  let xd=xd0;
  let yd=yd0;
  for (var yo = yo0; yo < yo1; yo++) {
      yd = yd<yd1 ? yo+yd0 : yo;   
    for (var xo = xo0; xo < xo1; xo++) {
      xd = xd<xd1 ? xo+xd0 : xo;
      // xd = map(xo, xo0, xo1, xd0, xd1);
      // yd = map(yo, yo0, yo1, yd0, yd1);
      // pixels[], al ser un array solo puede accederse usando ints como indice, o sea que si para generar los indices se usan funciones que devuelvan floats -como las trigonometricas- se debe convertir el resultado en entero con floor() o alguna funcion similar 
      // var io = (x + (y * width)) * 4;
      var io = (xo + (yo) * xo1) * 4;
      var id = (xd + (yd) * xd1) * 4;
      // var id = (x + y * width) * 4;

      // var id = (x + (y+t) * width) * 4;
      // var id = (x + (height-y-t%height) * width) * 4;

      pixels[id + 0] = pixels[io + 0];
      pixels[id + 1] = pixels[io + 1];
      pixels[id + 2] = pixels[io + 2];
      pixels[id + 3] = pixels[io + 3];
    }
  }
  updatePixels();
  // rndPix(i);
}