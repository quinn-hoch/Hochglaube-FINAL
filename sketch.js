//HOCHGLAUBE FINAL
/*pseudo code: 
1. start with vid 1 
  trigger word 
  > video slows down
  > image opacity changes/more pixelated
  > vid 2 starts playing over original*
  > every trigger word further alters the original video
2. vid 2 starts playing
  trigger word 
  > video slows down
  > image opacity changes/more pixelated
  > vid 3 starts playing over originals*
  > every trigger word further alters the original video
3. repeat above process with 3-7 videos 
4. white noise/steady beep plays in
5. screen goes black
  > no sound for a few seconds
6. sound of baby crying 
  > changes in volume depending on mouse position
7. flash image of eye behind wine glass
8. back to black screen/baby more intensely crying (1)?
7. flash image of screaming mouth
8. back to black screen/baby more intensely crying (2)?
9. images flash more rapidly
  > progressively
  > black/eye/black/mouth/ repeated
10. when images are no longer recognizable background suddenly flashes white
  > happy baby noises
*/

let vid;
let vid2;
let vid3;
let vid4;
let c = 0;

function setup() {
  createCanvas(640, 480);
  
  
  vid = createVideo('libraries/tuckercarlson.mov');
  vid2 = createVideo('libraries/tcarlson2.mov');
  vid3 = createVideo('libraries/cavuto.mov');
  vid4 = createVideo('libraries/hannity.mov');

}

function draw() {
  background(0);
  
  
  if (c == 1){
  image(vid, 0, 0, width, height); 
}
if (c == 2){
  image(vid2, 0, 0, width, height); 
}
if (c == 3){
  image(vid3, 0, 0, width, height); 
}
if (c == 4){
  image(vid4, 0, 0, width, height); 
}

}

function mousePressed() {
  c += 1; 
  if (c == 1){
  vid.play(); 
  }
  if (frameCount > 100){ 
    vid2.play(); 
  }
  if (c == 3){ 
    vid3.play(); 
  }
  if (c == 4){ 
    vid4.play(); 
  }
  // if (c == 5){ 
  //   c === 0; 
  // }
}