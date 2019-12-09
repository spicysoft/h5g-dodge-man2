// スタート時のシーン

class StartScene extends GameObject{

    static I:StartScene = null;
    texts:egret.TextField[] = [];
    constructor() {
        super();
        StartScene.I = this;
        this.texts[0] = Util.newTextField("ドッジマン", Util.width / 12, FONT_COLOR, 0.5, 0.2, true, false);
        this.texts[1] = Util.newTextField("タップして方向転換", Util.width / 20, FONT_COLOR, 0.5, 0.3, true, false);
        this.texts[2] = Util.newTextField("ぶつからないように避けつづけよう", Util.width / 20, FONT_COLOR, 0.5, 0.35, true, false);
        this.texts.forEach( text =>{ GameObject.baseDisplay.addChild( text ); });
        GameObject.baseDisplay.once(egret.TouchEvent.TOUCH_TAP, this.tap, this);
    }
    onDestroy(){
        this.texts.forEach( text =>{ text.parent.removeChild( text ); });
        this.texts = null;
        StartScene.I = null;
    }
    update() {}
    tap(e:egret.TouchEvent){
        Player.I.setStateRun();
         var n;
          for (n = 0; n < Obstacle.I.length; n++) {
              Obstacle.I[n].setStateRun();
            }
         var i;
          for (i = 0; i < Wall.I.length; i++) {
              Wall.I[i].setStateRun();
            }
        Game.goinside = true;
        this.destroy();
    }
}