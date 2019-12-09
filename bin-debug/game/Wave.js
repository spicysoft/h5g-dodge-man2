// Liberapp 2019 - Tahiti Katagai
// 障害オブジェクト管理
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
        //    if(Game.obstacledistance >= 0){
        //        Wave.spawn();
        //    }
    };
    Wave.ObstacleSet = function () {
        var n;
        for (n = 0; n < Obstacle.I.length; n++) {
            var num = -800;
            var _num = -400;
            Obstacle.I[n].y = num + n * _num;
            var result = this.getRandom(Wall.I[0].x + 100, Wall.I[1].x - 100);
            Obstacle.I[n].x = result;
            Obstacle.I[n].ball.perspective(Obstacle.I[n].x, Obstacle.I[n].y, 0);
        }
    };
    Wave.getRandom = function (min, max) {
        var random = Math.floor(Math.random() * (max + 1 - min)) + min;
        return random;
    };
    return Wave;
}(GameObject));
__reflect(Wave.prototype, "Wave");
//# sourceMappingURL=Wave.js.map