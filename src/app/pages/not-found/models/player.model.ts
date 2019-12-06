export class Player{
    x : number;
    y : number;
    vit : number;
    width : number;
    height : number;
    frame : number = -1;
    img;
    imgs : string[];

    constructor(x : number, y : number, vit : number){
        this.x = x;
        this.y = y;
        this.vit = vit;

        this.imgs = [];
        for(let i = 0; i < 58; i++){
            if(i < 10) this.imgs.push('../../../../../assets/frames/frame_0'+i+'_delay-0.05s.gif');
            else this.imgs.push('../../../../../assets/frames/frame_'+i+'_delay-0.05s.gif');
        }
        console.log(this.imgs);
        this.img = new Image();
        this.img.src = '../../../../../assets/rayman.gif';
        this.width = this.img.width / 4;
        this.height = this.img.height / 4;
        setInterval(e => {
            this.frame++;
            this.img.src = this.imgs[this.frame];
            if(this.frame == 57) this.frame = -1;
        }, 50);
    }

    render(ctx : CanvasRenderingContext2D){
        ctx.fillStyle = 'red';
        ctx.drawImage(this.img, this.x, this.y, this.img.width / 4, this.img.height / 4);
    }
}