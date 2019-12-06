// Liberapp 2019 - Tahiti Katagai
// 地形生成
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
var Wave = (function (_super) {
    __extends(Wave, _super);
    function Wave() {
        return _super.call(this) || this;
    }
    Wave.prototype.update = function () {
        if (Game.obstacledistance >= 0) {
            Wave.spawn();
        }
    };
    Wave.spawn = function () {
        new Obstacle();
        var n;
        for (n = 0; n < Obstacle.I.length; n++) {
            Obstacle.I[n].setStateRun();
        }
    };
    return Wave;
}(GameObject));
__reflect(Wave.prototype, "Wave");
//# sourceMappingURL=Wave.js.map