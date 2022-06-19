let time = 0;
let wave = [];

let slidernumber;

function setup() {
  var canv = createCanvas(windowWidth, 400);
  canv.parent("canvas");
  slidernumber = createSlider(1, 100, 1);
  slidernumber.parent("slider");
}

function draw() {
  background(0);
  translate(windowWidth / 3, 200);
  fill(255);
  textSize(32);
  text(`N = ${slidernumber.value()}`, -30, -120);
  let x = 0;
  let y = 0;

  for (let i = 0; i < slidernumber.value(); i++) {
    let prevx = x;
    let prevy = y;

    // let n = i* 2+1;  //square wave and trinagle wave
    // // let n = i+1 ;
    // numarator= pow((-1), (n^2-1)/2);
    // let radius = (75*8/sq(PI)) * ( numarator/ sq(n ));
    // if(n<20){
    // // console.log(numarator);
    // // console.log(n);
    // }
    // //i= Complex.I
    // /*sawtooth */
    // // if(n%2==0){
    // //   radius = -radius;
    // // }
    // // //
    let n = i * 2 + 1; //1,3,5,7...
    // let n = i + 1; //1,2,3,4...

    let radius = 55 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }

  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if (wave.length > 550) {
    wave.pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
