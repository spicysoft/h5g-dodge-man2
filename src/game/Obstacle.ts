class Obstacle extends GameObject{

    static I:Obstacle[] = [];
    x:number;
    y:number;
    z:number;
    radius:number;
    ball:Ball = null;
    point:boolean = null;
    state:()=>void = this.stateNone;
    constructor() {
        super();
        Obstacle.I.push(this);     
        this.x = 0;
        this.y = -800;
        this.z = 0;
        this.radius = Util.w(PLAYER_RADIUS_PER_W);
        this.ball = new Ball( this.x, this.y, this.z, this.radius, PLAYER_COLOR );
        this.point = false;
    }
    onDestroy(){
        this.ball.destroy();
         Obstacle.I= [];


    }
    update(){    
        this.state();
    }
    setStateNone(){
        this.state = this.stateNone;
    }
    stateNone(){        
    }
    setStateRun(){
        this.state = this.stateRun;   
    }
    stateRun() {   
        this.ball.perspective( this.x, this.y, 0 );
        this.y += Game.obstaclespeed;
        if(!this.point && this.y > 300){
            Score.I.addPoint();
            this.point =true;
        }
        if(this.y > 800){
             this.y = -800;
             this.point =false;
             if(Game.obstaclespeed <OBSTACLE_MAX_SPEED){
                 Game.obstaclespeed  += OBSTACLE_ADD_SPEED;
                }

        }
    }

    static detectObstacle( x:number, y:number ):boolean { 
        let flag = false;
        const r = Util.w(PLAYER_RADIUS_PER_W );
        Obstacle.I.forEach( p => {
            let dx = p.x - x;
            let dy = p.y - y;
            let c = Math.sqrt(dx*dx +dy*dy);
            if( c <= r+r ){
                    flag = true;
                    console.log("c"+ c+ "r+r"+r+r);

            }
        });

        return flag;
    }
    setStateMiss(){
    }
    stateMiss(){
    }
}