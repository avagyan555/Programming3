var LivingCreature = require("./super.class.js");

class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index, );
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
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
    mul() {
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= this.speed && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
}