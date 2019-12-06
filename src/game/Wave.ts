// Liberapp 2019 - Tahiti Katagai
// 地形生成

class Wave extends GameObject{

 

    constructor() {
        super();

     
    }

    update() {
           if(Game.obstacledistance >= 0){
               Wave.spawn();
           }
    }

    static spawn(){
        new Obstacle();
         var n;
          for (n = 0; n < Obstacle.I.length; n++) {
              Obstacle.I[n].setStateRun();
            }
            
    }
}

