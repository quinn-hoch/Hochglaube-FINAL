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
/*
let vid;
let audio;
let vid2;
let audio2;
let vid3;
let audio3;
let vid4;
let audio4;
let c = 1;
let angrybaby;
let happybaby;
let lastTime;
let timeDelay = 9000; 

function setup() {
  createCanvas(640, 480);

  vid = createVideo('libraries/tuckerbidenvideo.mov');
   // vid.volume(0); //('libraries/tuckercarlson.mov')
  audio = createAudio('libraries/tuckerbidenaudio.mov');
  audio1 = createAudio('libraries/tuckerbidenaudio.mov');
  vid2 = createVideo('libraries/tuckermediavideo.mov');
   // vid2.volume(0); //('libraries/tcarlson2.mov')
  audio2 = createAudio('libraries/tuckermediaaudio.mov');
  audio21 = createAudio('libraries/tuckermediaaudio.mov');
  vid3 = createVideo('libraries/cavutovideo.mov');
   // vid3.volume(0);
  audio3 = createAudio('libraries/cavutoaudio.mov');
  audio31 = createAudio('libraries/cavutoaudio.mov');
  vid4 = createVideo('libraries/hannityvideo.mov');
    // vid4.volume(0);
  audio4 = createAudio('libraries/hannityaudio.mov');
  audio41 = createAudio('libraries/hannityaudio.mov');
  happybaby = createAudio('libraries/happybaby.mp3');
  angrybaby = createAudio('libraries/cryingbaby.mp3');
  whitenoise = createAudio('libraries/white-noise-8117.mp3');

  lastTime = millis();
  // vid.loop();
  vid.hide();
  vid2.hide();
  vid3.hide();
  vid4.hide(); 
}

function draw() {
  background(0);

  // if (currentTime - lastTime > timeDelay) {
  //   lastTime = currentTime;
//}

  if (c == 1){
  image(vid, 0, 0, width, height); 
  audio.play();
  }
if (c == 2){ //frameCount > 230
 image(vid2, 0, 0, width, height); 
 audio2.play();
 audio.speed(0.5);
 audio1.play();
}
if (c == 3){ //frameCount > 370
  image(vid3, 0, 0, width, height); 
  audio3.play();
  audio21.play();
  audio2.speed(0.5);
  audio.speed(0.25);
}
if (c == 4){ //frameCount > 500
  image(vid4, 0, 0, width, height); 
  audio4.play();
  audio31.play();
  audio3.speed(0.5);
  audio2.speed(0.25);
  audio.speed(0.1);
}
/*
if (frameCount > 600){
  audio41.play();
  audio4.speed(.5);
  whitenoise.play();
  whitenoise.volume(.01);
}
if (frameCount > 750){
  //whitenoise.play();
 let volume = 1;
  for (let i = 0; i < 200; i++){
    //volume -= 0.05; 
    audio.volume(volume);
    audio1.volume(volume);
    audio2.volume(volume);
    audio21.volume(volume);
    audio3.volume(volume);
    audio31.volume(volume);
    audio4.volume(volume);
    audio41.volume(volume);
  volume -= 0.05; 
}
}
if (frameCount > 850){
  //whitenoise.play();
  angrybaby.play();
} 
//}
}

function mousePressed() {
  c += 1; 
  if (c == 1){
  if(frameCount > 0){
  vid.play();
  // c+=1;
  }
  if (c == 2){ 
    vid2.play(); 
    // c+=1;
  }
  if (c == 3){ 
    vid3.play(); 
    // c+=1;
  }
  if (c == 4){ 
    vid4.play(); 
  }
  }
  // if (c == 5){ 
  //   c === 0; 
  // }
} */

  let vid;
  let audio;
  let audio1;
  let vid2;
  let audio2;
  let audio21;
  let vid3;
  let audio3;
  let audio31;
  let vid4;
  let audio4;
  let audio41;
let c = 0;

function setup() {
  createCanvas(640, 480);
  
  
  vid = createVideo('libraries/tuckercarlson.mov');
  vid.volume(0);
    audio = createAudio('libraries/tuckerbidenaudio.mov');
    audio1 = createAudio('libraries/tuckerbidenaudio.mov');
  vid2 = createVideo('libraries/tcarlson2.mov');
    audio2 = createAudio('libraries/tuckermediaaudio.mov');
    audio21 = createAudio('libraries/tuckermediaaudio.mov');
  vid3 = createVideo('libraries/cavuto.mov');
    audio3 = createAudio('libraries/cavutoaudio.mov');
    audio31 = createAudio('libraries/cavutoaudio.mov');
  vid4 = createVideo('libraries/hannity.mov');
    audio4 = createAudio('libraries/hannityaudio.mov');
    audio41 = createAudio('libraries/hannityaudio.mov');

  happybaby = createAudio('libraries/happybaby.mp3');
  angrybaby = createAudio('libraries/cryingbaby.mp3');
  whitenoise = createAudio('libraries/white-noise-8117.mp3');

  vid.hide();
  vid2.hide();
  vid3.hide();
  vid4.hide();
}

function draw() {
  background(0);
  
  if (frameCount < 1500){
  if (c == 1){
  image(vid, 0, 0, width, height); 
  audio.play();
}
if (c == 2){
  image(vid2, 0, 0, width, height); 
  audio2.play();
  audio.speed(0.5);
  audio1.play();
}
if (c == 3){
  image(vid3, 0, 0, width, height); 
  audio3.play();
  audio21.play();
  audio2.speed(0.5);
  audio.speed(0.25);
}
if (c == 4){
  image(vid4, 0, 0, width, height); 
  audio4.play();
  audio31.play();
  audio3.speed(0.5);
  audio2.speed(0.25);
  audio.speed(0.1);
}
} 
if (frameCount > 1400 && frameCount > 1600){
whitenoise.volume(0)
whitenoise.play()
for(var i = 1; i < 101; i++){
  audio.volume((100 - i)/100);
  audio1.volume((100 - i)/100);;
  audio2.volume((100 - i)/100);;
  audio21.volume((100 - i)/100);;
  audio3.volume((100 - i)/100);;
  audio31.volume((100 - i)/100);;
  audio4.volume((100 - i)/100);;
  audio41.volume((100 - i)/100);;
  whitenoise.volume(i/100);
}
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