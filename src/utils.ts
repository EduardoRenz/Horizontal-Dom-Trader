    import { quintOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';

    interface IColorRanges {
      min:number,
      max:number,
      color:string
    }
    interface IColorConfig {
      offer:Boolean,
      agression:Boolean,
      ranges:Array<IColorRanges>
    }
    /** Return HH:MM:SS date from date object **/
    export const getFormatedTime = (date:Date) => date  &&  ` ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getUTCSeconds()).padStart(2,"0")} `
    /** Checks if date is lower than other date **/
    export const dateIsLowerThan = (main_date:Date,date_to_compare:Date) => main_date < date_to_compare;
    /** Get/Generate a id for each price **/
    export const getPriceID = (price:Number) : string => 'price_'+price.toFixed(1).replace('.','_') 
    
    export const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 150,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
    });
    
    
    export const getQuantityColor = (quantity:Number,ranges :IColorRanges[]) :String =>{
        let found = ranges?.find(color=>quantity>= color.min && quantity<=color.max)
        return found?.color || ''
    }