export class Player{
    x : number;
    y : number;
    vit : number;
    width : number;
    height : number;

    constructor(x : number, y : number, vit : number){
        this.x = x;
        this.y = y;
        this.vit = vit;
        this.width = 50;
        this.height = 50;
    }

    render(ctx : CanvasRenderingContext2D){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}