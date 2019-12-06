export class Player{
    x : number;
    y : number;
    vit : number;
    width : number;
    height : number;
    img;

    constructor(x : number, y : number, vit : number){
        this.x = x;
        this.y = y;
        this.vit = vit;

        this.img = new Image();
        this.img.src = '../../../../../assets/rayman.gif';
        this.width = this.img.width / 4;
        this.height = this.img.height / 4;
    }

    render(ctx : CanvasRenderingContext2D){
        ctx.fillStyle = 'red';
        ctx.drawImage(this.img, this.x, this.y, this.img.width / 4, this.img.height / 4);
    }
}