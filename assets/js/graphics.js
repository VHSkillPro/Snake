export default class Canvas{
    constructor(idCanvas, size){
        this.canvas = document.getElementById(idCanvas);
        this.ctx = canvas.getContext('2d');
        this.canvas.width = size.x;
        this.canvas.height = size.y;
    }
 
    // pos, size : Vector2i
    rectangle(pos, size, color = "black"){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(pos.x, pos.y, size.x, size.y);
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};
