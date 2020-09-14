import type IAgression from "../Agressions/IAgression"
import { getFormatedTime } from "../../utils"
export class Renkko {
    canvas:HTMLCanvasElement 
    ctx:CanvasRenderingContext2D
    Xlabels:string[]
    constructor(canvas){
        this.canvas = canvas
        this.ctx =  canvas.getContext("2d");
    }

    drawXAxis(labels:string[]){
        let numbs = 0
        for (const label of labels.splice(0,4)) {
            this.ctx.font = "12px Roboto"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(label, numbs, 90);
            numbs+=80
        }
    }


    update(agressions:IAgression[]){
        this.clear()
        this.Xlabels = agressions.map(agression=>getFormatedTime(agression.time))
        this.drawXAxis(this.Xlabels)

    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

