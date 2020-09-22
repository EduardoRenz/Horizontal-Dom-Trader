import type IAgression from "../Agressions/IAgression"
import { getFormatedTime } from "../../utils"
import CanvasElement from "./CanvasElement"
import Candle from './Candle'
import Label from './Labels'
export class Renkko extends CanvasElement {
    RIGHT_OFFSET: number = 40
    BOTTOM_OFFSET: number = 2
    Y_OFFSET = 10
    PRICE_TICK: number = 0.5
    CANDLE_AREA_RIGHT:number
    LABEL_AREA_WIDTH = 64
    x_labels:string[]
    y_labels:Label[]
    y_range:number[]
    max_price:number
    min_price:number
    candles : Candle[] = []

    constructor(canvas:HTMLCanvasElement){
        super(canvas)
        this.CANDLE_AREA_RIGHT = this.canvas.width - this.LABEL_AREA_WIDTH
    }
    
    drawCandles(){
        this.candles.forEach(candle => {
            candle.draw(this.ctx)
        });
    }

    private createCandles(agressions: IAgression[]) {
        this.candles = []
        let agressions_copy = Array.from(agressions.slice(0, 60))
        for (const [index, agression] of agressions_copy.entries()) {
            let last_candle = this.candles[index - 1]
            let last_price_is_bigger = last_candle?.price > agression.price
            let candle_color = last_price_is_bigger ? "green" : "red"
            let price_label = this.y_labels.find(label => label.value == agression.price)
            this.candles.push(
                new Candle(
                    {
                        x: (last_candle?.x - Candle.margin) || this.CANDLE_AREA_RIGHT - Candle.margin,
                        y: price_label?.y + this.viewPortY
                    },
                    agression.price,
                    candle_color
            ))
        }
    }

    update(agressions:IAgression[]){
        this.clear()
        this.generateRangeY()
        this.setYLabels()
        this.getMinMaxY(agressions)
        this.setXLabels(agressions)
        this.createCandles(agressions)

        this.drawYLabels()
        //this.drawXLabels(this.x_labels)
        this.drawCandles()
    }

    public drawXLabels(labels:string[]){
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
            this.y_labels.push(new Label({ x: this.canvas.width - this.RIGHT_OFFSET, y: ((last_label?.y + Label.LABEL_MARGIN) ) || 0 }, price))
            
            // if(last_label) {
            //     this.centralizeYOnElement(last_label)
            //     console.log(`price:${last_label.value} | last_label:${last_label?.y} | Margin:${Label.LABEL_MARGIN} | viewport:${this.viewPortY}`)
            //     console.log(((last_label?.y + Label.LABEL_MARGIN) - this.viewPortY))
            // }
                
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

