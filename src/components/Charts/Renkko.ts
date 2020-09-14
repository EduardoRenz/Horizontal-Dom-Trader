import type IAgression from "../Agressions/IAgression"
import { getFormatedTime } from "../../utils"
export class Renkko {
    canvas:HTMLCanvasElement 
    ctx:CanvasRenderingContext2D
    Xlabels:string[]
    Ylabels:number[]
    RIGHT_OFFSET: number = 20
    BOTTOM_OFFSET: number = 2
    constructor(canvas){
        this.canvas = canvas
        this.ctx =  canvas.getContext("2d");
    }



    drawXAxis(labels:string[]){
        let numbs = 0
        for (const label of labels.splice(0,4)) {
            this.ctx.font = "12px Roboto"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(label, numbs, this.canvas.height -this.BOTTOM_OFFSET);
            numbs+=80
        }
    }

    drawYAxis(prices:number[]){
        console.log(prices)
        let numbs = 20
        for (const price of prices.splice(0,4)) {
            this.ctx.font = "12px Roboto"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(price.toFixed(1), this.canvas.width - this.RIGHT_OFFSET, numbs);
            numbs+=30
        }
    }


    update(agressions:IAgression[]){
        this.clear()
        this.Xlabels = agressions.map(agression=>getFormatedTime(agression.time))
        this.Ylabels = agressions.map(agression=>agression.price).sort((a,b)=>b-a)
        this.Ylabels = Array.from(new Set(this.Ylabels))
        this.drawXAxis(this.Xlabels)
        this.drawYAxis(this.Ylabels)

    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

