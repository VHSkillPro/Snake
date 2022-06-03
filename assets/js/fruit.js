import { CELL_HEIGHT, CELL_WIDTH, NUMBER_COLUMNS, NUMBER_ROWS } from "./config.js";
import { getRandomInt, posCanvas } from "./core.js";
import Vector2i from "./vector2i.js";

export default class Fruit{
    constructor(canvas){
        this.canvas = canvas;
        this.pos = new Vector2i();
    }

    randomPos(exclude){
        do{
            this.pos.x = getRandomInt(NUMBER_COLUMNS);
            this.pos.y = getRandomInt(NUMBER_ROWS);

            let isOk = true;
            for (let cell of exclude)
                if (cell.isSame(this.pos)){
                    isOk = false;
                    break;
                }
                
            if (isOk) break;
        }
        while (1);
    }

    draw(){
        this.canvas.rectangle(posCanvas(this.pos), new Vector2i(CELL_WIDTH, CELL_HEIGHT), "green");
    }
};