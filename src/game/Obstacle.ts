class Obstacle extends GameObject{

    static I:Obstacle[] = [];
    x:number;
    y:number;
    z:number;
    radius:number;
    ball:Ball = null;
    state:()=>void = this.stateNone;
    constructor() {
        super();
        Obstacle.I.push(this);     
        this.x = 0;
        this.y = -800;
        this.z = 0;
        this.radius = Util.w(PLAYER_RADIUS_PER_W);
        this.ball = new Ball( this.x, this.y, this.z, this.radius, PLAYER_COLOR );
    }
    onDestroy(){
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
        if(this.y > 800){
             this.y = -800;
             if(Game.obstaclespeed <OBSTACLE_MAX_SPEED){
                 Game.obstaclespeed  += OBSTACLE_ADD_SPEED;
                }

        }
    }

    static detectObstacle( x:number, y:number ):boolean { 
        let flag = false;
        const r = Util.w(PLAYER_RADIUS_PER_W + PLAYER_RADIUS_PER_W);
        const rr = r ** 2;
        Obstacle.I.forEach( p => {
            let dx = p.x - x;
            let dy = p.y - y;
            if( dy**2 <= rr ){
                if( dx**2 <= rr ){
                    flag = true;
                    console.log("rr="+ rr+ " dx**2 + (dy*4)**2="+dx**2 + (dy*4)**2);
                }
            }
        });

        return flag;
    }
    setStateMiss(){
    }
    stateMiss(){
    }
}