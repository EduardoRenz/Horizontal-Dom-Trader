import ChartElement  from "./ChartElement"
import type {ICoordinates} from "./CanvasElement"
export default class Label extends ChartElement {
    value: any
    x:number
    y:number
    width:number
    color:string = "white"
    static LABEL_MARGIN: number = 20
    constructor(coordinates:ICoordinates,value:any){
        super(coordinates,null)
        this.value=value
    }
    draw(ctx:CanvasRenderingContext2D) : void {
        ctx.font = "12px Roboto"
        ctx.fillStyle = "white"
        ctx.fillText(this.value.toFixed(1), this.x, this.y);
    }
}
