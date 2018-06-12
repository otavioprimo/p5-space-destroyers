
let persons = [];
let total = 20;
function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < total; i++) {
        persons.push(new Person());
    }
}

function draw() {
    background(0);
    persons.forEach(element => {
        element.create();
        element.move();
    });
}

class Person {
    constructor(name) {
        this.x = random(height);
        this.y = random(width);
        this.diameter = random(10, 25);
        this.speed = 2;
    }

    create() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
}
