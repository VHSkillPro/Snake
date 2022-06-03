import { CELL_HEIGHT, CELL_WIDTH } from "./config.js";
import Vector2i from "./vector2i.js";

export const Direction = {UP : 0, LEFT : 1, DOWN : 2, RIGHT : 3};
export const Speed = {SLOW : 600, DEFAULT : 400, FAST : 200, FASTEST: 100, STOP: 10000000};

export function getReverseDirection(direction){
    if (direction == Direction.UP) return Direction.DOWN;
    if (direction == Direction.DOWN) return Direction.UP;
    if (direction == Direction.LEFT) return Direction.RIGHT;
    if (direction == Direction.RIGHT) return Direction.LEFT;
}

export function isInside(l, x, r){
    return l <= x && x <= r;
}

export function posCanvas(pos){
    return new Vector2i(pos.x * CELL_WIDTH, pos.y * CELL_HEIGHT);
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}