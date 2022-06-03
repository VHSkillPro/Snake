import * as Configs from "./config.js";
import { Direction, getReverseDirection, isInside } from "./core.js";
import Vector2i from "./vector2i.js";

export default class Snake{
    constructor(canvas){
        this.body = [];

        let cnt = Configs.NUMBER_SNAKE_DOT - 1;
        for (let i = 1; i <= Configs.NUMBER_SNAKE_DOT; i++, cnt--){
            this.body[cnt] = new Vector2i(i, 1);
        }

        this.direction = Direction.RIGHT;
        this.changeDirection = Direction.RIGHT;
        this.canvas = canvas;
        this.isEatFruit = false;
    }

    unset(){
        clearInterval(this.loop);
    }

    // -----------------------
    draw(){
        for (let i = this.body.length - 1; i >= 0; i--){
            let dot = this.body[i];

            const cellSize = new Vector2i(Configs.CELL_WIDTH, Configs.CELL_HEIGHT);
            const position = new Vector2i(dot.x * cellSize.x, dot.y * cellSize.y);

            if (i == 0) this.canvas.rectangle(position, cellSize, "red");
            else this.canvas.rectangle(position, cellSize, "black");
        }
    }

    update(){
        if (this.isEatFruit) {
            this.body.push(new Vector2i(-1, -1));
            this.isEatFruit = false;
        }

        for (let i = this.body.length - 1; i > 0; i--){
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        if (getReverseDirection(this.changeDirection) !== this.direction){
            this.direction = this.changeDirection;
        }

        switch (this.direction){
            case Direction.RIGHT:
                this.body[0].x++;
                break;
            
            case Direction.LEFT:
                this.body[0].x--;
                break;
            
            case Direction.UP:
                this.body[0].y--;
                break;
        
            case Direction.DOWN:
                this.body[0].y++;
                break;
        };
    }

    // -------------------------
    eatSelf(){
        for (let i = this.body.length - 1; i > 0; i--)
            if (this.body[0].isSame(this.body[i]))
                return true;
        return false;
    }

    hitWall(){
        return !(isInside(0, this.body[0].x, Configs.NUMBER_COLUMNS - 1)
                && isInside(0, this.body[0].y, Configs.NUMBER_ROWS - 1));
    }

    isLose(){
        if (this.eatSelf()) return true;
        if (this.hitWall()) return true;
    }

    eatFruit(fruit){
        return this.body[0].isSame(fruit.pos);
    }
};