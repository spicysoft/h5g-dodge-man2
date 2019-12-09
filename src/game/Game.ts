const BACK_COLOR = 0xD8A4FF; 
const FONT_COLOR = 0x000000;
const PLAYER_RADIUS_PER_W = 0.04;
const PLAYER_COLOR = 0x424242;
const CAMERA_Y_PER_W = -0.4;
const CAM_PERS_Y_PER_W = -CAMERA_Y_PER_W * 2;
const WALL_ADD_SPEED = 0.05;
const WALL_MAX_SPEED = 1;
const OBSTACLE_ADD_SPEED = 0.1;
const OBSTACLE_MAX_SPEED = 10;

class Game {

    static loadSceneGamePlay() {
        Game.speed = 3;
        Game.wallspeed = 0.1;
        Game.obstaclespeed = 3;
        Camera2D.x = Util.w(-0.5);
        Camera2D.y = Util.h(-0.5);

        new Player();
        //new Wave();
        var i;
        for (i = 0; i < 2; i++) {    
            new Wall();
            }
        var n;
        for (n = 0; n < 4; n++) {           
            new Obstacle();
            }
        Wave.ObstacleSet();
        new StartScene();
    }
    static speed:number;
    static wallspeed:number;
    static obstaclespeed:number;
    //static obstacledistance:number;
    static goinside:boolean;
    static goright:boolean;
    static goleft:boolean;

}