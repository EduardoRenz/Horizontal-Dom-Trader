import type IAgression from "../Agressions/IAgression"
import { getFormatedTime } from "../../utils"

interface ICandle {
    x:number
    y:number
    width:number
    height:number
    color?:string
    price:number
    draw?(ctx: CanvasRenderingContext2D): void 
}
class Candle implements ICandle {
    width: number = 5
    height: number = 10
    static margin:number =5
    color:string
    x:number
    y:number
    price:number

    constructor(price,color,coordinates){
        this.price = price
        this.color = color
        this.x = coordinates.x
        this.y = coordinates.y
    }

    draw(ctx:CanvasRenderingContext2D) :void{
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

export class Renkko {
    canvas:HTMLCanvasElement 
    ctx:CanvasRenderingContext2D
    RIGHT_OFFSET: number = 40
    BOTTOM_OFFSET: number = 2
    PRICE_TICK: number = 0.5
    CANDLE_AREA_RIGHT:number
    x_labels:string[]
    y_labels:number[]
    max_price:number
    min_price:number
    candles : Candle[] = []
    constructor(canvas){
        this.canvas = canvas
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.ctx =  canvas.getContext("2d");

        this.CANDLE_AREA_RIGHT = this.canvas.width - 65
    }

    drawXAxis(labels:string[]){
        let numbs = 0
        for (const label of labels) {
            this.ctx.font = "12px Roboto"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(label, numbs, this.canvas.height -this.BOTTOM_OFFSET);
            numbs+=80
        }
    }

    drawYAxis(prices:number[]){
        let offset = 20
        for (const price of prices.splice(0,4)) {
            this.ctx.font = "12px Roboto"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(price.toFixed(1), this.canvas.width - this.RIGHT_OFFSET, offset);
            offset+=30
        }
    }

    drawCandles(agressions:IAgression[]){
        this.candles = []
        let agressions_copy = Array.from(agressions.slice(0,60))
        for (const [index,agression] of agressions_copy.entries()) {
            let last_candle = this.candles[index-1]
            let last_price_is_bigger = last_candle?.price > agression.price
            let candle_direction = last_price_is_bigger ? 10 : 20
            let candle_color = last_price_is_bigger? "red" : "green"
            this.candles.push(
                new Candle(agression.price,candle_color,
                    {
                        x:(last_candle?.x-Candle.margin) || this.CANDLE_AREA_RIGHT - Candle.margin,y:candle_direction
                    }
                ))
        }
        this.candles.forEach(candle => {
            candle.draw(this.ctx)
        });
    }

    update(agressions:IAgression[]){
        this.clear()
        this.getMinMaxY(agressions)
        this.x_labels = agressions.map(agression=>getFormatedTime(agression.time))
        this.y_labels = this.generateRangeY()
        this.drawXAxis(this.x_labels)
        this.drawYAxis(this.y_labels)
        this.drawCandles(agressions)
    }

    private getMinMaxY(agressions: IAgression[]) {
        this.max_price = agressions.map(agression => agression.price).reduce((acc, agg) => acc > agg ? acc : agg)
        this.min_price = agressions.map(agression => agression.price).reduce((acc, agg) => acc < agg ? acc : agg)
    }

    /**
     * Generate the prices from min to max, incrementing by tick size
     */
    private generateRangeY(): number[]{
        let values = []
        for (let index = this.min_price; index <= this.max_price; index+=this.PRICE_TICK) {
            values.push(index)
        }
        return values.sort((a,b)=>b-a)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

