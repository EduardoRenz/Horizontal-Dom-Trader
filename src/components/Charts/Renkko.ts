import type IAgression from "../Agressions/IAgression"
import { getFormatedTime } from "../../utils"
import  ChartElement  from "./ChartElement"
interface ICandle {
    x:number
    y:number
    width:number
    height:number
    color?:string
    price:number
    draw?(ctx: CanvasRenderingContext2D): void 
}
class Candle extends ChartElement implements ICandle {
    static margin:number =5
    price:number
    width:number = 5
    height:number = 10

    constructor(coordinates:any,price:number,color:string){
        super(coordinates,color)
        this.price = price
    }
}

class Label extends ChartElement {
    value: any
    x:number
    y:number
    width:number
    color:string = "white"
    static LABEL_MARGIN: number = 20
    constructor(coordinates:any,value:any){
        super(coordinates,null)
        this.value=value
    }
    draw(ctx:CanvasRenderingContext2D) : void {
        ctx.font = "12px Roboto"
        ctx.fillStyle = "white"
        ctx.fillText(this.value.toFixed(1), this.x, this.y);
    }
}

export class Renkko {
    canvas:HTMLCanvasElement 
    ctx:CanvasRenderingContext2D
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

    drawYAxis(){
        this.y_labels = []
        for (const [index,price] of this.y_range.splice(0,4).entries()) {
            let last_label = this.y_labels[index-1]
            this.y_labels.push(new Label({x:this.canvas.width - this.RIGHT_OFFSET,y:(last_label?.y + Label.LABEL_MARGIN) || 0  },price))
        }
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
        this.x_labels = agressions.map(agression=>getFormatedTime(agression.time))
        this.y_range = this.generateRangeY()
        this.drawXAxis(this.x_labels)
        this.drawYAxis()
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

