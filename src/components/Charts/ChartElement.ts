export default class ChartElement {
    public x:number
    public y:number
    width:number
    height:number
    color?:string

    constructor(coordinates,color){
        this.x = coordinates.x
        this.y = coordinates.y
        this.color = color ? color : this.color
    }

    draw(ctx:CanvasRenderingContext2D): void{
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}