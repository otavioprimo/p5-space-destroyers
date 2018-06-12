class Shot {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 2;
        this.height = 5;

        this.speed = 3;
    }

    fire() {
        rect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.y -= this.speed;
    }
}