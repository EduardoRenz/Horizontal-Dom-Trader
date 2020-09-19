export interface ICoordinates {
    x:number
    y:number
}

export default class CanvasElement {
    protected canvas:HTMLCanvasElement 
    protected ctx:CanvasRenderingContext2D
    translateX:number = 0
    translateY:number = 0
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

}