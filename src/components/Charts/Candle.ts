import ChartElement from "./ChartElement"
import type { ICoordinates } from "./CanvasElement"
export interface ICandle {
    x:number
    y:number
    width:number
    height:number
    color?:string
    price:number
    draw?(ctx: CanvasRenderingContext2D): void 
}
export default class Candle extends ChartElement implements ICandle {
    static margin:number =5
    price:number
    width:number = 5
    height:number = 20

    constructor(coordinates:ICoordinates,price:number,color:string){
        super(coordinates,color)
        this.price = price
    }
}