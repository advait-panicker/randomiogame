let res = {trees : [], rocks : []};
let sprites = {};
let pos;
let fov = 100;
let up = false, down = false, left = false, right = false;
const scl = 2000;
function preload() {
    for (let a in res) {
        sprites[a] = loadImage(`sprites/${a.slice(0, -1)}.png`);
    }
}
function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 100; i++) {
        for (let type in res) {
            res[type].push(new Resource(type));
        }
    }
    imageMode(CENTER);
    pos = createVector(50, 50);
}
function draw() {
    background(0);
    ellipse(width/2, height/2, scl/fov, scl/fov);
    for (type in res) {
        res[type].forEach(obj => obj.display());
    }
    pos.add(right - left, down - up);
}
