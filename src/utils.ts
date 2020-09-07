    import { quintOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';
    import { agressions_quantity_colors } from "./store.js";
    /**
     * Return HH:MM:SS date from date object
    **/
     export const getFormatedTime = (date:Date) =>{
        if(!date)
            return null
        return ` ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getUTCSeconds()).padStart(2,"0")} `
     }
    export const dateIsLowerThan = (main_date:Date,date_to_compare:Date) => main_date < date_to_compare;

    export const getPriceID = (price:Number) : string =>{
        return 'price_'+price.toFixed(1).replace('.','_')
    }
    
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
    
    
    export const getQuantityColor = (quantity:Number) :String =>{
        let found = agressions_quantity_colors?.find(color=>quantity>= color.min && quantity<=color.max)
        return found?.color || ''
      }