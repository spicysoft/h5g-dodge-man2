var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BACK_COLOR = 0xD8A4FF;
var FONT_COLOR = 0x000000;
var Game = (function () {
    function Game() {
    }
    Game.loadSceneGamePlay = function () {
        Camera2D.x = Util.w(-0.5);
        Camera2D.y = Util.h(-0.5);
        new StartScene();
    };
    return Game;
}());
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map