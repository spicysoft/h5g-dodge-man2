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
var Wall = (function (_super) {
    __extends(Wall, _super);
    function Wall() {
        var _this = _super.call(this) || this;
        _this.rect = null;
        _this.state = _this.stateNone;
        Wall.I.push(_this);
        if (Wall.I[0]) {
            _this.x = -320;
        }
        if (Wall.I[1]) {
            _this.x = 320;
        }
        _this.y = -1000;
        _this.w = 50;
        _this.h = 2000;
        _this.color = PLAYER_COLOR;
        _this.rect = new Rect(_this.x, _this.y, _this.w, _this.h, _this.color);
        return _this;
    }
    Wall.prototype.update = function () {
        // var i;
        //  for (i = 0; i < Wall.I.length; i++) {
        //     Wall.I[i].rect.perspective(Wall.I[i].x,  Wall.I[i].y, Wall.I[i].w);
        //     }
        this.state();
        this.rect.perspective(this.x, this.y, this.w);
    };
    Wall.prototype.stateNone = function () {
    };
    Wall.prototype.setStateRun = function () {
        this.state = this.stateRun;
    };
    Wall.prototype.stateRun = function () {
        var i;
        for (i = 0; i < Wall.I.length; i++) {
            if (Game.goinside) {
                if (i == 0) {
                    Wall.I[i].x += Game.wallspeed;
                }
                if (i == 1) {
                    Wall.I[i].x += -1 * Game.wallspeed;
                }
                if (Wall.I[0].x > -200) {
                    Game.goinside = false;
                    Game.goright = true;
                    if (Game.wallspeed < WALL_MAX_SPEED) {
                        Game.wallspeed += WALL_ADD_SPEED;
                    }
                }
            }
            if (Game.goright) {
                Wall.I[i].x += Game.wallspeed;
                if (Wall.I[1].x > 300) {
                    Game.goleft = true;
                    Game.goright = false;
                    if (Game.wallspeed < WALL_MAX_SPEED) {
                        Game.wallspeed += WALL_ADD_SPEED;
                    }
                }
            }
            if (Game.goleft) {
                Wall.I[i].x += -1 * Game.wallspeed;
                if (Wall.I[0].x < -300) {
                    Game.goleft = false;
                    Game.goright = true;
                    if (Game.wallspeed < WALL_MAX_SPEED) {
                        Game.wallspeed += WALL_ADD_SPEED;
                    }
                }
            }
        }
    };
    Wall.I = [];
    return Wall;
}(GameObject));
__reflect(Wall.prototype, "Wall");
//# sourceMappingURL=Wall.js.map