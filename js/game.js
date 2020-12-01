class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }


    player1 = createSprite(displayWidth/3,displayHeight-400);
    player1.addImage("player1",player_img);
    player1.scale = 0.9;
    
    player2 = createSprite(displayWidth/2,displayHeight-400);
    player2.addImage("player2", player_img);
    player2.scale = 0.9;
    players=[player1,player2];

    enemyKing = createSprite(width/2, 0, 100, 100);
    enemyKing.visible = false;

    nextLevel= createSprite(500,700,50,50);
    nextLevel.visible = false;


  }
    
    play(){
        
                form.hide();

                
                Player.getPlayerInfo();

                //console.log(allPlayers);
                 image(back_img, 0, 0, width,height);
                 var x=100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                    players[index-1].x = x;
                    
                    
                     fill("white");
                     textSize(25);
                     text(allPlayers.player1.name + " : "+allPlayers.player1.score,50,50);
                     text(allPlayers.player2.name + " : "+allPlayers.player2.score,800,50);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     enemy = createSprite(random(displayWidth-440,displayHeight-1040), 0, 100, 100);
                     enemy.scale = 0.3
                     enemy.velocityY = level*3;
                     enemy.addImage(enemyImg);
                     enemy.lifetime = Math.round(height/enemy.velocityY);
                     enemyGroup.add(enemy);
                     
                 }

                 if(player.score %3 ===0 && player.score !==0){
                     if(frameCount % 80 === 0){
                        enemyKing = createSprite(width/2, 0, 100, 100);
                        enemyKing.velocityY = 0.5;
                        enemyKing.scale = 1;
                        enemyKing.addImage(enemykingImg);
                     }
                    
                 }


                 if(keyWentDown("space") && player.index !== null){
                     var bullet = createSprite(-player.distance+width/3+20, displayHeight-400,20,20);
                     bullet.velocityY = -6;
                     bullet.addImage(bullet_Img);
                     bullet.scale = 0.06;
                     bulletAudio.play();
                     bulletGroup.add(bullet);
                     bullet.lifetime = Math.round(height/6);
                 }
                 
   
   
   
   if (player.index !== null){
                    //fill code here, to destroy the objects.

       for(var i = 0; i< enemyGroup.length ; i++){

                      // for(var j = 0; j < bulletGroup.length; j++){
                           
           if(enemyGroup.get(i).isTouching(bulletGroup)){
                               
               enemyGroup.get(i).destroy();
               bulletGroup.destroyEach();
               player.score+=1;
               player.update();
                           
           }

//  }
                      
       }

   }


                 
                 if (player.index !== null) {
                     //fill code here, to destroy the objects.

                    for(var i = 0; i< enemyGroup.length ; i++){
                        if(enemyGroup.get(i).isTouching(players)){
                            //enemyGroup.get(i).destroy();
                           // player.score+=1;
                            player.update();
                        }
                    }

                  }




                if(bulletGroup.isTouching(enemyKing)){

                    bulletGroup.destroyEach();
                    enemyKing.scale = enemyKing.scale-0.3;
                            
                }


            
                if(enemyKing.scale < 0.9){
                    
                    //enemyKing.scale = 1;
                    enemyKing.visible = false;
                    //enemyKing = null;
                    player1.visible = false;
                    player2.visible = false;
                    console.log("enemy king and players are invisible");
                    enemyGroup.destroyEach();
                    bulletGroup.destroyEach();
            
                    textSize(40);
                    text("Level  "+ level+ "  Completed" ,displayWidth/2-300,displayHeight/2-150);
                                
                    nextLevel.visible=true;
                                   
                    if(mousePressedOver(nextLevel)){
            
                        game.restart();
                    }
                }
                
      

    }

    end(){
       console.log("Game Ended");
    }



    restart(){
 
        player1.visible = true;
        player2.visible = true;
        level = level+1;
        //this.changeImages();
        nextLevel.visible = false;
        if(level ===4){
            game.end();
        }
        
        game.start();
       
       
}



changeImages(){
    if(level ===1){
        enemykingImg = loadImage("images/Level1/Enemy.png");
        player_img = loadImage("images/Level1/Player.png");
        enemyImg = loadImage("images/Level1/SmallEnemy.png");
        back_img= loadImage("images/Level1/background.png");
      }
    
      else if(level === 2){
        
        
        enemykingImg = loadImage("images/Level2/enemy.png");
        player_img = loadImage("images/Level2/Player.png");
        enemyImg = loadImage("images/Level2/SmallEnemy.png");
        back_img= loadImage("images/Level2/background.jpg");
      
      }
    
      else if(level === 3 ){
        enemykingImg = loadImage("images/Level3/Enemy.png");
        player_img = loadImage("images/Level3/Player.png");
        enemyImg = loadImage("images/Level3/SmallEnemy.png");
        back_img= loadImage("images/Level3/background.jpg");
      }
}
    
    
}