    /**
     * Return HH:MM:SS date from date object
    **/
     export const getFormatedTime = (date:Date) =>{
        if(!date)
            return null
        return ` ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getUTCSeconds()).padStart(2,"0")} `
     }
    export const dateIsLowerThan = (main_date:Date,date_to_compare:Date) => main_date < date_to_compare;



    export const lastPriceID = (price:Number) : String =>{
        return 'price_'+price.toFixed(1).replace('.','_')
    }
    
   