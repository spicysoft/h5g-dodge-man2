class Player extends GameObject{

    static I:Player = null;
    
    x:number;
    y:number;
    z:number;
    radius:number;
    ball:Ball = null;
    buttonOffsetX:number = 0;

    button:Button = null;
    state:()=>void = this.stateNone;

    constructor() {
        super();

        Player.I = this;
        
        this.x = 0;
        this.y = 300;
        this.z = 0;
        this.radius = Util.w(PLAYER_RADIUS_PER_W);
        this.ball = new Ball( this.x, this.y, this.z, this.radius, PLAYER_COLOR );
        this.button = new Button( null, 0, 0, 0.5, 0.5, 1, 1, 0x000000, 0.0, null ); // 透明な全画面ボタン
    }

    onDestroy(){
        this.ball.destroy();
        this.button.destroy();
        Player.I = null;
    }

    update(){    
        this.state();
        this.ball.perspective( this.x, this.y, 0 );
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
                if( this.button.press ){
            Game.speed = Game.speed * -1;
        }
        this.x += Game.speed;
        if( Obstacle.detectObstacle( this.x, this.y ) ||Wall.detectObstacle( this.x, this.y ) ){
             this.state = this.setStateMiss;
             Obstacle.I.forEach( p => {
           p.state = p.setStateMiss;
        });
          Wall.I.forEach( p => {
           p.state = p.setStateMiss;
        });
        }
                
    }

    setStateMiss(){
        this.state = this.stateMiss;
        new GameOver();
        EffectLine.create( this.x, this.y, this.radius, PLAYER_COLOR, 4 );
    }
    stateMiss(){
      this.y = 800;
      console.log("hi"+this.y);
    }



}