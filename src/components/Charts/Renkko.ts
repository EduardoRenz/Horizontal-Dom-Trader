import type IAgression from "../Agressions/IAgression"
import { getFormatedTime } from "../../utils"
import  ChartElement  from "./ChartElement"
import CanvasElement,{ICoordinates} from "./CanvasElement"
import Candle from './Candle'

class Label extends ChartElement {
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

export class Renkko extends CanvasElement {
    RIGHT_OFFSET: number = 40
    BOTTOM_OFFSET: number = 2
    Y_OFFSET = 10
    PRICE_TICK: number = 0.5
    CANDLE_AREA_RIGHT:number
    x_labels:string[]
    y_labels:Label[]
    y_range:number[]
    max_price:number
    min_price:number
    candles : Candle[] = []

    constructor(canvas:HTMLCanvasElement){
        super(canvas)
        this.CANDLE_AREA_RIGHT = this.canvas.width - 65
    }
    drawXLabels(labels:string[]){
        let numbs = 0
        for (const label of labels) {
            this.ctx.font = "12px Roboto"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(label, numbs, this.canvas.height -this.BOTTOM_OFFSET);
            numbs+=80
        }
    }
    public drawYLabels(){
        this.y_labels.forEach(label => {
            label.draw(this.ctx)
        });
    }


    drawCandles(agressions:IAgression[]){
        this.candles = []
        let agressions_copy = Array.from(agressions.slice(0,60))
        for (const [index,agression] of agressions_copy.entries()) {
            let last_candle = this.candles[index-1]
            let last_price_is_bigger = last_candle?.price > agression.price
            let candle_direction = last_price_is_bigger ? 20 : 10
            let candle_color = last_price_is_bigger? "red" : "green"
            let price_label = this.y_labels.find(label=>label.value == agression.price)
            this.candles.push(
                new Candle(
                    {
                        x:(last_candle?.x-Candle.margin) || this.CANDLE_AREA_RIGHT - Candle.margin,y:price_label?.y
                    },
                    agression.price,
                    candle_color
                ))
        }
        this.candles.forEach(candle => {
            candle.draw(this.ctx)
        });
    }

    update(agressions:IAgression[]){
        this.clear()
        this.getMinMaxY(agressions)
        this.generateRangeY()
        this.setXLabels(agressions)
        this.setYLabels()

        //this.drawYAxis()
        //this.drawXLabels(this.x_labels)
        this.drawCandles(agressions)
    }

    private setXLabels(agressions: IAgression[]) {
        this.x_labels = agressions.map(agression => getFormatedTime(agression.time))
    }

    private getMinMaxY(agressions: IAgression[]) {
        this.max_price = agressions.map(agression => agression.price).reduce((acc, agg) => acc > agg ? acc : agg)
        this.min_price = agressions.map(agression => agression.price).reduce((acc, agg) => acc < agg ? acc : agg)
    }
    private setYLabels() {
        this.y_labels = []
        for (const [index, price] of this.y_range.splice(0, 4).entries()) {
            let last_label = this.y_labels[index - 1]
            this.y_labels.push(new Label({ x: this.canvas.width - this.RIGHT_OFFSET, y: (last_label?.y + Label.LABEL_MARGIN) || 0 }, price))
        }
    }
    /**
     * Generate the prices from min to max, incrementing by tick size
     */
    private generateRangeY(): number[]{
        let values = []
        for (let index = this.min_price; index <= this.max_price; index+=this.PRICE_TICK) {
            values.push(index)
        }
        this.y_range = values.sort((a,b)=>b-a)
        return this.y_range
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

