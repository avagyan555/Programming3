class Grass extends livingCreature {
    constructor(x, y, index) {
        super(x,y, index);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
        matrix[this.y][this.x] = this.index;
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

}

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelvandak(ch);
    }

