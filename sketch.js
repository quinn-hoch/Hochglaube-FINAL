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
let audio;
let vid2;
let audio2;
let vid3;
let audio3;
let vid4;
let audio4;
let c = 0;
let angrybaby;
let happybaby;

function setup() {
  createCanvas(640, 480);

  vid = createVideo('libraries/tuckerbidenvideo.mov'); //('libraries/tuckercarlson.mov')
  audio = createAudio('libraries/tuckerbidenaudio.mov');
  audio1 = createAudio('libraries/tuckerbidenaudio.mov');
  vid2 = createVideo('libraries/tuckermediavideo.mov'); //('libraries/tcarlson2.mov')
  audio2 = createAudio('libraries/tuckermediaaudio.mov');
  audio21 = createAudio('libraries/tuckermediaaudio.mov');
  vid3 = createVideo('libraries/cavutovideo.mov');
  audio3 = createAudio('libraries/cavutoaudio.mov');
  audio31 = createAudio('libraries/cavutoaudio.mov');
  vid4 = createVideo('libraries/hannityvideo.mov');
  audio4 = createAudio('libraries/hannityaudio.mov');
  audio41 = createAudio('libraries/hannityaudio.mov');
  happybaby = createAudio('libraries/happybaby.mp3');
  angrybaby = createAudio('libraries/cryingbaby.mp3');

  // vid.loop();
  vid.hide(); 
}

function draw() {
  background(0);
  
  if (c == 1){
  image(vid, 0, 0, width, height); 
  audio.play();
}
if (frameCount > 230){
 image(vid2, 0, 0, width, height); 
 audio2.play();
 audio.speed(0.5);
 audio1.play()
}
if (frameCount > 370){
  image(vid3, 0, 0, width, height); 
  audio3.play();
  audio21.play();
  audio2.speed(0.5);
  audio.speed(0.25);
}
if (frameCount > 500){
  image(vid4, 0, 0, width, height); 
  audio4.play();
  audio31.play();
  audio3.speed(0.5);
  audio2.speed(0.25);
  audio.speed(0.1);
}
}

function mousePressed() {
  c += 1; 
  if (c == 1){
  vid.play();
  // c+=1;

  if (frameCount > 230){ 
    vid2.play(); 
    // c+=1;
  }
  if (frameCount > 370){ 
    vid3.play(); 
    // c+=1;
  }
  if (frameCount > 500){ 
    vid4.play(); 
  }
  }
  // if (c == 5){ 
  //   c === 0; 
  // }
} 