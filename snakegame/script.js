let s;
let scl = 20;

let food;

function setup() {
    createCanvas(800, 800);
    s = new Snake();
    frameRate(12);
    pickLocation();
}

function mousePressed(){
    s.total++;
}

function pickLocation() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);

}

function draw() {
    background(100);

    if (s.eat(food)) {
        pickLocation();
    }

    s.death();
    s.update();
    s.show();



    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}
