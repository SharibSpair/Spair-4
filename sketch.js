var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var enemy;
var enemyGroup;
var player_Img,enemykingImg,enemyImg;
var bulletGroup;
var enemyKing;
var bullet_Img;
var bulletAudio,enemyAudio,loseAudio;
var nextLevel;


var level=1;


function preload(){


    enemykingImg = loadImage("images/Level1/Enemy.png");
    player_img = loadImage("images/Level1/Player.png");
    enemyImg = loadImage("images/Level1/SmallEnemy.png");
  
 

  back_img= loadImage("images/Level1/background.png");
  bullet_Img= loadImage("images/bullet.png");
  bulletAudio= loadSound("Audio/Bulletaudio.mp3")
  enemyGroup = new Group();
  bulletGroup = new Group();
}
function setup() {
  createCanvas(displayWidth-40,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}

