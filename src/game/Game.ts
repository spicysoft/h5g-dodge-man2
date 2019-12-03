const BACK_COLOR = 0xD8A4FF; 
const FONT_COLOR = 0x000000;
const PLAYER_RADIUS_PER_W = 0.05;
const PLAYER_COLOR = 0x000000;
const CAMERA_Y_PER_W = -0.4;
const CAM_PERS_Y_PER_W = -CAMERA_Y_PER_W * 2;

class Game {

    static loadSceneGamePlay() {
        Game.speed = 3;
        Camera2D.x = Util.w(-0.5);
        Camera2D.y = Util.h(-0.5);

        new Player();

        new StartScene();

    }
    static speed:number;

}