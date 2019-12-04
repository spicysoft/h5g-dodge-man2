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
        var i;
        for (i = 0; i < Wall.I.length; i++) {
            if (i == 0) {
                Wall.I[i] = _this;
                _this.x = -250;
            }
            else if (i == 1) {
                Wall.I[i] = _this;
                _this.x = 250;
            }
        }
        _this.y = -800;
        _this.w = 50;
        _this.h = 1600;
        _this.color = PLAYER_COLOR;
        _this.rect = new Rect(_this.x, _this.y, _this.w, _this.h, _this.color);
        return _this;
    }
    Wall.prototype.update = function () {
        this.rect.perspective(this.x, this.y, this.w);
    };
    Wall.I = [];
    return Wall;
}(GameObject));
__reflect(Wall.prototype, "Wall");
//# sourceMappingURL=Wall.js.map