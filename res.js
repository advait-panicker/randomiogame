class Resource {
    constructor (type) {
        const x = Math.random()*scl/4;
        const y = Math.random()*scl/4;
        this.pos = createVector(x, y);
        this.sprite = sprites[type];
    }
    display () {
        const x = map(this.pos.x, pos.x-fov, pos.x+fov, 0, width);
        const y = map(this.pos.y, pos.y-fov, pos.y+fov, 0, height);
        image(this.sprite, x, y, scl/fov*4, scl/fov*4);
    }
}