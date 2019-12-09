// スタート時のシーン
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.texts = [];
        StartScene.I = _this;
        _this.texts[0] = Util.newTextField("ドッジマン", Util.width / 12, FONT_COLOR, 0.5, 0.2, true, false);
        _this.texts[1] = Util.newTextField("タップして方向転換", Util.width / 20, FONT_COLOR, 0.5, 0.3, true, false);
        _this.texts[2] = Util.newTextField("ぶつからないように避けつづけよう", Util.width / 20, FONT_COLOR, 0.5, 0.35, true, false);
        _this.texts.forEach(function (text) { GameObject.baseDisplay.addChild(text); });
        GameObject.baseDisplay.once(egret.TouchEvent.TOUCH_TAP, _this.tap, _this);
        return _this;
    }
    StartScene.prototype.onDestroy = function () {
        this.texts.forEach(function (text) { text.parent.removeChild(text); });
        this.texts = null;
        StartScene.I = null;
    };
    StartScene.prototype.update = function () { };
    StartScene.prototype.tap = function (e) {
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
    };
    StartScene.I = null;
    return StartScene;
}(GameObject));
__reflect(StartScene.prototype, "StartScene");
//# sourceMappingURL=StartScene.js.map