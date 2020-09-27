let res = {trees : [], rocks : []};
let sprites = {};
let pos;
let fov = 100;
let up = false, down = false, left = false, right = false;
const scl = 2000;
let inv = {wood : 0, stone : 0};
let gameMessages = [];
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
    // Player
    background(0);
    stroke(0);
    ellipse(width/2, height/2, scl/fov, scl/fov);
    noStroke();
    fill(255);
    // Game world updates
    for (type in res) {
        res[type].forEach(obj => {
            obj.display();
            if (frameCount % 600 == 0) {
                obj.update();
            }
        });
    }
    // Game Messages
    gameMessages.forEach((v, i) => {
        if (v.time > 0) {
            text(v.msg, width/2, 10);
            if (frameCount % 60 == 0) {
                v.time--;
            }
        } else {
            gameMessages.pop();
        }
    });
    // Controls + inv
    pos.add(right - left, down - up);
    document.getElementById('woodcnt').innerText = inv.wood;
    document.getElementById('stonecnt').innerText = inv.stone;
}
function mouseClicked() {
    const x = map(mouseX, 0,  width, -fov, fov);
    const y = map(mouseY, 0, height, -fov, fov);
    const msp = createVector(x, y).normalize().mult(10).add(pos);
    for (type in res) {
        res[type].forEach(obj => {
            if (p5.Vector.sub(msp, obj.pos).mag() < 10) {
                inv[outputs[obj.type]]++;
                obj.hit();
            }
        });
    }
}
function gameMessage(msg) {
    gameMessages.unshift({msg: msg, time: 3});
}