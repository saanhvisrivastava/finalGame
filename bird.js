class Bird{
    constructor(x,y){
        this.bird=createSprite(x,y,20,20);
        this.image=loadAnimation("images/bird.png","images/bird2.png");
        this.bird.addAnimation("obstacle",this.image);
    }
    display(){
      
        if(player1.isTouching(this.bird)){
            this.bird.destroy();
        }
    }


}
