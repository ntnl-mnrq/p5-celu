function setup() {
  createCanvas(300, 300);
  // colorMode(HSB);
  img = createImage(100, 100);
}
let z =0;
function draw() {
  background(0);

  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      var c = color(
        // map(x,0,img.width,0,360),
       /* map(x*y,0,img.width*img.height,0,360),
        map(x,0,img.width,0,100),
        100 */
       255 * noise(x*mouseX*0.001,y*mouseX*0.001,z)
        );
      img.set(x, y, c);
      z+=0.00001;
    }
  }

  img.updatePixels();
  noSmooth();
  image(img, 0, 0, width, height);
  //noLoop();
}