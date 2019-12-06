class Obstacle extends GameObject{

    static I:Obstacle[] = [];

    // get x():number { return this.display.x; }
    // get y():number { return this.display.y; }
    // set x( x:number ){ this.display.x = x; }
    // set y( y:number ){ this.display.y = y; }

    x:number;
    y:number;
    z:number;
    radius:number;
    ball:Ball = null;
    distance:number = 0;


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

        //Obstacle.I = Obstacle.I .filter( obj => obj != this );

        

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
        this.distance += 1;

        if(this.distance >100){
            Wave.spawn();
            this.distance = 0;
        }

        if(this.y > 400){
            this.state = this.stateMiss;

            this.onDestroy();
            this.destroy();
            this.ball.destroy();
        }
        
    }

    setStateMiss(){
 
    }
    stateMiss(){
        
    }
}