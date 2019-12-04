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





    constructor() {
        super();


        var i;

        for (i = 0; i < Wall.I.length; i++) {
            if(i == 0){ 
                Wall.I[i] = this;            
                this.x = -250;
            }

            else if(i == 1){   
                Wall.I[i] = this;             
                this.x = 250;
            }
        }




        this.y = -800;
        this.w = 50;
        this.h = 1600;
        this.color = PLAYER_COLOR;
        this.rect = new Rect( this.x, this.y, this.w, this.h, this.color );
       
    }

    update(){    
        this.rect.perspective( this.x, this.y,this.w);
    }

    
}