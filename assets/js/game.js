import { SNAKE_SPEED } from "./config.js";
import Fruit from "./fruit.js";
import Snake from "./snake.js";
import { Direction } from "./core.js";
import Vector2i from "./vector2i.js";

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.snake = new Snake(canvas);
        this.fruit = new Fruit(canvas);
        this.fruit.randomPos(this.snake.body);
    }

    unset() {
        clearInterval(this.gameLoop);
    }

    event() {
        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case "ArrowLeft":
                    this.snake.changeDirection = Direction.LEFT;
                    break;

                case "ArrowUp":
                    this.snake.changeDirection = Direction.UP;
                    break;

                case "ArrowDown":
                    this.snake.changeDirection = Direction.DOWN;
                    break;

                case "ArrowRight":
                    this.snake.changeDirection = Direction.RIGHT;
                    break;
            }
        });
    }

    gameover() {
        this.unset();
        this.canvas.text("GAME OVER", new Vector2i(this.canvas.size.x / 2, this.canvas.size.y / 2), 40, "Arial");
    }

    play() {
        this.event();

        this.gameLoop = setInterval(() => {
            // Update
            this.snake.update();

            // Check eat fruit
            if (this.snake.eatFruit(this.fruit)) {
                this.snake.isEatFruit = true;
                this.fruit.randomPos(this.snake.body);
            }

            // Draw canvas
            this.canvas.clear();
            this.fruit.draw();
            this.snake.draw();

            // Check Lose
            if (this.snake.isLose()) {
                this.gameover();
            }
        }, SNAKE_SPEED);
    }
}