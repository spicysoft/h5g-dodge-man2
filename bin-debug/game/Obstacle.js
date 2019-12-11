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
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle() {
        var _this = _super.call(this) || this;
        _this.ball = null;
        _this.point = null;
        _this.state = _this.stateNone;
        Obstacle.I.push(_this);
        _this.x = 0;
        _this.y = -800;
        _this.z = 0;
        _this.radius = Util.w(PLAYER_RADIUS_PER_W);
        _this.ball = new Ball(_this.x, _this.y, _this.z, _this.radius, PLAYER_COLOR);
        _this.point = false;
        return _this;
    }
    Obstacle.prototype.onDestroy = function () {
        this.ball.destroy();
        Obstacle.I = [];
    };
    Obstacle.prototype.update = function () {
        this.state();
    };
    Obstacle.prototype.setStateNone = function () {
        this.state = this.stateNone;
    };
    Obstacle.prototype.stateNone = function () {
    };
    Obstacle.prototype.setStateRun = function () {
        this.state = this.stateRun;
    };
    Obstacle.prototype.stateRun = function () {
        this.ball.perspective(this.x, this.y, 0);
        this.y += Game.obstaclespeed;
        if (!this.point && this.y > 300) {
            Score.I.addPoint();
            this.point = true;
        }
        if (this.y > 800) {
            this.y = -800;
            this.point = false;
            if (Game.obstaclespeed < OBSTACLE_MAX_SPEED) {
                Game.obstaclespeed += OBSTACLE_ADD_SPEED;
            }
        }
    };
    Obstacle.detectObstacle = function (x, y) {
        var flag = false;
        var r = Util.w(PLAYER_RADIUS_PER_W);
        Obstacle.I.forEach(function (p) {
            var dx = p.x - x;
            var dy = p.y - y;
            var c = Math.sqrt(dx * dx + dy * dy);
            if (c <= r + r) {
                flag = true;
                console.log("c" + c + "r+r" + r + r);
            }
        });
        return flag;
    };
    Obstacle.prototype.setStateMiss = function () {
    };
    Obstacle.prototype.stateMiss = function () {
    };
    Obstacle.I = [];
    return Obstacle;
}(GameObject));
__reflect(Obstacle.prototype, "Obstacle");
//# sourceMappingURL=Obstacle.js.map