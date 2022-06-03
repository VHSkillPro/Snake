export default class Vector2i{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    isSame(other){
        return this.x === other.x && this.y === other.y;
    }
};