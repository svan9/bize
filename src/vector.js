class vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        if (v.constructor.name == "Number") {
            this.x += v;
            this.y += v;
        } else if (v.constructor.name == "vector2") {
            this.x += v.x;
            this.y += v.y;
        }
        return this;
    }
    div(v) {
        if (v.constructor.name == "Number") {
            this.x /= v;
            this.y /= v;
        } else if (v.constructor.name == "vector2") {
            this.x /= v.x;
            this.y /= v.y;
        }
        return this;
    }
    divn(v) {
        var n = vec2(this.x, this.y);
        if (v.constructor.name == "Number") {
            n.x /= v;
            n.y /= v;
        } else if (v.constructor.name == "vector2") {
            n.x /= v.x;
            n.y /= v.y;
        }
        return n;
    }
    copy() {
        return new vector2(this.x, this.y);
    }
}

function vec2(x, y) {
    return new vector2(x, y);
}

function vec2add(v1, v2) {
    return vec2(v1.x + v2.x, v1.y + v2.y);
}

export { vec2, vector2, vec2add };
