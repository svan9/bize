import { vector2 } from "./vector";

export enum iworld {
    0 = "black",
    1 = "white",
}

export class world {
    size: vector2;
    map: Array<Array<number>>;
    interface: iworld;

    constructor(size: vector2, csize: vector2, worldinterface: iworld): this;

    clear(): void;
    spawn(x: number, y: number, i: iworld): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
