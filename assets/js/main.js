import Canvas from "./graphics.js";
import * as Configs from "./config.js";
import { posCanvas } from "./core.js";
import Vector2i from "./vector2i.js";
import Game from "./game.js";

let game = new Game();
let canvas = new Canvas(Configs.ID_CANVAS, posCanvas(new Vector2i(Configs.NUMBER_COLUMNS, Configs.NUMBER_ROWS)));

const playButton = document.getElementById("playButton");
playButton.addEventListener('click', (e) => {
    game.unset();

    Configs.setSnakeSpeed(document.getElementById("speed").value);

    game = new Game(canvas);
    game.play();
});

