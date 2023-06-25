class vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    add(v: vector2 | number): this;
    div(v: vector2 | number): this;
    divn(v: vector2 | number): vector2;
}

function vec2(x: number, y: number): vector2;

export { vec2, vector2 };
