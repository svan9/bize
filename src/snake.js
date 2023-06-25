import { vec2 } from "./vector.js";

export class snake {
    constructor(startsize = 1) {
        this.head = vec2(1, 5);
        this.size = startsize;
        this.body = [vec2(0, 0), vec2(-1, 0)];
        this.dir = vec2(1, 0);
        this.dirname = "right";
        this.speed = 1;
    }

    key(e) {
        switch (e) {
            case "a": // left
                if (this.dirname == "right") break;
                this.dir = vec2(-1, 0);
                this.dirname = "left";
                break;
            case "d": // right
                if (this.dirname == "left") break;
                this.dir = vec2(1, 0);
                this.dirname = "right";
                break;
            case "w": // up
                if (this.dirname == "down") break;
                this.dir = vec2(0, -1);
                this.dirname = "up";
                break;
            case "s": // down
                if (this.dirname == "up") break;
                this.dir = vec2(0, 1);
                this.dirname = "down";
                break;
        }
    }
    add() {
        this.body.push(this.head.copy());
    }

    update() {
        this.body.push(this.head.copy());
        this.head.x += this.speed * this.dir.x;
        this.head.y += this.speed * this.dir.y;
        this.body.shift();
    }
}
