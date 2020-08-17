class Form{
    constructor(){
     this.title=createElement("h1");
this.input=createInput("Get ready to win");
this.button=createButton("play");

    }
    display(){
        this.title.html("Welcome To Treasure Hunt");
        this.title.position(displayWidth/2-50,10);

        this.input.position(displayWidth/2-30,displayHeight/2-100);
        this.button.position(displayWidth/2+50,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            gameState=1;
        })
    }

}