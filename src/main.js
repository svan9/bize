const canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");

document.querySelectorAll(".sk").forEach((e) =>
    e.addEventListener("click", function () {
        simkey(this.getAttribute("src"));
    })
);

document.body.appendChild(canvas);

canvas.style.border = "1px solid black";
canvas.style.width = "500px";
canvas.style.height = "500px";
canvas.width = 500;
canvas.height = 500;

import { world } from "./world.js";
import { vec2 } from "./vector.js";
import { snake } from "./snake.js";

const worldis = {
    0: "black",
    1: "green",
    2: "red",
};

var worldmap = new world(
    vec2(20, 20),
    vec2(canvas.width, canvas.height),
    worldis
);

function simkey(key) {
    const event = new KeyboardEvent("keydown", { key });
    document.body.dispatchEvent(event);
}

var snakee = new snake();

document.body.addEventListener("keydown", KeyUpdate);

function KeyUpdate(e) {
    snakee.key(e.key.toLowerCase());
}

function randrange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

var apple = vec2(0, 0);
var counter = 0;
var gameinterval;
var counterhistory = new Set();

function initgame() {
    apple = vec2(0, 0);
    counter = 0;
    snakee = new snake();
    gameinterval = setInterval(GlobalUpdate, 100);
    putAppple();
    document.querySelector(".score").innerHTML = counter;
}

function putAppple() {
    const x = randrange(0, worldmap.size.x);
    const y = randrange(0, worldmap.size.y);
    apple = vec2(x, y);
}

function gameOver() {
    clearInterval(gameinterval);
    document.querySelector(".gameover").style.display = "flex";
    if (counter != 0) {
        counterhistory.add(counter);
        counterhistory = new Set([...counterhistory].sort((a, b) => b - a));
    }
    document.querySelector(".score").innerHTML = [...counterhistory].join(
        "</br>"
    );
}

function GlobalUpdate() {
    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    worldmap.clear();

    // apple
    worldmap.spawn(apple.x, apple.y, 2);

    // snake
    worldmap.spawn(snakee.head.x, snakee.head.y, 1);
    snakee.body.forEach((part) => {
        worldmap.spawn(part.x, part.y, 1);
    });
    snakee.update();

    // eat apple
    if (snakee.head.x == apple.x && snakee.head.y == apple.y) {
        counter++;
        snakee.add();
        putAppple();
        document.querySelector(".score").innerHTML = counter;
    }

    // draw
    worldmap.draw(ctx);

    // game over
    if (
        snakee.head.x < 0 ||
        snakee.head.y < 0 ||
        snakee.head.x >= worldmap.size.x ||
        snakee.head.y >= worldmap.size.y
    ) {
        gameOver();
    }
}

document.querySelector(".restart").addEventListener("click", () => {
    document.querySelector(".gameover").style.display = "none";
    initgame();
});
