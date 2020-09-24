import { min,max,last_price,agressions,offers,price_markers} from '../store'
import { groupBy } from '../utils'
var wsUri = "ws://webfeeder.cedrotech.com/ws";
let websocket
let token = "1f50c44b-8cf5-44b6-bfa1-3058e9dfa858"

export function getMarketStream(ativo){
    websocket= new WebSocket(wsUri);
    websocket.onopen = async  (evt) =>{
        console.log("Connected to Endpoint!");
        await login()
        getQuote(ativo)
        getTrades(ativo)
        getOffers(ativo)
    };
    websocket.onmessage = function (evt) {
        let data = JSON.parse(evt.data)
        if(data.token){
            token = data.token
        }
        if(data.type)
            handleType(data)
    };
    websocket.onerror = function (evt) {
        console.error("ERROR: " + evt.data);
    };
}

function login(){
    return new Promise((resolve,reject)=>{
        try {
            websocket.send(`{  
                "module": "login",  
                "service": "authentication",  
                "parameters": {"login": "dudarenz", "password": "102030"}  
            } `);
            setTimeout(()=>resolve('ok'),3000)
    
        } catch (error) {
            reject('Erro ao logar',error)
        }
    })

}

//Returns Quotes data
function getQuote(ativo) {
    const data = {  
        "token": token,  
        "module": "quotes",  
        "service": "quote",  
        "parameterGet": ativo,  
        "parameters": {"subsbribetype": "1","filter":"2,11,12",  "delay":"400"}  
        }
    websocket.send(JSON.stringify(data));
}
//Returns Trades data
function getTrades(ativo) {
    const data = {"token": token,  
        "module": "quotes",  
        "service": "quoteTrade",  
        "parameterGet": ativo,  
        "parameters": {"subsbribetype": "1", "quantidade": "1" }
    } 
    websocket.send(JSON.stringify(data));
}

function getOffers(ativo){
    const data ={"token": token,  
    "module": "quotes",  
    "service": "aggregatedBook",  
    "parameterGet": ativo,  
    "parameters": {"subsbribetype": "1", "delay":"5000"}
} 
websocket.send(JSON.stringify(data));
}


function handleType(data){
    let handles = {
        "QuoteType":handleQuotes,
        "BusinessBookType":handleTrades,
        "AggregatedBookType":handleBook,
    }
    handles[data.type](data)
}

async function handleTrades(data){
    agressions.update((last)=>{
        for (const agression of data.quoteTrade.L) {
            last.push({
                type:agression.CDA == "A" ? 'buy' : agression.CDA == "V" ? 'sell' : 'direct',
                lots:agression.QT,
                agressor_id: agression.CDA == "A" ? String(agression.PCB).padStart(3,"0") : String(agression.PCL).padStart(3,"0"),
                price:agression.P,
                ticks_consumed:1,
                time:new Date(agression.T)
            })
        }

        return last
    })
}
async function handleBook(data){
    let prices_sell = data["book"]["B"].map(offer=>{return {player_id:"008",lots:offer.Q, price:offer.P}}) 
    let prices_buy = data["book"]["A"].map(offer=>{return {player_id:"008",lots:offer.Q, price:offer.P}}) 
    prices_sell = groupBy(prices_sell,'price')
    prices_buy = groupBy(prices_buy,'price')

    offers.update((old)=>Object.assign(prices_sell,prices_buy) )
}

async function handleQuotes(data){
    let min_price = data.values['12'] ? Number(data.values['12'].replace('.','').replace(',','.')) : null
    let max_price =data.values['11'] ? Number(data.values['11'].replace('.','').replace(',','.')) : null
    let current_price = data.values['2'] ? Number(data.values['2'].replace('.','').replace(',','.')) : null
    min.update((last)=> min_price ? min_price : last)
    max.update((last)=>max_price ? max_price : last)
    last_price.update((last)=>current_price ? current_price : last)

    // if(data.values['13']){
    //     // Set Price markers
    //     price_markers.set({
    //         [Number(data.values['13'].replace('.','').replace(',','.'))]:{ name: 'Fechamento Ant.', color: 'rgba(168, 168, 168, 0.5)' },
    //         [Number(data.values['14'].replace('.','').replace(',','.'))]:{ name: 'Abertura', color: 'rgba(171, 200, 255, 0.5)' },
    //         [Number(data.values['104'].replace('.','').replace(',','.'))]:{ name: 'Ajust Ant.', color: 'rgba(50, 41, 179, 0.5)' },
    //     })
    // }


}


export default websocket
