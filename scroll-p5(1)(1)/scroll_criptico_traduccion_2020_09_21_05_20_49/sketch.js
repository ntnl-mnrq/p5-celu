
function setup() {
   createCanvas(720, 720);
   background(220,220,100);
 }

function draw() {
  let w = width;
  let t = frameCount; 
  if (t > 1) {
    //copia toda la pantalla y la baja un pixel
    copy(0, 0, w, w, 0, 1, w, w);
    //copy(0, 0, w, w, sin(t*0.1), 1, w, w);
    for (let x = w; x > 0; x--) {
      //determina cuál punto es blanco y cual negro
      //stroke((x+t^x-t)%9==0?255:0);
      //stroke(random(255));
      stroke(sin(t*0.1)>sin(x*0.1)?255:0);
      ////stroke(tan(t*0.1)>tan(x*0.1)?255:0);
      //stroke(sin(t*0.1)>tan(x*0.1)?255:0);
      stroke(tan(t*0.1)>sin(x*0.1)?255:0);
      /*stroke(
        tan(t*0.1)>sin(x*0.1)?255:0,
        sin(t*0.1)>tan(x*0.1)?255:0,
        255);*/
      /*
        stroke(
        255,0,0,
        abs(tan(t*0.1)*sin(x*0.1)));
        point(x, 0);
        */
       /* stroke(
        0,255,0,
        sin(t*0.1)>sin(x*0.1)?255:0);
        point(x, 0);*/
        
       /*
        stroke(
        0,0,255,
        abs(sin(t*0.1)*tan(x*0.1)));
        point(x, 0);
        */
    
      point(x, 0);
    }
  }
}



// draw=_=>{
//   t=frameCount;
//   t>1?copy(0,0,w,w,0,1,w,w):createCanvas(w=720,w);
//   for(x=w;x--;){
//     stroke((x+t^x-t)%9?0:w)+point(x,0);
//   }
// }
