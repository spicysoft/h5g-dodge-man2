// Liberapp 2019 - Tahiti Katagai
// 障害オブジェクト管理

class Wave extends GameObject{

 

    constructor() {
        super();

     
    }

    update() {
        //    if(Game.obstacledistance >= 0){
        //        Wave.spawn();
        //    }
    }




    static ObstacleSet(){

        var n;
        for (n = 0; n < Obstacle.I.length; n++) {
            var num = -800;
            var _num = -400;
              Obstacle.I[n].y = num + n *_num;
              var result = this.getRandom( Wall.I[0].x +100, Wall.I[1].x-100 );
              Obstacle.I[n].x = result;
              Obstacle.I[n].ball.perspective(  Obstacle.I[n].x,  Obstacle.I[n].y, 0 );

            }

    }
    


    
    static getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}


    
}

