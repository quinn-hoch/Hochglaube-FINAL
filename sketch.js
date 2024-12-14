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

Further notes:
let lastTime;
let timeDelay = 9000; 

  lastTime = millis();
  // vid.loop();

  // if (currentTime - lastTime > timeDelay) {
  //   lastTime = currentTime;
//}
*/
  let startTime; 

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

  let mouth;
  let eye;
  let flashSpeed = 200;
  let flashSpeed2 = 100;
  let minFlashSpeed = 10;
  let minFlashSpeed2 = 5;

  let boxWidth = width/2;
  let boxHeight = height/2;
  //let fontSize = 1;

function setup() {
  createCanvas(1280, 960);
  //startTime = millis();
//VIDEO INFO
  vid = createVideo('libraries/tuckercarlson.mov');
  vid.volume(0);
    audio = createAudio('libraries/tuckerbidenaudio.mov');
    audio1 = createAudio('libraries/tuckerbidenaudio.mov');
  vid2 = createVideo('libraries/tcarlson2.mov');
  vid2.volume(0);
    audio2 = createAudio('libraries/tuckermediaaudio.mov');
    audio21 = createAudio('libraries/tuckermediaaudio.mov');
  vid3 = createVideo('libraries/cavuto.mov');
  vid3.volume(0);
    audio3 = createAudio('libraries/cavutoaudio.mov');
    audio31 = createAudio('libraries/cavutoaudio.mov');
  vid4 = createVideo('libraries/hannity.mov');
  vid4.volume(0);
    audio4 = createAudio('libraries/hannityaudio.mov');
    audio41 = createAudio('libraries/hannityaudio.mov');
  vid.hide();
  vid2.hide();
  vid3.hide();
  vid4.hide();

//EXTRA AUDIO
  happybaby = createAudio('libraries/happybaby.mp3');
  angrybaby = createAudio('libraries/cryingbaby.mp3');
  whitenoise = createAudio('libraries/white-noise-8117.mp3');

//IMAGES
  mouth = loadImage('libraries/mouth.png');
  eye = loadImage('libraries/eyes.png');

  //loadPixels();
  //let fontSize = 1;

}

function draw() {
  background(0);
  let elapsedTime = millis() - startTime;
//videos start with click
  if (elapsedTime < 24800){
  if (c == 1){
  image(vid, 0, 0, 640, 480); 
  vid2.pause();
  vid3.pause();
  vid4.pause();
  audio.play();
}
if (elapsedTime > 7000){
  image(vid, 0, 0, 640, 480); 
  vid2.play();
  image(vid2, width/2, 0, 640, 480); 
  audio2.play();
  audio.speed(0.5);
  audio1.play();
}
if (elapsedTime > 7000){
  vid2.play();
  image(vid, 0, 0, 640, 480); 
  image(vid2, width/2, 0, 640, 480);
  vid3.play();
  image(vid3, 0, height/2, 640, 480); 
  textSize(300);
  textAlign(LEFT, TOP);
  //rectMode(CORNERS);
  text('PUZZLE', 0, 0, width/2, height/2);
  fill('white');
  audio3.play();
  audio21.play();
  audio2.speed(0.5);
  audio.speed(0.25);
}
if (elapsedTime > 8000){
  image(vid, 0, 0, 640, 480); 
  image(vid2, width/2, 0, 640, 480);
  image(vid3, 0, height/2, 640, 480);
  let fontSize = 1;
  textSize(fontSize);
  while (textWidth(myText) < boxWidth && fontSize < boxHeight) {
    fontSize++;
    textSize(fontSize);
  } 
  textAlign(LEFT, TOP);
  //text('PUZZLE BAFFLING', 0, 0, width/2, height/2);
  text('PUZZLE BAFFLING', 0, 0);
  fill('white');

}
if (elapsedTime > 15000){
  vid3.play();
  image(vid, 0, 0, 640, 480); 
  image(vid2, width/2, 0, 640, 480);
  image(vid3, 0, height/2, 640, 480); 
  vid4.play();
  image(vid4, width/2, height/2, 640, 480); 
  audio4.play();
  audio31.play();
  audio3.speed(0.5);
  audio2.speed(0.25);
  audio.speed(0.1);
}
//enter white noise/transition
} 
if (elapsedTime > 22000 && elapsedTime < 26000){
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
if (elapsedTime > 24800){
  whitenoise.volume(.5)
  angrybaby.play();
  //angrybaby.volume(mouseX/640); //trial/tester
}
//flashing images 
if (elapsedTime > 30000){
  imageMode(CENTER);
  flashSpeed = max(minFlashSpeed, flashSpeed - 0.05);
  if (frameCount % (flashSpeed * 2) < flashSpeed) {
  //image(eye, width / 2 - eye.width / 2, height / 2 - eye.height / 2); 
  image(eye, width / 2, height / 2, eye.width / 3, eye.height / 3); 
}
  flashSpeed2 = max(minFlashSpeed2, flashSpeed2 - 0.05);
if (frameCount % (flashSpeed2 * 2) < flashSpeed2) {
  image(mouth, width / 2, height / 2, mouth.width / 3, mouth.height / 3); 
}
}
if (elapsedTime > 37000){
background(255);
angrybaby.volume(0);
happybaby.play();
}
}
function mousePressed() {
  startTime = millis(); 
  c += 1; 
  if (c == 1){
    vid.play();
  
    vid2.play();
  
    vid3.play();
  
    vid4.play();   
  }
  /* if (frameCount > 100){ 
    vid.play();
    vid2.play(); 
  }
  if (c == 3){ 
    vid.play();
    vid2.play();
    vid3.play(); 
  }
  if (c == 4){ 
    vid.play();
    vid2.play();
    vid3.play();
    vid4.play(); 
  } */
  // if (c == 5){ 
  //   c === 0; 
  // }
}
