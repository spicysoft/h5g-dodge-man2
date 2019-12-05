class Wall extends GameObject{

    static I :Wall[] = [];

    // get x():number { return this.display.x; }
    // get y():number { return this.display.y; }
    // set x( x:number ){ this.display.x = x; }
    // set y( y:number ){ this.display.y = y; }

    x:number;
    y:number;
    w:number;
    h:number;
    color:number;
    rect:Rect = null;
    state:()=>void = this.stateNone;



    constructor() {
        super();
        Wall.I.push(this);
        if(Wall.I[0]){
        this.x = -320;
        }
        if (Wall.I[1]){
        this.x = 320;
        }
        this.y = -1000;
        this.w = 50;
        this.h = 2000;
        this.color = PLAYER_COLOR;
        this.rect = new Rect( this.x, this.y, this.w, this.h, this.color );
       
    }

    update(){    
        // var i;
        //  for (i = 0; i < Wall.I.length; i++) {
        //     Wall.I[i].rect.perspective(Wall.I[i].x,  Wall.I[i].y, Wall.I[i].w);
        //     }
        this.state();
        this.rect.perspective( this.x, this.y,this.w);
    }

     stateNone(){
        
    }
     setStateRun(){
        this.state = this.stateRun;
    }
     stateRun() {

         var i;
         for (i = 0; i < Wall.I.length; i++) {

             if(Game.goinside){
                  if(i == 0) {
                 Wall.I[i].x += Game.wallspeed;
                }
                  if(i == 1) {
                 Wall.I[i].x += -1 * Game.wallspeed;
                }
                  if(Wall.I[0].x > -200){
                 Game.goinside = false;
                 Game.goright =true;
                 if(Game.wallspeed <WALL_MAX_SPEED){
                 Game.wallspeed += WALL_ADD_SPEED;
                 }

                }
             }

             if(Game.goright){

                 Wall.I[i].x +=  Game.wallspeed;

                  if(Wall.I[1].x > 300){
                   Game.goleft = true;
                   Game.goright =false;
                 if(Game.wallspeed <WALL_MAX_SPEED){
                 Game.wallspeed += WALL_ADD_SPEED;
                 }

                }
             }
             if(Game.goleft){

                 Wall.I[i].x +=  -1 * Game.wallspeed;

                  if(Wall.I[0].x < -300){
                   Game.goleft = false;
                   Game.goright =true;
                 if(Game.wallspeed <WALL_MAX_SPEED){
                 Game.wallspeed += WALL_ADD_SPEED;
                 }

                }
             }
            




            }


        }

    
}