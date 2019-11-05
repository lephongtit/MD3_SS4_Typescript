var Game = /** @class */ (function () {
    function Game() {
        this.count = 1;
    }
    Game.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            _this.count++;
            console.log(_this.count);
        }, 1000);
    };
    return Game;
}());
var game = new Game();
game.run();
