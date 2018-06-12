let player;
let step = 10;

let shots = [];

let counter = 0;

function setup() {
    frameRate(30);
    createCanvas(600, 400);
    player = new Player();
}

function draw() {
    counter += 1;
    background(86, 86, 86);
    player.show();

    if (keyIsDown(RIGHT_ARROW)) {
        player.move(step);
    }

    if (keyIsDown(LEFT_ARROW)) {
        player.move(-step);
    }

    shots.forEach(el => {
        el.fire();
        el.move();
    });
}

function keyPressed() {
    if (keyCode === 32) {
        if (counter > 20) {
            shoot();
            counter = 0;
        }
    }
}

function shoot() {
    let shot = new Shot(player.x + player.bodyWidth / 2, player.y - player.bodyHeight);
    shots.push(shot);
}