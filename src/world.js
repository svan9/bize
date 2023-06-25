export class world {
    constructor(size, csize, worldinterface) {
        this.size = size;
        this.canvasSize = csize;
        this.cellSize = csize.divn(size);
        this.map = new Array(this.size.x).fill(new Array(this.size.y).fill(0));
        this.interface = worldinterface;
    }
    clear() {
        this.map = this.map.map((x) => x.map((y) => 0));
    }

    spawn(x, y, i) {
        if (x < 0 || y < 0 || x >= this.size.x || y >= this.size.y) return;
        this.map[parseInt(x)][parseInt(y)] = i;
    }

    draw(ctx) {
        this.map.forEach((x, ix) => {
            x.forEach((y, iy) => {
                ctx.fillStyle = this.interface[y];
                ctx.fillRect(
                    ix * this.cellSize.x,
                    iy * this.cellSize.y,
                    this.cellSize.x,
                    this.cellSize.y
                );
            });
        });
    }
}
