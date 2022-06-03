import { Speed } from "./core.js";

export const ID_CANVAS = 'canvas';
export const CELL_WIDTH = 20;
export const CELL_HEIGHT = 20;
export const NUMBER_SNAKE_DOT = 3;

export let NUMBER_ROWS = 30;
export let NUMBER_COLUMNS = 50;
export let SNAKE_SPEED = Speed.FASTEST;

export function setSnakeSpeed(speed){
    SNAKE_SPEED = Speed[speed];
}
