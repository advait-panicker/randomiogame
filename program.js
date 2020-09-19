let res = {trees : [], rocks : []};
let sprites = {};
let pos;
let fov = 100;
let up = false, down = false, left = false, right = false;
const scl = 2000;
let inv = {wood : 0, stone : 0};
let dir;
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
    requestPointerLock();
}
function draw() {
    background(0);
    stroke(0);
    ellipse(width/2, height/2, scl/fov, scl/fov);
    dir = createVector(mouseX-width/2, mouseY-height/2);
    dir.normalize().mult(10);
    stroke(255, 0, 0);
    line(width/2, height/2, width/2+dir.x, height/2+dir.y);
    for (type in res) {
        res[type].forEach(obj => obj.display());
    }
    pos.add(right - left, down - up);
    document.getElementById('woodcnt').innerText = inv.wood;
    document.getElementById('stonecnt').innerText = inv.stone;
}
function mouseClicked() {
    const x = map(mouseX, 0, width, pos.x-fov, pos.x+fov);
    const y = map(mouseY, 0, height, pos.y-fov, pos.y+fov);
    let msp = createVector(x, y);
    for (type in res) {
        res[type].forEach(obj => {
            if (p5.Vector.sub(msp, obj.pos).mag() < 10) {
                if (p5.Vector.sub(obj.pos, pos).mag() < 15) {
                    console.log('hit');
                    inv[outputs[obj.type]]++;
                }
            }
        });
    }
}