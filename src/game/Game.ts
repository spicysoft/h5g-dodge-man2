const BACK_COLOR = 0xD8A4FF; 
const FONT_COLOR = 0x000000;


class Game {

    static loadSceneGamePlay() {

        Camera2D.x = Util.w(-0.5);
        Camera2D.y = Util.h(-0.5);

        new StartScene();

    }


}