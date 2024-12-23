//HOCHGLAUBE FINAL

//variables//
  let startTime; 

//VIDEOS SEGMENT
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

//GAME SEGMENT
  let player;
  let flag;
  let objects = []; 
  let gameOver = false;
  let burning;
  let goodWords = ["puzzling", "ungrateful", "violent", "anti-violent", "protest", "dishonest", "baffling", "bad", "free choice", "slick", "donor class", "systemic", "racism", "filthy", "corrupt", "enemy", "protect", "uninformed", "trust", "corruption", "power", "white", "winning", "loser", "media"]
  let badWords = ["the", "today", "questions", "big", "tomorrow", "that", "not", "of", "expect", "was", "is", "will", "weather", "still", "senator", "one", "you", "for", "to", "measure", "are", "so", "level", "look", "tonight", "have", "about", "community", "summer", "night", "morning", "something", "like", "in", "on"]
  let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  
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

//GAME
player = new Player();
flag = loadImage('libraries/flag.svg.png')
burning = loadImage('libraries/burningflag.jpg')
}

function draw() {
  background(0);
  let elapsedTime = millis() - startTime;

//videos start with click
  if (elapsedTime < 33000){

//VIDEO 1 PLAYS
  if (c == 1){
  image(vid, 0, 0, width/2, height/2); 
  vid2.pause();
  vid3.pause();
  vid4.pause();
  audio.play();
}
//VIDEO 2 PLAYS
if (elapsedTime > 7000){
  image(vid, 0, 0, width/2, height/2); 
  vid2.play();
  image(vid2, width/2, 0, width/2, height/2); 
  audio2.play();
  audio.speed(0.5);
  audio1.play();
}
if (elapsedTime > 7100){
  image(vid, 0, 0,  width/2, height/2); 
  image(vid2, width/2, 0,  width/2, height/2);
  image(vid3, 0, height/2,  width/2, height/2);
  textSize(100);
  textAlign(LEFT, TOP);
  text('PUZZLE', 0, 0, width/2, height/2);
  fill('white');
}
if (elapsedTime > 8000){
  textSize(100);
  textAlign(LEFT, TOP);
  text('PUZZLE BAFFLING', 0, 0, width/2, height/2);
  fill('white');
}
///VIDEO 3 PLAYS
if (elapsedTime > 9000){
  image(vid, 0, 0,  width/2, height/2); 
  image(vid2, width/2, 0, width/2, height/2);
  vid3.play();
  image(vid3, 0, height/2,  width/2, height/2); 
  textSize(100);
  textAlign(LEFT, TOP);
  text('PUZZLE BAFFLING', 0, 0, width/2, height/2);
  text('FILTHY', width/2, 0, width/2, height/2);
  fill('white');
  audio3.play();
  audio21.play();
  audio2.speed(0.5);
  audio.speed(0.25);
}
if (elapsedTime > 9500){
  textSize(100);
  textAlign(LEFT, TOP);
  text('PUZZLE BAFFLING', 0, 0, width/2, height/2);
  text('FILTHY DISHONEST', width/2, 0, width/2, height/2);
  fill('white');
}
if (elapsedTime > 13000){
  textSize(100);
  textAlign(LEFT, TOP);
  text('PUZZLE BAFFLING', 0, 0, width/2, height/2);
  text('FILTHY DISHONEST BAD', width/2, 0, width/2, height/2);
  fill('white');
}
//VIDEO 4 PLAYS
if (elapsedTime > 14000){
  image(vid, 0, 0,  width/2, height/2); 
  image(vid2, width/2, 0, width/2, height/2);
  image(vid3, 0, height/2,  width/2, height/2); 
  vid4.play();
  image(vid4, width/2, height/2,  width/2, height/2); 
  textAlign(LEFT, TOP);
  text('PUZZLE BAFFLING', 0, 0, width/2, height/2);
  text('FILTHY DISHONEST BAD BAD', width/2, 0, width/2, height/2);
  text('ANTI VIOLENT', 0, height/2, width/2, height/2);
  fill('white');
  audio4.play();
  audio31.play();
  audio3.speed(0.5);
  audio2.speed(0.25);
  audio.speed(0.1);
}
if (elapsedTime > 14900){
  textAlign(LEFT, TOP);
  text('PUZZLE BAFFLING', 0, 0, width/2, height/2);
  text('FILTHY DISHONEST BAD BAD', width/2, 0, width/2, height/2);
  text('ANTI VIOLENT PROTEST', 0, height/2, width/2, height/2);
  fill('white');
}
if (elapsedTime > 18000){
  image(vid, 0, 0, width/2, height/2); 
  image(vid2, width/2, 0, width/2, height/2);
  image(vid3, 0, height/2,  width/2, height/2); 
  image(vid4, width/2, height/2, width/2, height/2); 
  textAlign(LEFT, TOP);
  textSize(80);
  text('PUZZLE BAFFLING WHITE PEOPLE BAD SYSTEMIC RACISM', 0, 0, width/2, height/2);
  textSize(100);
  text('FILTHY DISHONEST BAD BAD BAD', width/2, 0, width/2, height/2);
  textSize(97);
  text('ANTI VIOLENT PROTEST PROTECTING', 0, height/2, width/2, height/2);
  fill('white');
}
if (elapsedTime > 29000){
  textSize(100);
  text('UNGRATEFUL', width/2, height/2, width/2, height/2);
  fill(255);
}
} 

//enter white noise/baby/transition

if (elapsedTime > 30000 && elapsedTime < 34000){
whitenoise.volume(0)
whitenoise.play()
for(var i = 1; i < 101; i++){
  audio.volume((100 - i)/100);
  audio1.volume((100 - i)/100);
  audio2.volume((100 - i)/100);
  audio21.volume((100 - i)/100);
  audio3.volume((100 - i)/100);
  audio31.volume((100 - i)/100);
  audio4.volume((100 - i)/100);
  audio41.volume((100 - i)/100);
  whitenoise.volume(i/100);
}
}
if (elapsedTime > 30800){
  whitenoise.volume(.5)
  angrybaby.play();
}

//GAME INSTRUCTIONS
if (elapsedTime > 33000){
  whitenoise.pause();
  angrybaby.pause();
  audio.pause();
  audio1.pause();
  audio2.pause();
  audio21.pause();
  audio3.pause();
  audio31.pause();
  audio4.pause();
  audio41.pause();
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Save democracy ", width/2, (height/2 - 101));
  text("from the buzz words!", width/2, height/2);
  textSize(50);
  text("use your arrow keys to move side", width/2, (height/2 + 100));
  text("to side and collect", (width/2 - (textWidth("words")/2)), (height/2 + 151));
  fill(255, 0, 0);
  text("buzz", (width/2 + (textWidth("to side and collect ")/2)), (height/2 + 151));
  fill(255);
  //text("words", (width/2 + (textWidth("to side and collect buzz ")/2)), (height/2 + 151));
  text("words while avoiding neutral", width/2, (height/2 + 202));
  fill(0, 255, 0);
  text("neutral", (width/2 + (textWidth("words while avoiding ")/2)), (height/2 + 202));

  fill(255);
  player.update();  
  player.display();
}
//GAME PLAY
if (elapsedTime > 41500){
  background(0);
  textAlign(LEFT);
  textSize(20); 
  text("Score: " + score, 10, 10);
  if (gameOver) {
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(0);
    image(burning, 0, 0, width, height);
    text("YOU KILLED DEMOCRACY!", width/2, height/2);
    return;  
  }
  player.update();  
  player.display();
  if (frameCount % 60 == 0) {
    objects.push(new FallingObject());
  }
  for (let i = objects.length - 1; i >= 0; i--) {
    objects[i].update();
    objects[i].display();
    
    if (objects[i].hits(player)) {
      if (objects[i].isGood) {
        score += 1;  
      } else {
        gameOver = true;  
      }
      objects.splice(i, 1); 
    }
    if (objects[i].isGood && objects[i].offScreen()) {
      gameOver = true;  
    }
    if (objects[i].offScreen()) {
      objects.splice(i, 1);
}
}
}
}

//Starts/triggers the sketch
function mousePressed() {
  startTime = millis(); 
  c += 1; 
  if (c == 1){
    vid.play();
    vid2.play();
    vid3.play();
    vid4.play();   
  }
}

class Player {
  constructor() {
    this.width = 60;
    this.height = 50;
    this.x = width / 2 - this.width / 2;
    this.y = height - this.height - 10;
    this.speed = 5;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    this.x = constrain(this.x, 0, width - this.width);
  }

  display() {
    image(flag, this.x, this.y, this.width, this.height);
  }
}

class FallingObject {
  constructor() {
    this.size = 15;  
    this.x = random(width);  
    this.y = 0; 
    this.speed = random(2, 5); 
    this.isGood = random() > 0.75;
    if (this.isGood) {
      this.word = random(goodWords);  
    } else {
      this.word = random(badWords);  
    } 
  }

  update() {
    this.y += this.speed;  
  }

  display() {
    textSize(this.size);  
    textAlign(CENTER, CENTER); 
    if (this.isGood) {
      fill(255, 0, 0);  
    } else {
      fill(0, 255, 0); 
    }
    text(this.word, this.x, this.y);
  }

  hits(player) {
    let wordWidth = textWidth(this.word);
    let wordHeight = this.size;
    return (this.x + wordWidth / 2 > player.x && this.x - wordWidth / 2 < player.x + player.width && this.y + wordHeight / 2 > player.y && this.y - wordHeight / 2 < player.y + player.height);
  }

  offScreen() {
    return this.y > height + this.size;
  }
}