var LivingCreature = require("./super.class.js");

class Gishatich2  extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = Math.round(Math.random() * 16);
        this.multiply = Math.round(Math.random() * 16);
        this.speed = 24;
        matrix[this.y][this.x] = this.index; 
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelvandak(ch);
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    sharjvel() {
        var vand = random(this.yntrelVandak(0));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
        }
    }

    utel() {
        this.energy--;
        var vand = random(this.yntrelVandak(3));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed/2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        var vand = random(this.yntrelVandak(0));
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newgishatich2 = new Gishatich2(vand[0], vand[1], 4);
            gishatich2Arr.push(newgishatich2);
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatich2Arr) {
                if (gishatich2Arr[i].x == this.x && gishatich2Arr[i].y == this.y) {
                    gishatich2Arr.splice(i, 1);
                }
            }
        }
    }
}