    /**
     * Return HH:MM:SS date from date object
    **/
     export const getFormatedTime = (date:Date) =>{
        return ` ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getUTCSeconds()).padStart(2,"0")} `
    }
 
    
   