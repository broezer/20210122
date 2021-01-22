// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(247, 107, 107);
  c2 = color(198, 240, 255);
  c3 = color(3,1,82);
}


function draw() {

    setGradient( 0, 0, width, height * (2/3), c2, c2, c2, Y_AXIS)
    setGradient( 0 , height * (2/3), width, height * (1/3), c2, c3, c1, Y_AXIS);
  

    rotate(HALF_PI);
    setCircle( width * 0.325, -height * 0.5 , width * 0.52 , c1,c3,c2);
    
    
    save("20210122.png");
    noLoop();
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - (h/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - (h/2) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      //stroke(c);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - (h/2)){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      } 
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, (x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2) , x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      if(i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + w);
      }else{
        stroke(p);
        line(i, y, i, y + w);
      }
      
    }
  }
}


function setCircle(x, y, d, c1, c2, c3){
  noFill();
  noStroke();
  let u = 100;
  //translate( d*0.6, d*0.6);
  for (let i=0; i<u; i++) {
   let col = lerpColor(c1, c2, (i/u)*2 );
   let col02 = lerpColor(c2, c3, ((i - (u/2))/(u/2)));
   let a = lerp(PI, 0, i/u);
   
   
   if ( i <= u/2){
      fill(col);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }else{
      fill(col02);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }   

   }

}
