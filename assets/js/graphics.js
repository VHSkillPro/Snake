export default class Canvas {
    constructor(idCanvas, size) {
        this.canvas = document.getElementById(idCanvas);
        this.ctx = canvas.getContext('2d');
        this.canvas.width = size.x;
        this.canvas.height = size.y;
        this.size = size;
    }

    // pos, size : Vector2i
    rectangle(pos, size, color = "black") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(pos.x, pos.y, size.x, size.y);
    }

    text(message, pos, fontSize, fontFamily) {
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "black";
        this.ctx.font = `${fontSize}px ${fontFamily}`;
        this.ctx.fillText(message, pos.x, pos.y);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};