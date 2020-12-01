class Form

{
    constructor()

{

       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.title1 = createElement('h2');
       this.title2 = createElement('h2');
       this.reset = createButton('Reset');
    
}

    hide() 
    
{
       this.greeting.hide();
       this.button.hide();
       this.input.hide();
       this.title.hide();
       this.title1.hide();
       this.title2.hide();
}

    display() 
    
{

        this.title.html("Space Shooter");
        this.title.position(displayWidth-1200,displayHeight-950);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        this.title1.html("Type Your Name");
        this.title1.position(displayWidth-1175,displayHeight-850);
        this.title1.style('font-size', '50px');
        this.title1.style('color', 'white');

        this.title2.html("Created By Sharib Shaikh Under The Guidence of Besty Mam And WhiteHat Junior");
        this.title2.position(displayWidth-1500,displayHeight-195);
        this.title2.style('font-size', '30px');
        this.title2.style('color', 'white');

        this.input.position(displayWidth-1100,displayHeight-650);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        
        this.button.position(displayWidth-1095,displayHeight-530);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');


    this.button.mousePressed(() => 
        
    
{

        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
            
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth-1250,displayHeight-700);
        this.greeting.style('color', 'white');
        this.greeting.style('font-size', '100px');
            
});

        this.reset.mousePressed(() => 
        
{

        player.updateCount(0);
        game.update(0);
        
});

}

}