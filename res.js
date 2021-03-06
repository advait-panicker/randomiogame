const outputs =  {
    trees : "wood",
    rocks : "stone"
}
class Resource {
    constructor (type) {
        const x = Math.random()*scl/4;
        const y = Math.random()*scl/4;
        this.pos = createVector(x, y);
        this.type = type;
        this.res = 20;
    }
    display () {
        const x = map(this.pos.x, pos.x-fovx, pos.x+fovx, 0, width);
        const y = map(this.pos.y, pos.y-fovy, pos.y+fovy, 0, height);
        image(sprites[this.type], x, y, scl/fovy*4, scl/fovy*4);
        text(this.res, x, y);
    }
    hit() {
        if (this.res <= 0) {
            gameMessage('this resource is depleted');
        } else {
            this.res--;
        }
    }
    update() {
        if (this.res < 20) {
            this.res++;
        }
    }
}