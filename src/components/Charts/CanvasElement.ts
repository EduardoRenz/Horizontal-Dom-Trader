import type ChartElement from "./ChartElement"

export interface ICoordinates {
    x:number
    y:number
}

export default class CanvasElement {
    protected canvas:HTMLCanvasElement 
    protected ctx:CanvasRenderingContext2D
    viewPortX:number = 0
    viewPortY:number = 0
    mouse:ICoordinates
    mouseMoving:boolean = false

    constructor(canvas:HTMLCanvasElement){
        this.canvas = canvas
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.ctx =  canvas.getContext("2d");
        
        this.canvas.addEventListener('mousemove',(evt=>{
            let timer
            this.mouseMoving = true
            this.mouse = this.getMousePos(evt)
            clearTimeout(timer);
            timer=setTimeout(()=>this.mouseMoving = false,300);
        }))
    }

    private getMousePos(evt) : ICoordinates {
        var rect = this.canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }

    /**
     * Centralize the viewport Y axis on this element
     * @param element Chart Element 
     */
    public centralizeYOnElement(element:ChartElement){
           this.viewPortY = element.y - this.canvas.height 
    }

}